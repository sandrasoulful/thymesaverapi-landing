export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams)
  }
}

export const trackCtaClick = (location, text) => {
  trackEvent("cta_click", { location, text })
}

export const trackPricingView = () => {
  trackEvent("pricing_view")
}

export const trackPricingToggle = (billingPeriod) => {
  trackEvent("pricing_toggle", { billing_period: billingPeriod })
}

export const trackCheckoutStart = (plan, billingPeriod) => {
  trackEvent("checkout_start", { plan, billing_period: billingPeriod })
}

export const trackCheckoutComplete = (plan, billingPeriod) => {
  trackEvent("checkout_complete", { plan, billing_period: billingPeriod })
}

export const trackCheckoutCancel = () => {
  trackEvent("checkout_cancel")
}

export const trackFaqExpand = (question) => {
  trackEvent("faq_expand", { question })
}

export const trackScrollDepth = (percentage) => {
  trackEvent("scroll_depth", { percentage })
}
