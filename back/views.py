

#from django.http import HttpResponse # Chat me lo tiro como necesario (Discutir)
from django.shortcuts import render
from rest_framework import generics
from .models import MainUser, Clients, Instructor, Routine, Plan, Dues, Activity, Voucher, Transactions
from .serializer import mainUserSerializer, instructorSerializer, clientsSerializer, routineSerializer, planSerializer, duesSerializer, activitySerializer, voucherSerializer, transactionsSerializer
#imports agregados para validar
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

#VISTA RAIZ DE LA API
# from django.http import JsonResponse

# Create your views here.

#VISTA RAIZ
# def home(request):
#     return JsonResponse({"message": "Welcome to the API Home! Select an API section into the Path"})

#REGISTRO E INGRESO DE USUARIOS
#Registro
# class RegisterView(APIView): #APIView es una vista que se basa sobre una clase, en este caso USER que permite solicitar y devolver respuestas HTTP
#     def post(self, request): #Se define el metodo CRUD
#         serializer = mainUserSerializer(data=request.data)#Se crea una instancia del serializador, enviandole datos atraves de la solcitud post request data
#         serializer.is_valid(raise_exception=True)#verifica que los datos que se envian son validos, sino lanza una excepcion
#         serializer.save()#si los datos son validos los guarda en la BD
#         return Response(serializer.data)#retorna una respuesta HTTP con los datos enviados
    
#Ingreso con validacion de mail y contraseña
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']

        # Busca un usuario en la BD
        user = MainUser.objects.filter(mail=email).first()

        # Verifica si el usuario no fue encontrado, si no lo encuentra arroja una excepción
        if user is None:
            raise AuthenticationFailed('User not found!')

        # Si el usuario existe, retorna una respuesta exitosa
        return Response({'message': 'Login successful'})

class UserView(APIView):
    def get(self, request):
        email = request.query_params.get('email')

        if not email:
            raise AuthenticationFailed('Email not provided!')

        user = MainUser.objects.filter(mail=email).first()

        if not user:
            raise AuthenticationFailed('User not found!')

        serializer = mainUserSerializer(user)
        return Response(serializer.data)
    
#Cierre de sesion
# class LogoutView(APIView):
#     def post(self, request):
#         #genera una respuesta http
#         response = Response()
#         #como es un log out se borran los datos almacenados
#         response.delete_cookie('jwt')
#         response.data={
#             'message':'success'
#         }

#         return response

class mainUserList(generics.ListCreateAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
    pass
class mainUserRetrieve(generics.RetrieveDestroyAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
    pass

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
