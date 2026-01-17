import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { CodeBlock } from "@/components/shared/CodeBlock"
import { trackCtaClick } from "@/lib/analytics"

const heroCode = `// Store a recipe with nutrition analysis
const response = await fetch(
  'https://api.thymesaver.io/v1/recipes',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Avocado Toast',
      ingredients: [
        { name: 'bread', amount: 2, unit: 'slices' },
        { name: 'avocado', amount: 1, unit: 'whole' }
      ],
      instructions: ['Toast bread', 'Mash avocado', 'Spread on toast'],
      analyzeNutrition: true
    })
  }
);

const recipe = await response.json();
// Returns stored recipe with full nutrition data`

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
              The Recipe API for{" "}
              <span className="text-primary">Modern Apps.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Store, serve, and supercharge your users' recipes with our powerful
              REST API. Nutrition analysis, meal planning, and shopping lists —
              all in one simple integration.
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
