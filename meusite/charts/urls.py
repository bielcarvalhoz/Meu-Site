from django.urls import path
from . import views

urlpatterns = [
    path('', views.TemplateChartView.as_view(), name='charts'),
]
