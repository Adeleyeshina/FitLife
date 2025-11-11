import { Target, Zap } from "lucide-react"
import Badge from "../../components/ui/Badge"
import Button from "../../components/ui/Button"
import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <div className="">
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-28">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-chart-2/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                            Join 10,000+ Members Today
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Transform Your Body,
                            <span className="block bg-linear-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                                Empower Your Life
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Achieve your fitness goals with personalized workout plans, expert guidance, and a supportive community.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={"/signup"}>
                                <Button
                                    className="text-lg py-6 shadow-lg hover:shadow-xl transition-all h-10 rounded-md px-8  bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    <Zap className="mr-2 h-5 w-5" />
                                    Start Your Journey
                                </Button>
                            </Link>
                            <Link to={"/workouts"}>
                                <Button className="h-10 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6">
                                    <Target className="mr-2 h-5 w-5" />
                                    Explore Workouts
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero