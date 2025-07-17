from django.db import models


class TableStatus(models.TextChoices):
    available = "available"
    booked = "booked"
    cleaning = "cleaning"
    unavailable = "unavailable"
    reserved = "reserved"
