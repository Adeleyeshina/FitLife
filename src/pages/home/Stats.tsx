import { stats } from "../../constant/data"


const Stats = () => {
    return (
        <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                                <stat.icon className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats