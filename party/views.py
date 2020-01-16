# pylint: disable=no-member,arguments-differ
# from rest_framework.generics import ListCreateAPIView, RetriveUpdateDestroyAPIView, ListAPIView, RetriveAPIView
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import Party
# from .serializers import PartySerializer
from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth import get_user_model
from .models import Party
from .serializers import PartySerializer, OwnerSerializer, PopulatedPartySerializer, PopulatedOwnerSerializer

User = get_user_model()


class DetailView(APIView): # extend the APIView

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        partys = Party.objects.get(pk=pk)
        serializer = PopulatedPartySerializer(partys)

        return Response(serializer.data)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        partys = Party.objects.get(pk=pk)
        if partys.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_partys = PartySerializer(partys, data=request.data)
        if (updated_partys.is_valid()):
            updated_partys.save()
            return Response(updated_partys.data)
        return Response(updated_partys.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        partys = Party.objects.get(pk=pk)
        partys.delete()
        return Response(status=HTTP_204_NO_CONTENT)

class PartyList(APIView):
    def get(self, _request):
        party = Party.objects.all()
        serializer = PartySerializer(party, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = PartySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class OwnerListView(APIView):

    def get(self, request):
        owners = User.objects.all()
        serializer = PopulatedOwnerSerializer(owners, many=True)

        return Response(serializer.data)
