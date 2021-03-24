from django.contrib import admin
from api.models import Post, SocialLink, UserDescription

admin.site.register(Post)
admin.site.register(SocialLink)
admin.site.register(UserDescription)
