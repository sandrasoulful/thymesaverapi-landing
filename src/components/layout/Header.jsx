import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Container } from "./Container"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "https://docs.thymesaver.io", label: "Docs", external: true },
]

export function Header() {
  const { isScrolled } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">T</span>
            </div>
            <span className="text-xl font-bold">ThymeSaver</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" asChild>
              <a href="https://dashboard.thymesaver.io/login">Sign In</a>
            </Button>
            <Button asChild>
              <a href="#pricing">Get API Key</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="my-4" />
                <Button variant="outline" asChild className="w-full">
                  <a href="https://dashboard.thymesaver.io/login">Sign In</a>
                </Button>
                <Button asChild className="w-full">
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                    Get API Key
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
