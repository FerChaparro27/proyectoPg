from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

"""MainUser, Profesores, Alumnos, Transacciones, Rutinas (Routine), Gimnasio, Comprobante (Voucher), 
Actividad (Activity), Plan, Cuotas (Dues)"""

#PRUEBA DE CREACION DE USUARIO CON LIB ABSTRACTUSER PARA AUTH

class MainUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = None  # Elimina el campo username de AbstractUser
    name = models.CharField(max_length=100, unique=True, default="dafault_username")
    lastname = models.CharField(max_length=100, default="")
    mail = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255, default="")

    USERNAME_FIELD = 'mail'  # Usa 'mail' como el campo principal para login
    REQUIRED_FIELDS=[]

#USUARIO CREADO COMO BASE
# class MainUser(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100, default="")
#     lastname = models.CharField(max_length=100, default="")
#     mail = models.CharField(max_length=100, default="")
#     password = models.CharField(max_length=100, default="")

#     def __str__(self):
#         return str(self.id)
    
class Transactions(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=100, default="")
    date = models.DateField()
    amount = models.CharField(max_length=100, default="") 
    origin = models.CharField(max_length=100, default="") 
    destination = models.CharField(max_length=100, default="") 
    responsable = models.CharField(max_length=100, default="")


class Instructor(models.Model):
    id = models.AutoField(primary_key=True)
    dni= models.CharField(max_length=8, default="")
    name = models.CharField(max_length=100, default="")
    lastname = models.CharField(max_length=100, default="")
    mail = models.CharField(max_length=100, default="")
    phone_number = models.CharField(max_length=20, default="")
    date_birth = models.DateField()
    location =  models.CharField(max_length=100, default="")
    gender = models.CharField(max_length=20, default="")

    def __str__(self):
        return str(self.id)
    

class Clients(models.Model):
    id = models.AutoField(primary_key=True)
    dni= models.CharField(max_length=8, default="")
    name = models.CharField(max_length=100, default="")
    lastname = models.CharField(max_length=100, default="")
    mail = models.CharField(max_length=100, default="")
    phone_number = models.CharField(max_length=20, default="")
    date_birth = models.DateField(null=True, blank=True)
    location =  models.CharField(max_length=100, default="")
    gender = models.CharField(max_length=20, default="")
    
    def __str__(self):
        return str(self.id)



class Gym(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")
    location = models.CharField(max_length=100, default="")
    address = models.CharField(max_length=100, default="")

    def __str__(self):
        return str(self.id)

class Routine(models.Model):
    client = models.ForeignKey(Clients, related_name='routines', on_delete=models.CASCADE, default=1)
    day = models.CharField(max_length=20, default="Lunes")  # Ejemplo: 'Lunes', 'Martes', etc.
    name = models.CharField(max_length=100, default="Rutina del dia")
    details = models.TextField(blank=True)

    def __str__(self):
        return str(self.id) 

class Plan(models.Model):
    id=models.AutoField( primary_key=True)
    days = models.CharField(max_length=20, default="")

    def __str__(self):
        return str(self.id) 
    
class Dues(models.Model):
    id = models.AutoField(primary_key=True)
    price = models.CharField(max_length=20, default="")

    def __str__(self):
        return str(self.id)

from django.db import models

class Activity(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")
    age = models.CharField(max_length=5, default="all")
    description = models.CharField(max_length=1000, default="")
    

    def __str__(self):
        return str(self.id)

    
class Voucher(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()
    detail = models.TextField()

    def __str__(self):
        return str(self.id)
