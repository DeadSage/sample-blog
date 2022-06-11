from django.urls import path
from posts.views import PostView, DetailPost
from users.views import UserListApiView, UserDetailApiView, CreateUserApiView, LoginUserAPIView

urlpatterns = [
    path('<int:pk>/', DetailPost.as_view()),
    path('', PostView.as_view()),
    path('users/login/', LoginUserAPIView.as_view(), name='login'),
    path('users/', UserListApiView.as_view(), name='users_list'),
    path('users/<int:pk>/', UserDetailApiView.as_view(), name='user_detail'),
    path('users/create/', CreateUserApiView.as_view(), name='create'),
]
