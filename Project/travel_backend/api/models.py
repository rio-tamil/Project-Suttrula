from django.db import models

class CustomTour(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    custom_date = models.DateField()  # DateField for custom_date
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Destination(models.Model):
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f"{self.city}, {self.country}"

class GroupTour(models.Model):
    name = models.CharField(max_length=100)
    max_participants = models.IntegerField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class TourPackage(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
