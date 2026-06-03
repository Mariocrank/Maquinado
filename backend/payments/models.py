from django.db import models


class Payment(models.Model):
    STATUS_CHOICES = [
        ("created", "Created"),
        ("processing", "Processing"),
        ("succeeded", "Succeeded"),
        ("failed", "Failed"),
    ]

    customer_name = models.CharField(max_length=120)
    customer_email = models.EmailField()
    amount = models.PositiveIntegerField()
    currency = models.CharField(max_length=3, default="mxn")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="created")
    stripe_payment_intent_id = models.CharField(max_length=120, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.customer_email} {self.amount} {self.currency} {self.status}"
