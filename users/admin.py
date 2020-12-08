from django.contrib import admin
from .models import Profile


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'points')
    list_display_links = ('id', 'user', 'points')
    list_filter = ('user', )
    list_per_page = 20

admin.site.register(Profile, ProfileAdmin)
