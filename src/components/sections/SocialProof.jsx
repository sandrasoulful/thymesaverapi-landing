import { Container } from "@/components/layout/Container"

const stats = [
  { value: "500K+", label: "Recipes" },
  { value: "99.9%", label: "Uptime" },
  { value: "50ms", label: "Avg Response" },
  { value: "10K+", label: "Developers" },
]

export function SocialProof() {
  return (
    <section className="border-y bg-muted/50 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
