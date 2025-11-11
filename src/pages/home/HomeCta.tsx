import { Link } from "react-router-dom"
import Button from "../../components/ui/Button"


const HomeCta = () => {
  return (
      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-linear-to-r from-primary via-chart-2 to-chart-3 rounded-3xl p-12 text-white shadow-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Ready to Transform Your Life?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                      Join thousands of members who are already achieving their fitness goals with FitLife.
                  </p>
                  <Link to="/signup">
                      <Button className="text-lg px-8 py-6 shadow-lg hover:shadow-xl h-10 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          Get Started for Free
                      </Button>
                  </Link>
              </div>
          </div>
      </section>
  )
}

export default HomeCta