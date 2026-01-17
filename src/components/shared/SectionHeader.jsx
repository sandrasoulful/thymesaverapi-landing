import { cn } from "@/lib/utils"

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
