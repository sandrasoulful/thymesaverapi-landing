import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { SocialProof } from "@/components/sections/SocialProof"
import { Features } from "@/components/sections/Features"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
