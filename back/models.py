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

class Transactions(models.Model):
    id = models.AutoField(primary_key=True)
    numTransaction = models.TextField(max_length=100, default="")
    dateTransaction = models.DateField()
    amount = models.DecimalField()
    origin = models.TextField()
    addressee = models.TextField()
    responsible = models.TextField()

    def __str__(self):
        return self.id

class Vouchers(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()
    detail = models.TextField()

    def __str__(self):
        return self.id
    
