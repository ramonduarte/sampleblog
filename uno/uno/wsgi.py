import os

## 2021-02-25 20:31:10 needs to come first to enable django-admin
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'uno.settings')

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
