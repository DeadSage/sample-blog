from .views import PostApiView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostApiView, basename='post')
urlpatterns = router.urls
