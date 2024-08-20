from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CourseInstanceViewSet, redirect_to_api

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'instances', CourseInstanceViewSet)

urlpatterns = [
    path('', redirect_to_api),  # Add this line to redirect the root URL
    path('api/', include(router.urls)),
]
