from django.contrib import admin

from .models import Post

from django_admin_listfilter_dropdown.filters import RelatedDropdownFilter


class PostAdmin(admin.ModelAdmin):

    list_display = ('title', 'author')
    search_fields = ('title', 'author')
    list_filter = (
        ('author', RelatedDropdownFilter),
    )


admin.site.register(Post, PostAdmin)
