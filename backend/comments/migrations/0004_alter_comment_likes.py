# Generated by Django 4.0.6 on 2022-07-07 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
