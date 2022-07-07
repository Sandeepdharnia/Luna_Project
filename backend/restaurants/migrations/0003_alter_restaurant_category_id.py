# Generated by Django 4.0.6 on 2022-07-07 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='category_id',
            field=models.CharField(choices=[('1', 'Kebab'), ('2', 'Indian Food'), ('3', 'Swiss Food'), ('4', 'Columbian Food'), ('5', 'Peruvian Food'), ('6', 'Hot Dogs'), ('7', 'Italian Food')], max_length=20, verbose_name='category'),
        ),
    ]
