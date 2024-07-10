from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import MainUser, Clients, Instructor
from .serializer import mainUserSerializer, instructorSerializer, clientsSerializer

# Create your views here.

class mainUserList(generics.ListCreateAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
    pass
class mainUserRetrieve(generics.RetrieveDestroyAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
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