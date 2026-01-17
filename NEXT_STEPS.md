# ThymeSaverAPI Landing Page - Next Steps

## 1. Brand Assets

Update the CSS variables in `src/index.css` with your brand colors:

```css
:root {
  --primary: 142.1 76.2% 36.3%;        /* Your primary brand color (HSL) */
  --primary-foreground: 355.7 100% 97.3%;
  /* ... other variables */
}
```

Replace the placeholder logo in `src/components/layout/Header.jsx` and `Footer.jsx` with your actual logo.

---

## 2. Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `VITE_STRIPE_PUBLIC_KEY` - Your Stripe publishable key (pk_test_... or pk_live_...)
- `VITE_API_BASE_URL` - Your backend API URL
- `VITE_GA_MEASUREMENT_ID` - Your Google Analytics 4 measurement ID

---

## 3. Stripe Configuration

### Create Products & Prices in Stripe Dashboard

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/products)
2. Create a "Pro" product with two prices:
   - Monthly: $49/month
   - Annual: $39/month (billed annually at $468/year)
3. Copy the price IDs

### Update Price IDs

Edit `src/data/pricing.js` and replace the placeholder price IDs:

```javascript
priceId: {
  monthly: "price_1ABC...",  // Your monthly price ID
  annual: "price_2XYZ...",   // Your annual price ID
},
```

### Backend Webhook (Required)

You'll need a backend endpoint to create Stripe Checkout sessions. Example endpoint:

```
POST /api/create-checkout-session
Body: { priceId, billingPeriod, successUrl, cancelUrl }
Returns: { sessionId }
```

---

## 4. Google Analytics

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Update `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  gtag('config', 'G-YOUR_ID');
</script>
```

---

## 5. AWS Amplify Deployment

### Option A: Connect via Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Amplify will auto-detect the `amplify.yml` configuration
5. Add environment variables in Amplify Console settings

### Option B: Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### SPA Routing

Add this rewrite rule in Amplify Console (Rewrites and redirects):

| Source | Target | Type |
|--------|--------|------|
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200 |

---

## 6. Custom Domain

1. In Amplify Console, go to "Domain management"
2. Add your domain (e.g., thymesaver.io)
3. Follow the DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## 7. Pre-Launch Checklist

- [ ] Brand colors and logo updated
- [ ] Environment variables configured
- [ ] Stripe products/prices created
- [ ] Backend checkout endpoint deployed
- [ ] Google Analytics configured
- [ ] OG image created (1200x630px) and uploaded to `/public/og-image.png`
- [ ] Favicon updated with your logo
- [ ] All external links verified (docs, dashboard, etc.)
- [ ] Mobile responsive testing complete
- [ ] Lighthouse audit (target 90+ scores)
- [ ] Test Stripe checkout flow end-to-end

---

## 8. Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 9. File Reference

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables (colors, theme) |
| `src/data/pricing.js` | Pricing plans and Stripe price IDs |
| `src/data/features.js` | Feature cards content |
| `src/data/faq.js` | FAQ questions and answers |
| `src/lib/stripe.js` | Stripe checkout logic |
| `src/lib/analytics.js` | Analytics event tracking |
| `index.html` | SEO meta tags, analytics scripts |
| `amplify.yml` | AWS Amplify build configuration |

---

## Need Help?

- [Stripe Docs](https://stripe.com/docs)
- [AWS Amplify Docs](https://docs.amplify.aws/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
