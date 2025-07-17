from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/customer/', include('customer_api.urls')),
    path('api/table/', include('table.urls')),
    path('api/address/', include('address.urls')),
]
