# Generated by Django 4.0.6 on 2022-07-06 16:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('email', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=30, unique=True)),
                ('password', models.CharField(max_length=30, unique=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='registration_profile', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('code', models.CharField(default=registration.models.code_generator, max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='ResetPassword',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('code', models.CharField(default=registration.models.code_generator, max_length=5)),
                ('code_used', models.BooleanField(default=False)),
            ],
        ),
    ]
