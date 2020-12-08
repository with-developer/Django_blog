from django.contrib import admin
from . import models
from .models import Challenges,ChallengesSolvedBy

class ChallengesAdmin(admin.ModelAdmin):
    list_display = ('category', 'name', 'points')
    list_display_links = ('category', 'name', 'points')
    list_filter = ('name', )
    list_per_page = 20
admin.site.register(Challenges, ChallengesAdmin)

class ChallengesSolvedByAdmin(admin.ModelAdmin):
    list_display = ('challenge_id', 'user_name', 'points')
    list_display_links = ('challenge_id', 'user_name', 'points')
    list_filter = ('challenge_id', )
    list_per_page = 20
admin.site.register(ChallengesSolvedBy, ChallengesSolvedByAdmin)

