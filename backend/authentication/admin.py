from django.contrib import admin

from authentication.models import UserAccount, Otp


@admin.register(UserAccount)
class VendorAdmin(admin.ModelAdmin):
    list_display = (
        "phone_number",
        "email",
        "name",
        "gender",
        "marital_status",
        "is_verified",
        "is_customer",
        "is_active",
        "is_admin",
        "is_staff",
        "is_superuser",
    )
    list_display_links = (
        "phone_number",
        "email",
        "name",
    )
    list_filter = (
        "is_verified",
        "is_customer",
        "is_active", 
        "created_at",
    )
    search_fields = (
        "phone",
        "email",
        "name",
        )
    ordering = ('-created_at',)
    list_per_page = 25


@admin.register(Otp)
class OtpAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'otp',
        'is_used', 
        'created_at', 
        'expires_at', 
        'is_expired_display'
    )
    list_display_links = (
        'email', 
        'otp'
    )
    list_filter = (
        'is_used', 
        'created_at', 
        'expires_at'
    )
    search_fields = ('email', 'otp')
    readonly_fields = (
        'created_at', 
        'is_expired_display'
    )
    ordering = ('-created_at',)
    list_per_page = 25

    def is_expired_display(self, obj):
        return obj.is_expired()
    is_expired_display.short_description = 'Expired'
    is_expired_display.boolean = True
