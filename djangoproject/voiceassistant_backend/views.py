from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from django.contrib import messages

# Load home page
def home(request):    
    # check if logged in
    if request.method == 'POST':
        username = request.POST.get('username')   
        password = request.POST.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'You are now logged in.')
            return redirect('home')
        else:
            messages.error(request, 'Invalid login credentials. Please try again.')
            return redirect('home')
    else:
        return render(request, 'home.html', {})


def logout_user(request):
    pass