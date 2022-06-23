from django.db import models
from user.models import CustomUser


class Post(models.Model):
    """
    Post model
    """
    title = models.CharField(max_length=50)
    content = models.TextField(null=True, blank=True, default='')
    published = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
