from django.urls import path

from .views import UserListApiView, UserDetailApiView, CreateUserApiView, LoginUserAPIView

urlpatterns = [
    path('users/login/', LoginUserAPIView.as_view(), name='login'),
    path('users/', UserListApiView.as_view(), name='users_list'),
    path('users/<int:pk>/', UserDetailApiView.as_view(), name='user_detail'),
    path('users/create/', CreateUserApiView.as_view(), name='create'),
]
