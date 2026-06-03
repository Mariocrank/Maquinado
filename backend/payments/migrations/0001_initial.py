from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Payment",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("customer_name", models.CharField(max_length=120)),
                ("customer_email", models.EmailField(max_length=254)),
                ("amount", models.PositiveIntegerField()),
                ("currency", models.CharField(default="mxn", max_length=3)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("created", "Created"),
                            ("processing", "Processing"),
                            ("succeeded", "Succeeded"),
                            ("failed", "Failed"),
                        ],
                        default="created",
                        max_length=20,
                    ),
                ),
                ("stripe_payment_intent_id", models.CharField(max_length=120, unique=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
