from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.conf import settings
from django.db.models import Count
from ckeditor_uploader.fields import RichTextUploadingField

class PostManager(models.Manager):
    def like_toggle(self, user, post_obj):
        if user in post_obj.liked.all():
            is_liked = False
            post_obj.liked.remove(user)
        else:
            is_liked = True
            post_obj.liked.add(user)
        return is_liked



class Post(models.Model):

    category_CHOICES = {
        ('Security_CTF', 'Security_CTF'),
        ('Security_Wargame', 'Security_Wargame'),
        ('Security_Study', 'Security_Study'),
        ('Development_Programming', 'Development_Programming'),
        ('Development_Study', 'Development_Study'),
        ('Other', 'Other'),
    }
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    #content = models.TextField()
    content = RichTextUploadingField(blank=True,null=True)
    liked = models.ManyToManyField(
        settings.AUTH_USER_MODEL, blank=True, related_name='liked')
    date_posted = models.DateTimeField(default=timezone.now)
    category =  models.CharField(null=True,default='none',max_length=100,choices=category_CHOICES)


    objects = PostManager()

    class Meta:
        ordering = ('-date_posted', )

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post_detail', kwargs={'pk': self.pk})


class Comment(models.Model):
    post = models.ForeignKey(
        Post, related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=True)

    def approve(self):
        self.approved_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse("post_list")

    def __str__(self):
        return self.author
