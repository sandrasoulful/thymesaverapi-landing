import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export const redirectToCheckout = async (priceId, billingPeriod) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/create-checkout-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId,
          billingPeriod,
          successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      }
    )

    if (!response.ok) {
      throw new Error("Failed to create checkout session")
    }

    const { sessionId } = await response.json()
    const stripe = await stripePromise

    return stripe.redirectToCheckout({ sessionId })
  } catch (error) {
    console.error("Checkout error:", error)
    throw error
  }
}

export { stripePromise }
