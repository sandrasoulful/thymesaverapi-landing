export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for hobby projects and testing",
    price: {
      monthly: 0,
      annual: 0,
    },
    priceId: {
      monthly: null,
      annual: null,
    },
    features: [
      { text: "1,000 API calls/month", included: true },
      { text: "10 requests/minute", included: true },
      { text: "Up to 500 stored recipes", included: true },
      { text: "Basic nutrition analysis", included: true },
      { text: "Meal planning", included: false },
      { text: "Community support", included: true },
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For production apps and growing businesses",
    price: {
      monthly: 49,
      annual: 39,
    },
    priceId: {
      monthly: "price_pro_monthly",
      annual: "price_pro_annual",
    },
    features: [
      { text: "100,000 API calls/month", included: true },
      { text: "100 requests/minute", included: true },
      { text: "Unlimited stored recipes", included: true },
      { text: "Advanced nutrition analysis", included: true },
      { text: "Meal planning", included: true },
      { text: "Email support (48h)", included: true },
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale applications",
    price: {
      monthly: null,
      annual: null,
    },
    priceId: {
      monthly: null,
      annual: null,
    },
    features: [
      { text: "Unlimited API calls", included: true },
      { text: "Custom rate limits", included: true },
      { text: "Unlimited stored recipes", included: true },
      { text: "Advanced nutrition analysis", included: true },
      { text: "Meal planning", included: true },
      { text: "Dedicated support + SLA", included: true },
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]
