from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View
import json

# Webページで表示するためのビュー
class IndexView(View):
    def get(request,self):
        todos = Todo.objects.all()  # 全てのTodoを取得
        return render(request, 'todo/todo_list.html', {'todos': todos})

# API用のビューセット
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serialiser_class = TodoSerializer
    
index = IndexView.as_view()