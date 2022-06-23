from django.contrib import admin

from .models import CustomUser


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

    list_display = ('email', 'is_active')
    search_fields = ('email', 'is_active')


admin.site.register(CustomUser, CustomUserAdmin)