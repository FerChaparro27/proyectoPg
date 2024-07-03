from rest_framework import serializers
from .models import MainUser, Transactions, Vouchers
from .models import MainUser, Gym



class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"


class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions


class instructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"

class clientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser


class gymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = "__all__"
