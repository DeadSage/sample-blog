from django.db import models
from users.models import User


class Post(models.Model):
    """
    Post model
    """
    title = models.CharField(max_length=50)
    content = models.TextField(null=True, blank=True)
    published = models.DateTimeField(auto_now_add=True, db_index=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
