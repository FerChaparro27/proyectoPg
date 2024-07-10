#from django.http import HttpResponse # Chat me lo tiro como necesario (Discutir regu)
from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import MainUser, Clients, Instructor, Routine, Plan, Share, Activity, Voucher
from .serializer import mainUserSerializer, instructorSerializer, clientsSerializer, routineSerializer, planSerializer, shareSerializer, activitySerializer, voucherSerializer

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

class shareList(generics.ListCreateAPIView):
    queryset = Share.objects.all()
    serializer_class = shareSerializer
    pass
class shareRetrieve(generics.RetrieveDestroyAPIView):
    queryset = Share.objects.all()
    serializer_class = shareSerializer
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
