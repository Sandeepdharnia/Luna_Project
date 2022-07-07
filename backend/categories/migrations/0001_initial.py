# Generated by Django 4.0.6 on 2022-07-07 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(choices=[('Indian Food', 'Indian Food'), ('Swiss Food', 'Swiss Food'), ('Columbian Food', 'Columbian Food'), ('Peruvian Food', 'Peruvian Food'), ('Hot Dogs', 'Hot Dogs'), ('Italian Food', 'Italian Food')], max_length=200, unique=True)),
            ],
        ),
    ]
