from django.contrib import admin

from address.models import Address


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'user', 'email', 'phone', 'label',
        'city', 'postal_code', 'is_default', 'created_at', 'updated_at'
    )
    list_filter = ('is_default', 'city', 'created_at')
    search_fields = ('email', 'phone', 'label', 'city', 'postal_code')
    ordering = ('-created_at',)

    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        (None, {
            'fields': (
                'user', 'email', 'phone', 'label',
                'address_line1', 'address_line2', 'city', 'postal_code', 'is_default'
            )
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
        }),
    )
