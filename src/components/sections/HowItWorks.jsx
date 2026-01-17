import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { CodeBlock } from "@/components/shared/CodeBlock"

const steps = [
  {
    number: "01",
    title: "Get Your API Key",
    description: "Sign up for free and get your API key instantly. No credit card required.",
    code: `// Your API key is ready!
const API_KEY = "ts_live_abc123...";`,
  },
  {
    number: "02",
    title: "Store Your First Recipe",
    description: "Use our simple REST API to store recipes with automatic nutrition analysis.",
    code: `const response = await fetch(
  'https://api.thymesaver.io/v1/recipes',
  {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Lemon Herb Chicken',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      ingredients: [...],
      instructions: [...],
      analyzeNutrition: true
    })
  }
);

const recipe = await response.json();`,
  },
  {
    number: "03",
    title: "Build Amazing Features",
    description: "Retrieve recipes, generate meal plans, create shopping lists, and more.",
    code: `// Fetch a recipe with full nutrition data
{
  "id": "rec_abc123",
  "title": "Lemon Herb Chicken",
  "prepTime": 15,
  "cookTime": 30,
  "servings": 4,
  "nutrition": {
    "calories": 320,
    "protein": 42,
    "carbs": 8,
    "fat": 14
  },
  "ingredients": [...],
  "instructions": [...]
}`,
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-20 sm:py-32">
      <Container>
        <SectionHeader
          subtitle="How It Works"
          title="From Zero to Recipe API in Minutes"
          description="Getting started with ThymeSaver API is simple. Follow these three steps to add recipe management to your application."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <CodeBlock
                  code={step.code}
                  language="javascript"
                  title={`step-${step.number}.js`}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
