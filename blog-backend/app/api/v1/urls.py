from django.urls import path, include

from posts.views import PostView, DetailPost

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('posts/<int:pk>/', DetailPost.as_view()),
    path('posts/', PostView.as_view()),
    # path('login/', LoginUserAPIView.as_view(), name='login'),
    # path('logout/', LogoutUserAPIView.as_view(), name='logout'),
    path('users/', include('user.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
