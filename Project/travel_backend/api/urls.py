from django.urls import path
from .views import (
    RootView, 
    destination_list, tour_package_list, group_tour_list, custom_tour_list,
    destination_detail, tour_package_detail, group_tour_detail, custom_tour_detail
)

urlpatterns = [
    # Root endpoint showing API summary
    path('', RootView.as_view(), name='root'),

    # List and create routes
    path('destinations/', destination_list, name='destination-list'),
    path('tour-packages/', tour_package_list, name='tour-package-list'),
    path('group-tours/', group_tour_list, name='group-tour-list'),
    path('custom-tours/', custom_tour_list, name='custom-tour-list'),

    # Retrieve, update, delete routes for individual items
    path('destinations/<int:pk>/', destination_detail, name='destination-detail'),
    path('tour-packages/<int:pk>/', tour_package_detail, name='tour-package-detail'),
    path('group-tours/<int:pk>/', group_tour_detail, name='group-tour-detail'),
    path('custom-tours/<int:pk>/', custom_tour_detail, name='custom-tour-detail'),
]
