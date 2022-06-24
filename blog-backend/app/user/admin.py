from django.contrib import admin

from .models import CustomUser
from .forms import CustomUserFormSearch

from django_admin_listfilter_dropdown.filters import (
    DropdownFilter
)
from django_admin_search.admin import AdvancedSearchAdmin


class CustomUserAdmin(AdvancedSearchAdmin):
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
    list_filter = (
        # for ordinary fields
        ('first_name', DropdownFilter),
    )
    search_form = CustomUserFormSearch


admin.site.register(CustomUser, CustomUserAdmin)
