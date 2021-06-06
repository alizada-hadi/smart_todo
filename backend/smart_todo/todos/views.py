from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from .models import Todos
from .serializers import TodosSerializers


@csrf_exempt
def todos_list(request):
    if request.method == "GET":
        todos = Todos.objects.all()
        serializer = TodosSerializers(todos, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = TodosSerializers(data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def todos_delete(request, pk):
    try:
        todo = Todos.objects.get(pk=pk)
    except Todos.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "DELETE":
        todo.delete()
        return HttpResponse(status=204)
