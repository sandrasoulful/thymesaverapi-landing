import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function PricingCard({
  plan,
  billingPeriod,
  onSelectPlan,
  className,
}) {
  const price = plan.price[billingPeriod]
  const isEnterprise = plan.id === "enterprise"

  return (
    <Card
      className={cn(
        "relative flex flex-col",
        plan.highlighted && "border-primary shadow-lg scale-105",
        className
      )}
    >
      {plan.badge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          {plan.badge}
        </Badge>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Price */}
        <div className="mb-6 text-center">
          {isEnterprise ? (
            <div className="text-4xl font-bold">Custom</div>
          ) : (
            <>
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-muted-foreground">/month</span>
              {billingPeriod === "annual" && price > 0 && (
                <p className="mt-1 text-sm text-primary">
                  Save 20% with annual billing
                </p>
              )}
            </>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="h-5 w-5 shrink-0 text-primary" />
              ) : (
                <X className="h-5 w-5 shrink-0 text-muted-foreground/50" />
              )}
              <span
                className={cn(
                  "text-sm",
                  !feature.included && "text-muted-foreground/50"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={plan.highlighted ? "default" : "outline"}
          size="lg"
          onClick={() => onSelectPlan(plan, billingPeriod)}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
