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
