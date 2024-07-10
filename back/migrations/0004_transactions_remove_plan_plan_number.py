# Generated by Django 4.1 on 2024-07-10 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0003_activity_rename_share_dues_rename_vouchers_voucher_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transactions',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(default='', max_length=100)),
                ('date', models.DateField()),
                ('amount', models.CharField(default='', max_length=100)),
                ('origin', models.CharField(default='', max_length=100)),
                ('destination', models.CharField(default='', max_length=100)),
                ('responsable', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='plan',
            name='plan_number',
        ),
    ]
