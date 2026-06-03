from rest_framework import serializers


class CreatePaymentIntentSerializer(serializers.Serializer):
    customer_name = serializers.CharField(max_length=120)
    customer_email = serializers.EmailField()
    amount = serializers.DecimalField(max_digits=10, decimal_places=2, min_value=1)
    currency = serializers.ChoiceField(choices=["mxn", "usd"], default="mxn")

    def validate_amount(self, value):
        return int(value * 100)
