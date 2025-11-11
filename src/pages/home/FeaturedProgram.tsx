
import { Link } from "react-router-dom"
import Badge from "../../components/ui/Badge"
import { featuredPrograms } from "../../constant/data"
import { Calendar } from "lucide-react"
import Button from "../../components/ui/Button"


const FeaturedProgram = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge className="mb-4 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">Featured Programs</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Start With Our <span className="text-primary">Top Programs</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expertly designed programs to help you reach your fitness goals faster
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredPrograms.map((program, index) => (
                        <div key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-xl bg-card text-card-foreground shadow">
                            <div className={`h-2 bg-linear-to-r ${program.color}`} />
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className={`inline-flex w-fit p-3 rounded-xl bg-linear-to-r ${program.color} mb-4`}>
                                    <program.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-2xl mb-2 font-semibold leading-none tracking-tight">{program.title}</div>
                                <div className="text-base text-muted-foreground">{program.description}</div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {program.duration}
                                    </div>
                                    <Badge className="border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{program.level}</Badge>
                                </div>
                                <Link to="/workouts">
                                    <Button className="w-full h-9 px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90">
                                        Join Program
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProgram