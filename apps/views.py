from django.shortcuts import render
from .models import Dane
# Create your views here.
def index(request):
    if request.method=="POST":
        name=request.POST['name']
        fname=request.POST['fname']
        mail=request.POST['mail']
        dane=Dane(name=name,fname=fname,mail=mail)
        dane.save()

    return render(request,('index.html'))