import { Link } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <p className="text-9xl font-bold text-primary">404</p>
            <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Oops! The page you're looking for doesn't exist. It might have been
              moved or deleted.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
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
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
