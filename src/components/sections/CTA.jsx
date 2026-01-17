import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { trackCtaClick } from "@/lib/analytics"

export function CTA() {
  const handleCtaClick = () => {
    trackCtaClick("cta-section", "Get Started for Free")
  }

  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16 sm:py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <svg
              className="h-full w-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Join thousands of developers powering their recipe apps with
            ThymeSaver API. Start free, scale when you're ready.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              variant="secondary"
              asChild
              onClick={handleCtaClick}
            >
              <a href="#pricing">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a
                href="https://docs.thymesaver.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Docs
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
