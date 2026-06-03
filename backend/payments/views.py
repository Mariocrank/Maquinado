import os

import stripe
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Payment
from .serializers import CreatePaymentIntentSerializer

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


class CreatePaymentIntentView(APIView):
    def post(self, request):
        serializer = CreatePaymentIntentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        payment_intent = stripe.PaymentIntent.create(
            amount=data["amount"],
            currency=data["currency"],
            automatic_payment_methods={"enabled": True},
            receipt_email=data["customer_email"],
            metadata={
                "customer_name": data["customer_name"],
                "customer_email": data["customer_email"],
            },
        )

        Payment.objects.create(
            customer_name=data["customer_name"],
            customer_email=data["customer_email"],
            amount=data["amount"],
            currency=data["currency"],
            stripe_payment_intent_id=payment_intent.id,
        )

        return Response(
            {
                "clientSecret": payment_intent.client_secret,
                "paymentIntentId": payment_intent.id,
            },
            status=status.HTTP_201_CREATED,
        )


class StripeWebhookView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        webhook_secret = os.getenv("STRIPE_WEBHOOK_SECRET")
        payload = request.body
        signature = request.META.get("HTTP_STRIPE_SIGNATURE")

        try:
            event = stripe.Webhook.construct_event(payload, signature, webhook_secret)
        except (ValueError, stripe.error.SignatureVerificationError):
            return HttpResponse(status=400)

        payment_intent = event["data"]["object"]
        payment_intent_id = payment_intent.get("id")

        if event["type"] == "payment_intent.succeeded":
            Payment.objects.filter(stripe_payment_intent_id=payment_intent_id).update(status="succeeded")
        elif event["type"] == "payment_intent.payment_failed":
            Payment.objects.filter(stripe_payment_intent_id=payment_intent_id).update(status="failed")
        elif event["type"] == "payment_intent.processing":
            Payment.objects.filter(stripe_payment_intent_id=payment_intent_id).update(status="processing")

        return HttpResponse(status=200)
