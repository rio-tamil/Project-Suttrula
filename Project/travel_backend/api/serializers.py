# tours/serializers.py
from rest_framework import serializers
from .models import Destination, TourPackage, GroupTour, CustomTour

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ['id', 'name', 'description', 'image', 'created_at', 'updated_at']

class TourPackageSerializer(serializers.ModelSerializer):
    destination = DestinationSerializer()  # Nested DestinationSerializer to include destination details

    class Meta:
        model = TourPackage
        fields = ['id', 'name', 'price', 'duration', 'description', 'image', 'available', 'destination']

class GroupTourSerializer(serializers.ModelSerializer):
    tour_package = TourPackageSerializer()  # Nested TourPackageSerializer to include tour package details

    class Meta:
        model = GroupTour
        fields = ['id', 'tour_package', 'group_size', 'start_date', 'end_date', 'price_per_person']

class CustomTourSerializer(serializers.ModelSerializer):
    destination = DestinationSerializer()  # Nested DestinationSerializer to include destination details

    class Meta:
        model = CustomTour
        fields = ['id', 'destination', 'name', 'description', 'start_date', 'end_date', 'custom_price']
