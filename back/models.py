from django.db import models

# Create your models here.

"""MainUser, Profesores, Alumnos, Transacciones, Rutinas, Gimnasio, Comprobante, Actividad, Plan, Cuotas"""


class MainUser(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")
    lastname = models.CharField(max_length=100, default="")
    mail = models.CharField(max_length=100, default="")
    passsword = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.id


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
        return self.id


class Vouchers(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()
    detail = models.TextField()

    def __str__(self):
        return self.id
    

class Clients(models.Model):
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
        return self.id



class Gym(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")
    location = models.CharField(max_length=100, default="")
    address = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.id

class Routine(models.Model):
    routine_number = models.CharField(max_length=20, default="")
    elaboration_date = models.DateField()
    duration = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.id

class Plan(models.Model):
    days = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.id
    
class Share(models.Model):
    id = models.AutoField(primary_key=True)
    price = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.id

class Acrivity(models.Model):
    name = models.CharField(max_length=100, default="")
    avtivity_number= models.CharField(max_length=20, default="")

    def __str__(self):
        return self.id
    
class Voucher(models.Model):
    voucher_number = models.CharField(max_length=20, default="")
    type = models.TextField()
    detail = models.TextField()

    def __str__(self):
        return self.id
