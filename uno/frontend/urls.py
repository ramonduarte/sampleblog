from django.urls import path
from . import views


urlpatterns = [
    path('', views.IndexView.as_view()),
    path('blog/<int:pk>', views.BlogPostView.as_view()),
    path('blog', views.BlogView.as_view()),
]
