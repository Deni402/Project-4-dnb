# from django.contrib.auth.models import User
# import django.contrib.auth.password_validation as validations
# from django.contrib.auth.hashers import make_password
# from django.core.exceptions import ValidationError

from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Party, Tag
User = get_user_model()

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('id', 'name')

class OwnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name', 'age', 'party')

class PartySerializer(serializers.ModelSerializer):

    class Meta:
        model = Party
        fields = '__all__'
        extra_kwargs = {'tags': {'required': False}}

class PopulatedPartySerializer(PartySerializer):

    owner = OwnerSerializer()
    tags = TagSerializer(many=True)

class PopulatedOwnerSerializer(OwnerSerializer):

    party = PartySerializer(many=True)
    