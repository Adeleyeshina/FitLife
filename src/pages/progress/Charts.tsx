// import { Bar, BarChart, CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../components/ui/Chart"
// import { LineChart } from "lucide-react"
// import { weightData, workoutData } from "../../constant/data"


// const Charts = () => {
//   return (
//       <div className="grid md:grid-cols-2 gap-6 mb-8">
//           {/* Weight Progress */}
//           <div className="rounded-xl bg-card text-card-foreground shadow">
//               <div className="flex flex-col space-y-1.5 p-6">
//                   <p className="font-semibold leading-none tracking-tight">Weight Progress</p>
//                   <p className="text-sm text-muted-foreground">Your weight loss journey over the past 8 weeks</p>
//               </div>
//               <div className="p-6 pt-0">
//                   <ChartContainer
//                       config={{
//                           weight: {
//                               label: 'Weight',
//                               color: 'hsl(var(--primary))'
//                           }
//                       }}
//                       className="h-[300px]"
//                   >
//                       <ResponsiveContainer width="100%" height="100%">
//                           <LineChart data={weightData}>
//                               <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//                               <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
//                               <YAxis stroke="hsl(var(--muted-foreground))" domain={[170, 190]} />
//                               <ChartTooltip content={<ChartTooltipContent />} />
//                               <Line
//                                   type="monotone"
//                                   dataKey="weight"
//                                   stroke="hsl(var(--primary))"
//                                   strokeWidth={3}
//                                   dot={{ fill: 'hsl(var(--primary))', r: 5 }}
//                               />
//                           </LineChart>
//                       </ResponsiveContainer>
//                   </ChartContainer>
//               </div>
//           </div>

//           {/* Weekly Activity */}
//           <div className="rounded-xl bg-card text-card-foreground shadow">
//               <div className="flex flex-col space-y-1.5 p-6">
//                   <p className="font-semibold leading-none tracking-tight">Weekly Activity</p>
//                   <p className="text-sm text-muted-foreground">Calories burned per day this week</p>
//               </div>
//               <div className="p-6 pt-0">
//                   <ChartContainer
//                       config={{
//                           calories: {
//                               label: 'Calories',
//                               color: 'hsl(var(--chart-2))'
//                           }
//                       }}
//                       className="h-[300px]"
//                   >
//                       <ResponsiveContainer width="100%" height="100%">
//                           <BarChart data={workoutData}>
//                               <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//                               <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
//                               <YAxis stroke="hsl(var(--muted-foreground))" />
//                               <ChartTooltip content={<ChartTooltipContent />} />
//                               <Bar
//                                   dataKey="calories"
//                                   fill="hsl(var(--chart-2))"
//                                   radius={[8, 8, 0, 0]}
//                               />
//                           </BarChart>
//                       </ResponsiveContainer>
//                   </ChartContainer>
//               </div>
//           </div>
//       </div>
//   )
// }

// export default Charts



const Charts = () => {
  return (
    <div>Charts</div>
  )
}

export default Charts