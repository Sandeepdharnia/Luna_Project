# Generated by Django 4.0.6 on 2022-07-08 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_review_restaurant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='date_created',
            field=models.DateField(auto_now_add=True),
        ),
    ]
