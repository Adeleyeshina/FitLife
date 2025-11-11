import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-background">FitLife</span>
            </div>
            <p className="text-background/80 text-sm">
              Transform Your Body, Empower Your Life. Join thousands achieving their fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-background/80 hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/workouts" className="text-background/80 hover:text-primary transition-colors text-sm">
                Workouts
              </Link>
              <Link to="/meals" className="text-background/80 hover:text-primary transition-colors text-sm">
                Meal Plans
              </Link>
              <Link to="/progress" className="text-background/80 hover:text-primary transition-colors text-sm">
                Progress Tracker
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Support</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-background/80 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-background/80 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
              <Link to="/faq" className="text-background/80 hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/terms" className="text-background/80 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Stay Connected</h3>
            <p className="text-background/80 text-sm mb-4">
              Get fitness tips and updates straight to your inbox.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5 text-background" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5 text-background" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5 text-background" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {date} FitLife. All rights reserved. Built with passion for your wellness journey.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer