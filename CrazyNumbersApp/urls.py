from django.conf.urls import url, include
from . import views
from .api.views import UserViewSet
from rest_framework import routers

# API router set up
router = routers.DefaultRouter()
router.register(r'users', UserViewSet, base_name='users')

# Patterns including a set up for auth if I get that far before deadline
urlpatterns = [
	url(r'^api/', include(router.urls)),
	url(r'^$', views.index, name='index'),
	url(r'^login/$', 'django.contrib.auth.views.login'),
	url(r'^logout/$', 'django.contrib.auth.views.logout'),
]