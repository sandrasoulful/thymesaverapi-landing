import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { FeatureCard } from "@/components/shared/FeatureCard"
import { features } from "@/data/features"

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <Container>
        <SectionHeader
          subtitle="Features"
          title="Everything You Need to Build Food Apps"
          description="From recipe search to meal planning, our API provides all the tools you need to create amazing food-related applications."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
