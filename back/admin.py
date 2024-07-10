from django.contrib import admin
from .models import MainUser, Clients, Instructor
# Register your models here.

admin.site.register(MainUser)
admin.site.register(Clients)
admin.site.register(Instructor)