from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')


def blog(request):
    return render(request, 'frontend/blog.html')
