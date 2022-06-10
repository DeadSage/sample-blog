from django.urls import path
from posts.views import PostView, DetailPost

urlpatterns = [
    path('<int:pk>/', DetailPost.as_view()),
    path('', PostView.as_view()),
]