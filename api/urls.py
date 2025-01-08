from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('back.urls', namespace='api')),
    path('',include('back.urls',  namespace='back')),
]
