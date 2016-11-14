from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name = 'index'),
	url(r'^photos/$', views.photos, name='photos'),
	url(r'^me/$', views.me, name='me'),
	url(r'^blog/$', views.blog, name='blog'),
	url(r'^support/$', views.support, name='support'),
]
