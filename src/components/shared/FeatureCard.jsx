import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function FeatureCard({ icon: Icon, title, description, className }) {
  return (
    <Card className={cn("transition-shadow hover:shadow-lg", className)}>
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
