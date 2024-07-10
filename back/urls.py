from django.urls import path
from .views import mainUserList, mainUserRetrieve, clientsList, clientsRetrieve, instructorList, instructorRetrieve

app_name = 'back'

urlpatterns = [
    path('', mainUserList.as_view(), name='listMainUsers'),
    path('mainUserRetrieve/<int:pk>/', mainUserRetrieve.as_view(), name='retrieveMainUsers'),
    path('clients/', clientsList.as_view(), name='listClients'),
    path('clientsRetrieve/<int:pk>/', clientsRetrieve.as_view(),name='retrieveClients'),
    path('instructor/', instructorList.as_view(), name='listInstructors'),
    path('instructorRetrieve/<int:pk>/', instructorRetrieve.as_view(), name='retrieveInstructors'),
]
