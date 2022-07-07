# Generated by Django 4.0.6 on 2022-07-06 16:25

from django.db import migrations, models
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('email', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=30, primary_key=True, serialize=False, unique=True)),
                ('password', models.CharField(max_length=30, unique=True)),
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