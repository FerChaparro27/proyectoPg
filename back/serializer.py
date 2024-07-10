from rest_framework import serializers
from .models import MainUser, Gym , Routine, Plan, Dues, Activity, Voucher, Instructor, Clients, Transactions
# from .models import Plan



class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"

class transactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
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

class planSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = "__all__"

class duesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dues
        fields = "__all__"

class activitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"

class voucherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voucher
        fields = "__all__"
