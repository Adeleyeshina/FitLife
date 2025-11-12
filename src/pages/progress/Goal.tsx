import { Award, Badge, Target } from "lucide-react"
import { achievements } from "../../constant/data"


const Goal = () => {
  return (
      <div className="grid md:grid-cols-2 gap-6">
          {/* Current Goals */}
          <div className="rounded-xl bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                  <p className="flex items-center gap-2 font-semibold leading-none tracking-tight">
                      <Target className="h-5 w-5 text-primary" />
                      Current Goals
                  </p>
                  <p className="text-sm text-muted-foreground">Stay on track with your fitness objectives</p>
              </div>
              <div className="space-y-4 p-6 pt-0">
                  <div className="space-y-2">
                      <div className="flex items-center justify-between">
                          <span className="font-medium">Target Weight: 170 lbs</span>
                          <span className="text-primary font-semibold">3 lbs to go!</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                          <p className="bg-linear-to-r from-primary to-chart-2 h-3 rounded-full transition-all" style={{ width: '80%' }} />
                      </div>
                  </div>

                  <div className="space-y-2">
                      <div className="flex items-center justify-between">
                          <span className="font-medium">Weekly Workout Goal</span>
                          <span className="text-chart-2 font-semibold">5/7 days</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                          <p className="bg-linear-to-r from-chart-2 to-chart-3 h-3 rounded-full transition-all" style={{ width: '71%' }} />
                      </div>
                  </div>

                  <div className="space-y-2">
                      <div className="flex items-center justify-between">
                          <span className="font-medium">Monthly Calorie Burn</span>
                          <span className="text-chart-3 font-semibold">18,500/25,000</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                          <p className="bg-linear-to-r from-chart-3 to-chart-4 h-3 rounded-full transition-all" style={{ width: '74%' }} />
                      </div>
                  </div>
              </div>
          </div>

          {/* Achievements */}
          <div className="rounded-xl bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                  <p className="flex items-center gap-2 font-semibold leading-none tracking-tight">
                      <Award className="h-5 w-5 text-primary" />
                      Achievements
                  </p>
                  <p className="text-sm text-muted-foreground">Celebrate your fitness milestones</p>
              </div>
              <div className="p-6 pt-0">
                  <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                          <div
                              key={index}
                              className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${achievement.unlocked
                                      ? 'bg-primary/5 border-primary/20 hover:bg-primary/10'
                                      : 'bg-muted/50 border-border opacity-60'
                                  }`}
                          >
                              <div className={`p-2 rounded-lg ${achievement.unlocked
                                      ? 'bg-primary/20'
                                      : 'bg-muted'
                                  }`}>
                                  <Award className={`h-5 w-5 ${achievement.unlocked
                                          ? 'text-primary'
                                          : 'text-muted-foreground'
                                      }`} />
                              </div>
                              <div className="flex-1">
                                  <p className="font-medium">{achievement.name}</p>
                                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                              </div>
                              {achievement.unlocked && (
                                  <Badge className="bg-primary/20 text-primary border-primary/30 ">Unlocked</Badge>
                              )}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Goal
