from django.contrib import admin

from registration.models import Registration


class RegistrationAdmin(admin.ModelAdmin):
    list_display = ['email', 'username']


admin.site.register(Registration, RegistrationAdmin)
