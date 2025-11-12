import { TrendingDown, TrendingUp } from "lucide-react"
import { progress_stats as stats } from "../../constant/data"


const Stats = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-card text-card-foreground shadow hover:shadow-lg transition-shadow">
                  <div className="flex flex-row items-center justify-between pb-2 space-y-1.5 p-6">
                      <h3 className="text-sm font-medium text-muted-foreground leading-none tracking-tight">
                          {stat.title}
                      </h3>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="p-6 pt-0">
                      <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                      <p className={`text-sm flex items-center gap-1 ${stat.trend === 'up' ? 'text-primary' : 'text-chart-3'}`}>
                          {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          {stat.change}
                      </p>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Stats