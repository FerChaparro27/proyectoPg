from rest_framework import serializers
from .models import MainUser, Instructor, Clients, Gym, Routine
# from .models import Plan


class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"


class instructorSerializer(serializers.ModelSerializer):
     class Meta:
         model = Instructor
         fields = "__all__"

class clientsSerializer(serializers.ModelSerializer):
     class Meta:
         model = Clients
         fields = "__all__"


class gymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = "__all__"

class routineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = "__all__"
