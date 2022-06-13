from django.urls import path

from posts.views import PostView, DetailPost
from users.views import UserListApiView, UserDetailApiView, CreateUserApiView, LoginUserAPIView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('posts/<int:pk>/', DetailPost.as_view()),
    path('posts/', PostView.as_view()),
    path('users/login/', LoginUserAPIView.as_view(), name='login'),
    path('users/', UserListApiView.as_view(), name='users-list'),
    path('users/<int:pk>/', UserDetailApiView.as_view(), name='user-detail'),
    path('users/create/', CreateUserApiView.as_view(), name='create'),
    path('token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
