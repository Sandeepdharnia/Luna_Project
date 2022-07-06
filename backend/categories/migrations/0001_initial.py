# Generated by Django 4.0.6 on 2022-07-06 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Indian Food', 'Indian Food'), ('Swiss Food', 'Swiss Food'), ('Columbian Food', 'Columbian Food'), ('Peruvian Food', 'Peruvian Food'), ('Hot Dogs', 'Hot Dogs'), ('Italian Food', 'Italian Food')], max_length=200, unique=True)),
                ('slug', models.SlugField()),
            ],
        ),
    ]
