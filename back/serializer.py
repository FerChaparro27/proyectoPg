from rest_framework import serializers
from .models import MainUser, Transactions, Vouchers
from .models import MainUser, Gym
from .models import MainUser, Routine
from .models import MainUser, Plan
from .models import MainUser, 


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

class routineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = "__all__"
