from rest_framework import serializers
<<<<<<< HEAD
from .models import MainUser, Transactions, Vouchers
from .models import MainUser, Gym , Routine, Plan, Share, Acrivity, Voucher

=======
from .models import MainUser, Instructor, Clients, Gym, Routine
# from .models import Plan
>>>>>>> 245e98c066a61b91bc3db58a679664edc7c4b1c4


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

class planSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = "__all__"

class shareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Share
        fields = "__all__"

class activitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Acrivity
        fields = "__all__"

class voucherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voucher
        fields = "__all__"
