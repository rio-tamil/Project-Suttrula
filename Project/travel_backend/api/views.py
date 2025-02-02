from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Destination, TourPackage, GroupTour, CustomTour
from .serializers import (
    DestinationSerializer, TourPackageSerializer,
    GroupTourSerializer, CustomTourSerializer
)


class RootView(APIView):
    """
    Handle requests to the root URL of the API, providing an overview.
    """
    def get(self, request):
        """
        Provide a summary of available API endpoints.
        """
        data = {
            "message": "Welcome to the Travel API! Here is the overview of available endpoints:",
            "endpoints": {
                "destinations": "/destinations/",
                "tour-packages": "/tour-packages/",
                "group-tours": "/group-tours/",
                "custom-tours": "/custom-tours/",
                "destination-details": "/destinations/<int:pk>/",
                "tour-package-details": "/tour-packages/<int:pk>/",
                "group-tour-details": "/group-tours/<int:pk>/",
                "custom-tour-details": "/custom-tours/<int:pk>/",
            },
            "note": "You can explore more by visiting the individual endpoints above."
        }
        return Response(data)


@api_view(['GET', 'POST'])
def destination_list(request):
    """
    List all destinations or create a new destination.
    """
    if request.method == 'GET':
        destinations = Destination.objects.all()
        serializer = DestinationSerializer(destinations, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = DestinationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def tour_package_list(request):
    """
    List all tour packages or create a new tour package.
    """
    if request.method == 'GET':
        tour_packages = TourPackage.objects.all()
        serializer = TourPackageSerializer(tour_packages, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TourPackageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def group_tour_list(request):
    """
    List all group tours or create a new group tour.
    """
    if request.method == 'GET':
        group_tours = GroupTour.objects.all()
        serializer = GroupTourSerializer(group_tours, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = GroupTourSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def custom_tour_list(request):
    """
    List all custom tours or create a new custom tour.
    """
    if request.method == 'GET':
        custom_tours = CustomTour.objects.all()
        serializer = CustomTourSerializer(custom_tours, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CustomTourSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def destination_detail(request, pk):
    """
    Retrieve, update or delete a specific destination by ID.
    """
    destination = get_object_or_404(Destination, pk=pk)

    if request.method == 'GET':
        serializer = DestinationSerializer(destination)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DestinationSerializer(destination, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        destination.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def tour_package_detail(request, pk):
    """
    Retrieve, update or delete a specific tour package by ID.
    """
    tour_package = get_object_or_404(TourPackage, pk=pk)

    if request.method == 'GET':
        serializer = TourPackageSerializer(tour_package)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TourPackageSerializer(tour_package, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        tour_package.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def group_tour_detail(request, pk):
    """
    Retrieve, update or delete a specific group tour by ID.
    """
    group_tour = get_object_or_404(GroupTour, pk=pk)

    if request.method == 'GET':
        serializer = GroupTourSerializer(group_tour)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupTourSerializer(group_tour, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        group_tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def custom_tour_detail(request, pk):
    """
    Retrieve, update or delete a specific custom tour by ID.
    """
    custom_tour = get_object_or_404(CustomTour, pk=pk)

    if request.method == 'GET':
        serializer = CustomTourSerializer(custom_tour)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CustomTourSerializer(custom_tour, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        custom_tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
