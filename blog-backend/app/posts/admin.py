from django.contrib import admin

from .models import Post

from django_admin_listfilter_dropdown.filters import RelatedDropdownFilter


class PostAdmin(admin.ModelAdmin):
    """
    Admin model for posts
    """
    list_display = ('title', 'author', 'tag_list')
    search_fields = ('title', 'author')
    list_filter = (
        ('author', RelatedDropdownFilter),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags')

    def tag_list(self, obj):
        return u", ".join(o.name for o in obj.tags.all())


admin.site.register(Post, PostAdmin)
