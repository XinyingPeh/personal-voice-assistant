#!/usr/bin/env bash
# exit on error
set -o errexit

# Upgrade pip to the latest version
pip install --upgrade pip

# Install project dependencies
pip install -r requirements.txt

# Other deployment tasks
python manage.py collectstatic --no-input
python manage.py migrate