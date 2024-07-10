from django.urls import path
from .views import mainUserList, mainUserRetrieve, clientsList, clientsRetrieve, instructorList, instructorRetrieve, planList, planRetrieve, duesList, duesRetrieve, activityList, activityRetrieve, voucherList, voucherRetrieve, routineList, routineRetrieve, transactionsList, transactionsRetrieve

app_name = 'back'

urlpatterns = [
    path('', mainUserList.as_view(), name='listMainUsers'),
    path('mainUserRetrieve/<int:pk>/', mainUserRetrieve.as_view(), name='retrieveMainUsers'),
    path('transactions/', transactionsList.as_view(), name='listTransactions'),
    path('transactionsRetrieve/<int:pk>/', transactionsRetrieve.as_view(), name='retrieveTransactions'),
    path('clients/', clientsList.as_view(), name='listClients'),
    path('clientsRetrieve/<int:pk>/', clientsRetrieve.as_view(),name='retrieveClients'),
    path('instructor/', instructorList.as_view(), name='listInstructors'),
    path('instructorRetrieve/<int:pk>/', instructorRetrieve.as_view(), name='retrieveInstructors'),
    path('instructorRetrieve/<int:pk>', instructorRetrieve.as_view(), name='retrieveInstructors'),
    path('plan/', planList.as_view(), name= 'listPlans' ),
    path('planRetrieve/<int:pk>', planRetrieve.as_view(), name= 'retrievePlans' ),
    path('dues/', duesList.as_view(), name= 'listDues' ),
    path('duesRetrieve/<int:pk>', duesRetrieve.as_view(), name= 'retrieveDues' ),
    path('activity/', activityList.as_view(), name= 'listActivity' ),
    path('activityRetrieve/<int:pk>', activityRetrieve.as_view(), name= 'retrieveActivity' ),
    path('voucher/', voucherList.as_view(), name= 'listVoucher' ),
    path('voucherRetrieve/<int:pk>', voucherRetrieve.as_view(), name= 'retrieveVoucher' ),
    path('routine/', routineList.as_view(), name= 'listRoutine' ),
    path('routineRetrieve/<int:pk>', routineRetrieve.as_view(), name= 'retrieveRoutine' ),
]
