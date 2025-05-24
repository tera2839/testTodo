# todo/urls.py
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # API エンドポイント
    path('', views.index, name='todo_list'),  # '/' で todo_list の_
]