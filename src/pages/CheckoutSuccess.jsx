import { useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { CheckCircle, Mail, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { trackCheckoutComplete } from "@/lib/analytics"

export function CheckoutSuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (sessionId) {
      trackCheckoutComplete("pro", "unknown")
    }
  }, [sessionId])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container>
          <Card className="mx-auto max-w-lg">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <h1 className="text-2xl font-bold">Payment Successful!</h1>
              <p className="mt-4 text-muted-foreground">
                Thank you for subscribing to ThymeSaver API Pro. Your account has
                been upgraded and you're ready to start building.
              </p>

              <div className="mt-8 space-y-4 rounded-lg bg-muted p-6 text-left">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Check Your Email</p>
                    <p className="text-sm text-muted-foreground">
                      We've sent your API key and receipt to your email address.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Get Started</p>
                    <p className="text-sm text-muted-foreground">
                      Visit our documentation to learn how to integrate the API.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <a href="https://dashboard.thymesaver.io">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://docs.thymesaver.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Documentation
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Questions? Contact us at{" "}
                <a
                  href="mailto:support@thymesaver.io"
                  className="text-primary hover:underline"
                >
                  support@thymesaver.io
                </a>
              </p>
            </CardContent>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
