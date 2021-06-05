from django.db import models


class Todos(models.Model):
    PROIORITY = (
        ('HIGH', 'high'),
        ('MEDIUM', 'medium'),
        ('LOW', 'low'),
    )
    title = models.CharField(max_length=200)
    desc = models.TextField(blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    proiority = models.CharField(max_length=100, choices=PROIORITY)
    is_completed = models.BooleanField(default=False)
    due_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title
