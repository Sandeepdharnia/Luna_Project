import random

from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    email = models.CharField(max_length=50)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30, unique=True)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE,
                                primary_key=True,
                                related_name='registration_profile',
                                )
    code = models.CharField(max_length=5, default=code_generator)

    def __str__(self):
        return f'ID{self.id}: {self.email}'


@receiver(post_save, sender=User)
def create_registration_profile(sender, instance, *args, **kwargs):
    profile, created = Registration.objects.get_or_create(user=instance)
    if created:
        profile.save()

        user_email = profile.user.email
        validation_code = profile.code

        send_mail(
            'Welcome to Team-1 media platform!',
            f'Felicitations! Last step in order to use your brand new user. Here is your code: {validation_code}',
            'sit.academy.testing@gmail.com',
            [f'{user_email}'],
            fail_silently=False,
        )


class ResetPassword(models.Model):
    email = models.EmailField()
    code = models.CharField(max_length=5, default=code_generator)
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return self.email