import { useState, useEffect } from "react"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { PricingCard } from "@/components/shared/PricingCard"
import { Switch } from "@/components/ui/switch"
import { pricingPlans } from "@/data/pricing"
import { redirectToCheckout } from "@/lib/stripe"
import {
  trackPricingView,
  trackPricingToggle,
  trackCheckoutStart,
} from "@/lib/analytics"

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  useEffect(() => {
    trackPricingView()
  }, [])

  const handleToggle = (checked) => {
    const period = checked ? "annual" : "monthly"
    setBillingPeriod(period)
    trackPricingToggle(period)
  }

  const handleSelectPlan = async (plan, period) => {
    if (plan.id === "free") {
      window.location.href = "https://dashboard.thymesaver.io/signup"
      return
    }

    if (plan.id === "enterprise") {
      window.location.href = "mailto:sales@thymesaver.io?subject=Enterprise%20Inquiry"
      return
    }

    const priceId = plan.priceId[period]
    if (priceId) {
      trackCheckoutStart(plan.id, period)
      try {
        await redirectToCheckout(priceId, period)
      } catch (error) {
        console.error("Checkout error:", error)
      }
    }
  }

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <Container>
        <SectionHeader
          subtitle="Pricing"
          title="Simple, Transparent Pricing"
          description="Start free and scale as you grow. No hidden fees, no surprises."
        />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={`text-sm ${
              billingPeriod === "monthly"
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={billingPeriod === "annual"}
            onCheckedChange={handleToggle}
          />
          <span
            className={`text-sm ${
              billingPeriod === "annual"
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Annual{" "}
            <span className="text-primary">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
