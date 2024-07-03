from rest_framework import serializers
from .models import MainUser


class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"
