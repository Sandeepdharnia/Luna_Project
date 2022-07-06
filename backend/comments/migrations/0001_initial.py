# Generated by Django 4.0.6 on 2022-07-06 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_date', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=200)),
                ('title_tag', models.CharField(max_length=200)),
                ('body', models.TextField()),
            ],
        ),
    ]
