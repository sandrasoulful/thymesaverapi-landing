import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Container } from "./Container"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "https://docs.thymesaver.io", external: true },
    { label: "API Status", href: "https://status.thymesaver.io", external: true },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "mailto:hello@thymesaver.io" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { icon: Github, href: "https://github.com/thymesaver", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/thymesaverapi", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/thymesaver", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">T</span>
                </div>
                <span className="text-xl font-bold">ThymeSaver</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Recipe data for developers. Build meal planning apps, nutrition trackers, and recipe platforms.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ThymeSaver. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
