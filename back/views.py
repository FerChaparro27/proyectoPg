

#from django.http import HttpResponse # Chat me lo tiro como necesario (Discutir)
from django.shortcuts import render
from rest_framework import generics
from .models import MainUser, Clients, Instructor, Routine, Plan, Dues, Activity, Voucher, Transactions
from .serializer import mainUserSerializer, instructorSerializer, clientsSerializer, routineSerializer, planSerializer, duesSerializer, activitySerializer, voucherSerializer, transactionsSerializer
#imports agregados para validar
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.hashers import check_password
from rest_framework.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.decorators import api_view

#VISTA RAIZ DE LA API
# from django.http import JsonResponse

# Create your views here.

#VISTA RAIZ
# def home(request):
#     return JsonResponse({"message": "Welcome to the API Home! Select an API section into the Path"})

#REGISTRO E INGRESO DE USUARIOS
class RegisterView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        if MainUser.objects.filter(mail=email).exists():
            raise ValidationError('Email already exists!')

        user = MainUser(mail=email, password=make_password(password))
        user.save()

        return Response({'message': 'User registered successfully'})


@api_view(['POST'])
def create_routine(request):
    try:
        client = Clients.objects.get(id=request.data['client'])
    except Clients.DoesNotExist:
        return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
    
    routine_data = {
        'client': client.id,
        'day': request.data['day'],
        'name': request.data['name'],
        'details': request.data['details']
    }
    
    serializer = routineSerializer(data=routine_data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Ingreso con validacion de mail y contraseña
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        # Busca un usuario en la BD
        user = MainUser.objects.filter(mail=email).first()

        # Verifica si el usuario no fue encontrado, si no lo encuentra arroja una excepción
        if user is None:
            raise AuthenticationFailed('User not found!')

        # Verifica la contraseña
        if not check_password(password, user.password):
            raise AuthenticationFailed('Incorrect password!')

        # Si el usuario y la contraseña son correctos, retorna una respuesta exitosa
        return Response({'message': 'Login successful'})
    
class UserView(APIView):
    def get(self, request):
        email = request.query_params.get('email')
        password = request.query_params.get('password')

        if not email or not password:
            raise AuthenticationFailed('Email and password must be provided!')

        user = MainUser.objects.filter(mail=email).first()

        if not user:
            raise AuthenticationFailed('User not found!')

        if not check_password(password, user.password):
            raise AuthenticationFailed('Incorrect password!')

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
