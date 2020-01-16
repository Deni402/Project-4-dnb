from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name}'

class Party(models.Model):
    idown = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    eventname = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    startdate = models.CharField(max_length=50)
    enddate = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    town = models.CharField(max_length=50)
    postcode_lookup = models.CharField(max_length=50)
    postcode = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    imageurl = models.CharField(max_length=1000)
    largeimageurl = models.CharField(max_length=1000)
    link = models.CharField(max_length=1000)
    openingtimes = models.CharField(max_length=50)
    tickets = models.CharField(max_length=50)
    entryprice = models.CharField(max_length=50)
    eventvisibility = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.eventname}'
     