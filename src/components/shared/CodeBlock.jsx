import { cn } from "@/lib/utils"

const syntaxHighlight = (code) => {
  // Simple syntax highlighting for JSON-like code
  return code
    .replace(
      /"([^"]+)":/g,
      '<span class="text-purple-400">"$1"</span>:'
    )
    .replace(
      /: "([^"]+)"/g,
      ': <span class="text-green-400">"$1"</span>'
    )
    .replace(
      /: (\d+)/g,
      ': <span class="text-amber-400">$1</span>'
    )
    .replace(
      /: (true|false|null)/g,
      ': <span class="text-blue-400">$1</span>'
    )
    .replace(
      /(\/\/.*)/g,
      '<span class="text-gray-500">$1</span>'
    )
    .replace(
      /(fetch|await|const|let|var|async|return)/g,
      '<span class="text-pink-400">$1</span>'
    )
}

export function CodeBlock({
  code,
  language = "javascript",
  title,
  className,
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-slate-950 shadow-2xl",
        className
      )}
    >
      {/* Window header */}
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        {title && (
          <span className="ml-2 text-sm text-slate-400">{title}</span>
        )}
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-4">
        <code
          className="font-mono text-sm leading-relaxed text-slate-300"
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(code),
          }}
        />
      </pre>
    </div>
  )
}
