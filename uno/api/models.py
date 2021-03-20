from django.db import models
from django.utils.translation import gettext_lazy as _


class Post(models.Model):
    author = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)
    # 2021-02-23 21:13:36 TODO: status
    # 2021-02-23 21:13:36 TODO: tag
    # 2021-02-23 21:13:36 TODO: type
    title = models.CharField(_("title"), max_length=100, blank=True, default='')
    summary = models.TextField(_("summary"), blank=True, default='')
    content = models.TextField(_("content"), blank=True, default='')
    # 2021-02-23 21:13:36 TODO: permalink
    # 2021-02-23 21:13:36 TODO: slug
    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    modified_at = models.DateTimeField(_("modified at"), auto_now=True)
    # 2021-02-23 21:13:36 TODO: published
    # 2021-02-23 21:13:36 TODO: removed
    # 2021-02-23 21:13:36 TODO: comments_enabled
    # 2021-02-23 21:13:36 TODO: likes
    # 2021-02-23 21:13:36 TODO: dislikes

    class Meta:
        ordering = ['created_at']


class Comment(models.Model):
    author = models.ForeignKey('auth.User', related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey('Post', related_name='comments', on_delete=models.CASCADE)
    # 2021-02-23 21:13:36 TODO: reader
    # 2021-02-23 21:13:36 TODO: parent
    # 2021-02-23 21:13:36 TODO: children
    # 2021-02-23 21:13:36 TODO: status
    title = models.CharField(_("title"), max_length=100, blank=True, default='')
    content = models.TextField(_("content"), blank=True, default='')
    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    modified_at = models.DateTimeField(_("modified at"), auto_now=True)
    # 2021-02-23 21:13:36 TODO: published
    # 2021-02-23 21:13:36 TODO: removed
    # 2021-02-23 21:13:36 TODO: comments_enabled
    # 2021-02-23 21:13:36 TODO: likes
    # 2021-02-23 21:13:36 TODO: dislikes

    class Meta:
        ordering = ['created_at']


class Category(models.Model):
    nicename = models.CharField(_("nicename"), max_length=100, blank=False, default="")
    description = models.CharField(_("description"), max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User', related_name='categories', on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post', related_name='categories', blank=True)

    class Meta:
        verbose_name_plural = _("categories")


class Tag(models.Model):
    nicename = models.CharField(_("nicename"), max_length=100, blank=False, default="")
    description = models.CharField(_("description"), max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User', related_name='tags', on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post', related_name='tags', blank=True)

    class Meta:
        verbose_name_plural = _("tags")


class Status(models.Model):
    NICENAME = models.TextChoices("Nicename",
                                          " ".join([
                                                    "Draft",
                                                    "Published",
                                                    "Suspended",
                                                    "Removed",
                                                    "Pending"
                                                    ]))
    nicename = models.CharField(_("nicename"),
                                choices=NICENAME.choices,
                                max_length=20,
                                default=NICENAME.choices[0][0])
    description = models.CharField(_("description"), max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User', related_name='statuses', on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post', related_name='statuses', blank=True)

    class Meta:
        verbose_name_plural = _("statuses")

