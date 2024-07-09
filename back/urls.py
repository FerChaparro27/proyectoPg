from django.urls import path
from .views import mainUserList, mainUserRetrieve

app_name = 'back'

urlpatterns = [
    path('', mainUserList.as_view(), name='listMainUsers'),
    path('mainUserRetrive/', mainUserRetrieve.as_view(), name='retrieveMainUsers')
]
