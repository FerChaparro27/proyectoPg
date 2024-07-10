from django.contrib import admin
from .models import MainUser, Clients, Instructor, Routine, Plan, Activity, Voucher, Dues, Transactions
# Register your models here.

admin.site.register(MainUser)
admin.site.register(Transactions)
admin.site.register(Clients)
admin.site.register(Instructor)
admin.site.register(Routine)
admin.site.register(Plan)
admin.site.register(Activity)
admin.site.register(Voucher)
admin.site.register(Dues)