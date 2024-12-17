#from django.http import HttpResponse # Chat me lo tiro como necesario (Discutir)
from django.shortcuts import render
from rest_framework import generics
from .models import MainUser, Clients, Instructor, Routine, Plan, Dues, Activity, Voucher, Transactions
from .serializer import mainUserSerializer, instructorSerializer, clientsSerializer, routineSerializer, planSerializer, duesSerializer, activitySerializer, voucherSerializer, transactionsSerializer
#imports agregados para validar
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime

# Create your views here.

#REGISTRO E INGRESO DE USUARIOS
#Registro
class RegisterView(APIView): #APIView es una vista que se basa sobre una clase, en este caso USER que permite solicitar y devolver respuestas HTTP
    def post(self, request): #Se define el metodo CRUD
        serializer = mainUserSerializer(data=request.data)#Se crea una instancia del serializador, enviandole datos atraves de la solcitud post request data
        serializer.is_valid(raise_exception=True)#verifica que los datos que se envian son validos, sino lanza una excepcion
        serializer.save()#si los datos son validos los guarda en la BD
        return Response(serializer.data)#retorna una respuesta HTTP con los datos enviados
    
#Ingreso con validacion
class LoginView(APIView):
    def post(self, request):
        #Los dos request extraen el dato especifico del cuerpo de la solicitud POST
        name = request.data['name']
        password = request.data['password']

        #busca un user en la BD 
        user = MainUser.objects.filter(name=name).first()

        #verifica si el usuario no fue encontrado, si no lo encuentra arroja una excepcion
        if user is None:
            raise AuthenticationFailed('User not found!')
        
        #verifica si la password del usuario es igual o no a la almacenada, dependiendo de eso arroja o no una excepcion
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        
        #Payload cumple el rol de diccionario, el cual almacena los datos del usuario (id), determina el tiempo de expiracion y el tiempo de emision del token
        payload = {
            'id': user.id,
            'exp':datetime.datetime.now()+datetime.timedelta(minutes=60),
            'iat': datetime.datetime.now()
        }

        #token codifica el payload y lo transorma a JWT mediante HS256 
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        #'secret' variable de entorno para mayor seguridad

        #crea una respuesta http vacia
        response = Response()

        #httponly permite que no se observe el token en el front, solo que nos permita trabajar con el back
        response.set_cookie(key='jwt',value=token, httponly=True)
        #asignamos los datos de la respuesta
        response.data={
            'jwt':token
        }

        #lo que antes era una respuesta http vacia, ahora lleva el token de validacion
        return response

class UserView(APIView):
    def get(self, request):
        #intenta obtener el token desde las cookies
        token = request.COOKIES.get('jwt')

        #verifica si no hay un token
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        
        #Intenta decodificar el token, si expiro arroja una excepcion
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            #se aclara lo q se va a decode(token) usando la clave y el algoritmo
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        
        #busca el usuario que coincida con el id dentro del payload
        user = MainUser.objects.filter(id=payload['id']).first()

        #serializa los datos del usuario
        serializer = mainUserSerializer(user)

        return Response(serializer.data)
    
#Cierre de sesion
class LogoutView(APIView):
    def post(self, request):
        #genera una respuesta http
        response = Response()
        #como es un log out se borran los datos almacenados
        response.delete_cookie('jwt')
        response.data={
            'message':'success'
        }

        return response

#CREACION DE USUARIOS BASE
# class mainUserList(generics.ListCreateAPIView):
#     queryset = MainUser.objects.all()
#     serializer_class = mainUserSerializer
#     pass
# class mainUserRetrieve(generics.RetrieveDestroyAPIView):
#     queryset = MainUser.objects.all()
#     serializer_class = mainUserSerializer
#     pass

class transactionsList(generics.ListCreateAPIView):
    queryset = Transactions.objects.all()
    serializer_class = transactionsSerializer
    pass
class transactionsRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Transactions.objects.all()
    serializer_class = transactionsSerializer
    pass

class instructorList(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = instructorSerializer
    pass
class instructorRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = instructorSerializer
    pass


class clientsList(generics.ListCreateAPIView):
    queryset = Clients.objects.all()
    serializer_class = clientsSerializer
    pass
class clientsRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Clients.objects.all()
    serializer_class = clientsSerializer
    pass

class routineList(generics.ListCreateAPIView):
    queryset = Routine.objects.all()
    serializer_class = routineSerializer
    pass
class routineRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Routine.objects.all()
    serializer_class = routineSerializer
    pass

class planList(generics.ListCreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = planSerializer
    pass
class planRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = planSerializer
    pass

class duesList(generics.ListCreateAPIView):
    queryset = Dues.objects.all()
    serializer_class = duesSerializer
    pass
class duesRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Dues.objects.all()
    serializer_class = duesSerializer
    pass

class activityList(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = activitySerializer
    pass
class activityRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = activitySerializer
    pass

class voucherList(generics.ListCreateAPIView):
    queryset = Voucher.objects.all()
    serializer_class = voucherSerializer
    pass
class voucherRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Voucher.objects.all()
    serializer_class = voucherSerializer
    pass
