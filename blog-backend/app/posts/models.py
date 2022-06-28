from django.db import models

from user.models import CustomUser
from blog_backend.mixins import TimestampsMixin, TaggedItemMixin

import uuid

from taggit.managers import TaggableManager
from taggit.models import GenericUUIDTaggedItemBase


class UUIDTaggedItem(GenericUUIDTaggedItemBase, TaggedItemMixin):
    class Meta:
        verbose_name = "tag"
        verbose_name_plural = "tags"


class Post(TimestampsMixin):
    """
    Post model
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    content = models.TextField(null=True, blank=True, default='')
    tags = TaggableManager(through=UUIDTaggedItem)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
