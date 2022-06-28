from django.db import models

from taggit.models import TaggedItemBase

from user.models import CustomUser


class TimestampsMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class TaggedItemMixin(TaggedItemBase):
    tag_author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    published = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
