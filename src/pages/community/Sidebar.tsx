import { TrendingUp, Users } from "lucide-react"
import { topMembers } from "../../constant/data"


const Sidebar = () => {
  return (
      <div className="space-y-6">
          {/* Community Stats */}
          <div className="rounded-xl bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                  <h2 className="flex items-center gap-2 font-semibold leading-none tracking-tight">
                      <Users className="h-5 w-5 text-primary" />
                      Community Stats
                  </h2>
              </div>
              <div className="space-y-4 p-6 pt-0">
                  <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Active Members</span>
                      <span className="text-2xl font-bold text-primary">10,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Posts Today</span>
                      <span className="text-2xl font-bold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Workouts Completed</span>
                      <span className="text-2xl font-bold">892</span>
                  </div>
              </div>
          </div>

          {/* Top Members */}
          <div className="rounded-xl  bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                  <h2 className="flex items-center gap-2 font-semibold leading-none tracking-tight">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Top Members
                  </h2>
                  <p className="text-sm text-muted-foreground">This month's most active members</p>
              </div>
              <div className="space-y-4 p-6 pt-0">
                  {topMembers.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${index === 0 ? 'bg-primary text-primary-foreground' :
                                  index === 1 ? 'bg-chart-2 text-white' :
                                      index === 2 ? 'bg-chart-3 text-white' :
                                          'bg-secondary text-foreground'
                              }`}>
                              {index + 1}
                          </div>
                          <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                              <h1 className="bg-primary/20 text-primary flex h-full w-full items-center justify-center rounded-full ">
                                  {member.initials}
                              </h1>
                          </div>
                          <div className="flex-1">
                              <div className="font-medium">{member.name}</div>
                              <div className="text-sm text-muted-foreground">
                                  {member.workouts} workouts • {member.streak} day streak
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Motivation */}
          <div className="bg-linear-to-br from-primary/10 to-chart-2/10 border-primary/20 rounded-xl bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                  <h2 className="text-primary font-semibold leading-none tracking-tight">Daily Motivation</h2>
              </div>
              <div className='p-6 pt-0'>
                  <p className="text-foreground italic leading-relaxed">
                      "The only bad workout is the one that didn't happen. Keep showing up for yourself."
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">- FitLife Team</p>
              </div>
          </div>
      </div>
  )
}

export default Sidebar