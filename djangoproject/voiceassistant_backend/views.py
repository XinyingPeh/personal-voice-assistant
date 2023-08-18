from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm
from rest_framework.authtoken.models import Token
from django.http import JsonResponse

# Load home page

def home(request):    
    if request.method == 'POST':
        username = request.POST.get('username')   
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)  
            return JsonResponse({'token': token.key})
        else:
            messages.error(request, 'Invalid login credentials. Please try again.')

    if request.user.is_authenticated:
        return redirect('home')  # Redirect to a different page for authenticated users

    return render(request, 'home.html', {})


def logout_user(request):
    logout(request)
    messages.success(request, 'You are now logged out.')
    return redirect('home')

def register_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # authenticate and login
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(request, username=username, password=password)
            login(request, user)
            messages.success(request, f'You have successfully registered.')
            return redirect('home')
    else:
        form = SignUpForm()
        return render(request, 'register.html', {'form': form})

    return render(request, 'register.html', {'form': form})

def index(request):
    return render(request, 'index.html')