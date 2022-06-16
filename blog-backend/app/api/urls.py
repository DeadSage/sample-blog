from django.urls import path, include

urlpatterns = [
    path('v1/', include('api.v1.urls')),
    path('users/', include('user.urls')),
    path('auth/', include('dj_rest_auth.urls'))
]
