import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { CodeBlock } from "@/components/shared/CodeBlock"
import { trackCtaClick } from "@/lib/analytics"

const heroCode = `// Get recipes with nutritional data
const response = await fetch(
  'https://api.thymesaver.io/v1/recipes/search',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: 'healthy breakfast',
      dietary: ['vegetarian'],
      maxCalories: 500
    })
  }
);

const { recipes } = await response.json();
// Returns 50+ matching recipes with full nutrition data`

export function Hero() {
  const handlePrimaryCta = () => {
    trackCtaClick("hero", "Get Free API Key")
  }

  const handleSecondaryCta = () => {
    trackCtaClick("hero", "View Documentation")
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.1),transparent)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Copy */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Recipe Data for Developers.{" "}
              <span className="text-primary">Just Add Code.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Build meal planning apps, nutrition trackers, and recipe platforms
              with our comprehensive REST API. 500K+ recipes, real-time nutrition
              data, and smart meal planning in minutes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" asChild onClick={handlePrimaryCta}>
                <a href="#pricing">
                  Get Free API Key
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild onClick={handleSecondaryCta}>
                <a
                  href="https://docs.thymesaver.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </Button>
            </div>
          </div>

          {/* Right column - Code demo */}
          <div className="lg:pl-8">
            <CodeBlock
              code={heroCode}
              language="javascript"
              title="api-example.js"
              className="shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
