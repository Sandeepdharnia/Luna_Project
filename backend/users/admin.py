from django.contrib import admin

# Register your models here.
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

User = get_user_model()


class MyUserAdmin(UserAdmin):   # using the built-in class 'UserAdmin' from django authentication
    readonly_fields = ('date_joined',)  # show in the admin when the user was created
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
            # show email, username and twice the password when editing the profile
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        # fields asked when trying to create the user
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        # different sections when editing the profile
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        # permissions supplied when creating the user
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        # different sections when editing the profile
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at a list of instances
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_superuser')
    # display when going to the user section of admin
    ordering = ('email',) # order users by email in alphabetic order


admin.site.register(User, MyUserAdmin)  # applying the configuration
