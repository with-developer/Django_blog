from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	path('', views.index, name='challenges'),
	path('admin/add/', views.addchallenges, name="add"),
	path('postflag/', views.flagsubmit, name="flagsubmit"),
    path('rank/', views.rank, name="rank")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 