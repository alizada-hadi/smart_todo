from django.urls import path
from . import views


urlpatterns = [
    path('todos/', views.todos_list, name="todos"),
    path('todo/<int:pk>/', views.todos_delete, name="delete-todo")
]
