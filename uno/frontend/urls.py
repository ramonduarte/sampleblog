from django.urls import path
from django.views.generic.base import RedirectView
from . import views

favicon_view = RedirectView.as_view(url='/static/frontend/favicon.ico', permanent=True)

urlpatterns = [
    path('', views.IndexView.as_view()),
    path('blog/<int:pk>/', views.BlogPostView.as_view()),
    path('blog/', views.BlogView.as_view()),
    path('favicon.ico', favicon_view),
]
