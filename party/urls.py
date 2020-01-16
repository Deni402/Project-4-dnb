from django.urls import path
from .views import DetailView, PartyList, OwnerListView

urlpatterns = [
    path('party/', PartyList.as_view()),
    path('party/<int:pk>/', DetailView.as_view()),
    path('owners/', OwnerListView.as_view())
]
