import { Zap } from "lucide-react"
import Badge from "../../components/ui/Badge"


const DailyTips = () => {
    return (
        <section className="py-16 bg-linear-to-r from-primary/10 via-chart-2/10 to-chart-3/10">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto shadow-xl rounded-xl bg-card text-card-foreground">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Zap className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <Badge className="border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">Daily Fitness Tip</Badge>
                        </div>
                        <p className="text-2xl font-semibold leading-none tracking-tight">Stay Hydrated Throughout Your Workout</p>
                    </div>
                    <div className="p-6 pt-0">
                        <p className="text-lg text-muted-foreground">
                            Drinking water before, during, and after exercise helps maintain proper hydration,
                            supports muscle function, and enhances performance. Aim for 8-10 glasses daily,
                            and add an extra glass for every 30 minutes of intense exercise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyTips