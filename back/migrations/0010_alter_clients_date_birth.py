# Generated by Django 5.0.7 on 2024-12-13 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0009_alter_activity_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clients',
            name='date_birth',
            field=models.DateField(blank=True, null=True),
        ),
    ]
