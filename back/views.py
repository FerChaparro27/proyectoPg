from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import MainUser
from .serializer import mainUserSerializer

# Create your views here.

class mainUserList(generics.ListCreateAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
    pass

class mainUserRetrieve(generics.RetrieveDestroyAPIView):
    queryset = MainUser.objects.all()
    serializer_class = mainUserSerializer
    pass