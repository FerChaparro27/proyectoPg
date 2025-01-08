<<<<<<< HEAD


=======
>>>>>>> b0fcae2416fae6ba663e192f38ab12b35502f9bf

import django.contrib.auth.models
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('back', '0004_transactions_remove_plan_plan_number'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='mainuser',
            options={'verbose_name': 'user', 'verbose_name_plural': 'users'},
        ),
        migrations.AlterModelManagers(
            name='mainuser',
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='mainuser',
            name='passsword',
        ),
        migrations.AddField(
            model_name='mainuser',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='password',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='mainuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions'),
        ),
        migrations.AlterField(
            model_name='mainuser',
            name='lastname',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='mainuser',
            name='mail',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='mainuser',
<<<<<<< HEAD
            name='name',            field=models.CharField(max_length=255, unique=True),
=======
            name='name',
            field=models.CharField(max_length=255, unique=True),
>>>>>>> b0fcae2416fae6ba663e192f38ab12b35502f9bf
        ),
    ]
