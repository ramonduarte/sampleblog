from django.contrib import admin
from api.models import Post, SocialLink, UserDescription, Status, Tag, Category

admin.site.register(Post)
admin.site.register(SocialLink)
admin.site.register(UserDescription)
admin.site.register(Status)
admin.site.register(Tag)
admin.site.register(Category)
