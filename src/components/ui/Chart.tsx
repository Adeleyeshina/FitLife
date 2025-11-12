import React from "react"
import * as RechartsPrimitive from "recharts"

// A minimal className combiner
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

// Chart configuration type
export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) throw new Error("useChart must be used within a <ChartContainer />")
  return context
}

// -----------------------------------------------------------------------------
// Chart Container
// -----------------------------------------------------------------------------
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ReactNode
  }
>(({ className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "recharts-wrapper [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

// -----------------------------------------------------------------------------
// Chart Style (inject CSS variables for each chart color)
// -----------------------------------------------------------------------------
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, cfg]) => cfg.color)
  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
[data-chart='${id}'] {
${colorConfig.map(([key, cfg]) => `  --color-${key}: ${cfg.color};`).join("\n")}
}`,
      }}
    />
  )
}

// -----------------------------------------------------------------------------
// Tooltip
// -----------------------------------------------------------------------------
export const ChartTooltip = RechartsPrimitive.Tooltip

type CustomTooltipProps = Partial<RechartsPrimitive.TooltipProps<any, any>> & {
  hideIndicator?: boolean
  className?: string
}

export const ChartTooltipContent = React.forwardRef<HTMLDivElement, CustomTooltipProps>(
  (props, ref) => {
    const { active, className, hideIndicator = false } = props
    const payload = (props as any).payload as any[] | undefined
    const { config } = useChart()

    if (!active || !payload || payload.length === 0) return null

    return (
      <div
        ref={ref}
        className={cn(
          "min-w-32 rounded-md border border-border/50 bg-background px-3 py-2 text-xs shadow-md",
          className
        )}
      >
        {payload.map((item, idx) => {
          const key = item.name || item.dataKey || "value"
          const cfg = config[key]
          const color =
            item.color || item.payload?.fill || cfg?.color || "hsl(var(--primary))"

          return (
            <div key={idx} className="flex items-center justify-between gap-2">
              {!hideIndicator && (
                <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
              )}
              <span className="text-muted-foreground">{cfg?.label || key}</span>
              <span className="font-mono font-medium text-foreground">
                {item.value?.toLocaleString?.()}
              </span>
            </div>
          )
        })}
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

// -----------------------------------------------------------------------------
// Legend
// -----------------------------------------------------------------------------
export const ChartLegend = RechartsPrimitive.Legend

type CustomLegendProps = Partial<RechartsPrimitive.LegendProps> & {
  hideIcon?: boolean
  className?: string
}

export const ChartLegendContent = React.forwardRef<HTMLDivElement, CustomLegendProps>(
  (props, ref) => {
    const { className, hideIcon = false } = props
    const payload = (props as any).payload as any[] | undefined
    const { config } = useChart()

    if (!payload || payload.length === 0) return null

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap justify-center gap-4 pt-2 text-xs", className)}
      >
        {payload.map((item) => {
          const key = item.dataKey || "value"
          const cfg = config[key]
          return (
            <div key={key} className="flex items-center gap-1.5">
              {!hideIcon && (
                <div className="h-2 w-2 rounded-sm" style={{ backgroundColor: item.color }} />
              )}
              <span>{cfg?.label || key}</span>
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegendContent"
