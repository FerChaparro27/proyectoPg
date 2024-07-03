from rest_framework import serializers
from .models import MainUser


class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"

class instructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"

class clientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"
