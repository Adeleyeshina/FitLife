import { Calendar, Clock } from "lucide-react";
import Badge from "../../components/ui/Badge";
import { workoutPlans } from "../../constant/data"
import Progress from "../../components/ui/Progress";
import Button from "../../components/ui/Button";


const WorkPlan = () => {

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-chart-3/20 text-chart-3 border-chart-3/30';
      case 'Intermediate': return 'bg-primary/20 text-primary border-primary/30';
      case 'Advanced': return 'bg-chart-2/20 text-chart-2 border-chart-2/30';
      default: return 'bg-secondary';
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Workout Plans</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutPlans.map((plan, index) => (
          <div key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-xl bg-card text-card-foreground shadow-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <plan.icon className="h-7 w-7 text-primary" />
                </div>
                <Badge className={getLevelColor(plan.level)}>
                  {plan.level}
                </Badge>
              </div>
              <div className="text-xl mb-2 group-hover:text-primary transition-colors font-semibold leading-none tracking-tight">
                {plan.title}
              </div>
              <div className="text-sm text-muted-foreground">{plan.description}</div>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {plan.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {plan.workouts} workouts
                </div>
              </div>

              {plan.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Your Progress</span>
                    <span className="font-semibold text-primary">{plan.progress}%</span>
                  </div>
                  <Progress value={plan.progress} className="h-2" />
                </div>
              )}

              <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90">
                {plan.progress > 0 ? 'Continue Plan' : 'Join Plan'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkPlan