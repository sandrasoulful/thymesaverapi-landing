import { useEffect } from "react"
import { Link } from "react-router-dom"
import { XCircle, ArrowLeft, HelpCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { trackCheckoutCancel } from "@/lib/analytics"

export function CheckoutCancel() {
  useEffect(() => {
    trackCheckoutCancel()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container>
          <Card className="mx-auto max-w-lg">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <XCircle className="h-8 w-8 text-muted-foreground" />
              </div>

              <h1 className="text-2xl font-bold">Changed Your Mind?</h1>
              <p className="mt-4 text-muted-foreground">
                No problem! Your checkout was cancelled and you haven't been
                charged. Feel free to come back anytime.
              </p>

              <div className="mt-8 space-y-4 rounded-lg bg-muted p-6 text-left">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Have Questions?</p>
                    <p className="text-sm text-muted-foreground">
                      Check out our{" "}
                      <Link to="/#faq" className="text-primary hover:underline">
                        FAQ section
                      </Link>{" "}
                      for answers to common questions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Need Help Deciding?</p>
                    <p className="text-sm text-muted-foreground">
                      Our team is happy to help you find the right plan for your
                      needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/#pricing">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Pricing
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:support@thymesaver.io">Contact Support</a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Remember, you can always start with our{" "}
                <a
                  href="https://dashboard.thymesaver.io/signup"
                  className="text-primary hover:underline"
                >
                  free plan
                </a>{" "}
                and upgrade later.
              </p>
            </CardContent>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
