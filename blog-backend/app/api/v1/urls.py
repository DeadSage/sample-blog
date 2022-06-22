from django.urls import path, include

urlpatterns = [
    path('posts/', include('posts.urls')),
    path('users/', include('user.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls'))
]
