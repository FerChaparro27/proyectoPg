from rest_framework import serializers
from .models import MainUser
from .models import Gym
from .models import Routine
# from .models import Plan


class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"


# class instructorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MainUser
#         fields = "__all__"

# class clientsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MainUser
        # fields = "__all__"


class gymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = "__all__"

class routineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = "__all__"
