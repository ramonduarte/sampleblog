from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post, Comment, Category, Tag, Status


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'summary',
            'content',
            'author',
            'comments',
            'categories',
            'tags',
            'statuses'
        ]


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    userdescription = serializers.ReadOnlyField(source='userdescription.content')
    social_links = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'userdescription',
            'posts',
            'comments',
            'categories',
            'tags',
            'statuses',
            'social_links'
        ]


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = ['id', 'title', 'content', 'author', 'post']


class CategorySerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'nicename', 'description', 'author', 'posts']


class TagSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Tag
        fields = ['id', 'nicename', 'description', 'author', 'posts']


class StatusSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Status
        fields = ['id', 'nicename', 'description', 'author', 'posts']
