import { Beef, Flame, Pizza, Salad } from "lucide-react"


const DailyGoal = () => {
  return (
      <div className="mt-16 bg-linear-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-3xl p-8">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Your Daily Nutrition Goals</h2>
              <p className="text-muted-foreground mb-8">
                  Based on your profile and fitness goals, here are your recommended daily intake targets
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="rounded-xl bg-card text-card-foreground shadow">
                      <div className="pb-2 flex flex-col space-y-1.5 p-6">
                          <Flame className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-3xl font-semibold leading-none tracking-tight">2,200</p>
                          <p className="text-sm text-muted-foreground">Calories</p>
                      </div>
                  </div>
                  <div className="rounded-xl bg-card text-card-foreground shadow">
                      <div className="pb-2 flex flex-col space-y-1.5 p-6">
                          <Beef className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-3xl font-semibold leading-none tracking-tight">165g</p>
                          <p className="text-sm text-muted-foreground">Protein</p>
                      </div>
                  </div>
                  <div className="rounded-xl bg-card text-card-foreground shadow">
                      <div className="pb-2 flex flex-col space-y-1.5 p-6">
                          <Pizza className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-3xl font-semibold leading-none tracking-tight">220g</p>
                          <p className="text-sm text-muted-foreground">Carbs</p>
                      </div>
                  </div>
                  <div className="rounded-xl bg-card text-card-foreground shadow">
                      <div className="pb-2 flex flex-col space-y-1.5 p-6">
                          <Salad className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-3xl font-semibold leading-none tracking-tight">73g</p>
                          <p className="text-sm text-muted-foreground">Fats</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DailyGoal
