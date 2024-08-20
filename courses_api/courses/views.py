from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Course, CourseInstance
from .serializers import CourseSerializer, CourseInstanceSerializer
from django.http import HttpResponseRedirect

def redirect_to_api(request):
    return HttpResponseRedirect('/api/')

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseInstanceViewSet(viewsets.ModelViewSet):
    queryset = CourseInstance.objects.all()
    serializer_class = CourseInstanceSerializer
