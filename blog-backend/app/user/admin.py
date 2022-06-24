from django.contrib import admin

from .models import CustomUser

from django_admin_listfilter_dropdown.filters import (
    DropdownFilter
)


class CustomUserAdmin(admin.ModelAdmin):
    """
    Admin model for users
    """

    def save_model(self, request, obj, form, change):
        """
        Given a model instance save it to the database.
        """
        if not change:
            password = form.cleaned_data['password']
            obj.set_password(password)
        obj.save()

    list_display = ('email', 'get_full_name')
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = (
        # for ordinary fields
        ('first_name', DropdownFilter),
    )


admin.site.register(CustomUser, CustomUserAdmin)
