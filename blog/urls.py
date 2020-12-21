from django.urls import path
from . import views
from .views import (
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView,
    add_comment
)


urlpatterns = [
    path('', views.index, name='index'),
    path('blog/', PostListView.as_view(), name='blog'),
    path('blog/user/<str:username>/', UserPostListView.as_view(), name='user_posts'),
    path('blog/post/<int:pk>/', PostDetailView.as_view(), name='post_detail'),
    path('blog/post/new/', PostCreateView.as_view(), name='post_create'),
    path('blog/post/<int:pk>/update/', PostUpdateView.as_view(), name='post_update'),
    path('blog/post/<int:pk>/delete/', PostDeleteView.as_view(), name='post_delete'),
    path('about/', views.about, name='about'),
    path('blog/post/<int:pk>/comment/', add_comment, name='add_comment'),
]
