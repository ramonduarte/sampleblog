from django.db import models
from django.utils.translation import gettext_lazy as _


class Post(models.Model):
    author = models.ForeignKey('auth.User', related_name='posts',
                                            on_delete=models.CASCADE)
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
    image = models.URLField(_("image"), max_length=200,
                            default="https://source.unsplash.com/random")
    alt_text = models.CharField(_("alt text"), max_length=50,
                                blank=True, default="")

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return "{}: {}".format(self.author, self.title)

    # TODO: change to permalink 2021-03-28 22:08:53
    @property
    def link(self):
        return "/blog/{}".format(self.id)


class Comment(models.Model):
    author = models.ForeignKey('auth.User', related_name='comments',
                                            on_delete=models.CASCADE)
    post = models.ForeignKey('Post', related_name='comments',
                                     on_delete=models.CASCADE)
    # 2021-02-23 21:13:36 TODO: reader
    # 2021-02-23 21:13:36 TODO: parent
    # 2021-02-23 21:13:36 TODO: children
    # 2021-02-23 21:13:36 TODO: status
    title = models.CharField(_("title"), max_length=100, blank=True,
                                                         default='')
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

    def __str__(self):
        return self.title

class Category(models.Model):
    nicename = models.CharField(_("nicename"),
                                max_length=100, blank=False, default="")
    description = models.CharField(_("description"),
                                   max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User', related_name='categories',
                               on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post',
                                   related_name='categories', blank=True)

    class Meta:
        verbose_name_plural = _("categories")

    def __str__(self):
        return self.nicename


class Tag(models.Model):
    nicename = models.CharField(_("nicename"),
                                max_length=100, blank=False, default="")
    description = models.CharField(_("description"),
                                   max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User',
                               related_name='tags', on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post', related_name='tags', blank=True)

    class Meta:
        verbose_name_plural = _("tags")

    def __str__(self):
        return self.nicename

class Status(models.Model):
    NICENAME = models.TextChoices("Nicename",
                                  " ".join(["Draft",
                                            "Published",
                                            "Suspended",
                                            "Removed",
                                            "Pending"
                                            ]))
    nicename = models.CharField(_("nicename"),
                                choices=NICENAME.choices,
                                max_length=20,
                                default=NICENAME.choices[0][0])
    author = models.ForeignKey('auth.User', related_name='statuses',
                               on_delete=models.CASCADE)
    posts = models.ManyToManyField('Post', related_name='statuses', blank=True)

    class Meta:
        verbose_name_plural = _("statuses")

    def __str__(self):
        return self.nicename

class SocialLink(models.Model):
    # TODO: restrict choices here 2021-03-23 22:05:01
    nicename = models.CharField(_("nicename"),
                                max_length=100, blank=False, default="")
    description = models.CharField(_("description"),
                                   max_length=100, blank=False, default="")
    author = models.ForeignKey('auth.User', related_name='social_links',
                               on_delete=models.CASCADE)
    link = models.URLField(_("link"), max_length=200, blank=False,
                             default="https://")

    def __str__(self):
        return self.link

    def __unicode__(self):
        return self.link

    class Meta:
        verbose_name_plural = _("social links")


class UserDescription(models.Model):
    author = models.OneToOneField("auth.User",
                                  on_delete=models.CASCADE)
    content = models.TextField(_("description"),
                                 blank=False, max_length=200, default="")

    def __str__(self):
        return self.content

    def __unicode__(self):
        return self.content
