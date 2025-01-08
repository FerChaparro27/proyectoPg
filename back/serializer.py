from rest_framework import serializers
from .models import MainUser, Gym , Routine, Plan, Dues, Activity, Voucher, Instructor, Clients, Transactions
# from .models import Plan

#a partir del fileds_all de mainuserserializar se comienza a validar

#hasheo de password

class mainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"
        extra_kwargs = {
            'password':{'write_only': True} #Esto indica que la passw solo recibira datos de escritura
        }

    #hashing the password

    def create(self, validated_data): #metodo create encargado de crear una nueva instancia en este caso dentro de MainUser
        password = validated_data.pop('password', None) #Extrae el campo password de los datos validados 
        instance = self.Meta.model(**validated_data)
        if password is not None: #si se paso una constraseña valida, se guarda y se hashea
            instance.set_password(password)
        instance.save()
        return instance
    
#En el momento que se realiza el .pop de las password tambien se quita del diccionario para que no quede ninguna referncia de la misma libre o facil de malear.

#Cuando se genera una nueva instancia con la info validada, se guardan todos los datos menos la password, ya que se hizo el .pop


class transactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = "__all__"


class instructorSerializer(serializers.ModelSerializer):
     class Meta:
         model = Instructor
         fields = "__all__"

class routineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'day', 'name', 'details']

class clientsSerializer(serializers.ModelSerializer):
    routines = routineSerializer(many=True, read_only=True)

    class Meta:
        model = Clients
        fields = ['id', 'name', 'lastname', 'routines']


class gymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
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
