from django.urls import path, include

urlpatterns = [
    # path('posts/<int:pk>/', DetailPost.as_view()),
    # path('posts/', PostView.as_view()),
    path('posts/', include('posts.urls')),
]
