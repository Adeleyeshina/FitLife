import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../../constant/data';
import Button from '../ui/Button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              FitLife
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="">
            <ul className='hidden lg:flex items-center gap-8'>
              {
                navLinks.map(({ path, title }, index) => (
                  <li key={index}>
                    <NavLink
                      to={path}
                      className={({ isActive }) => `hover:text-primary transition-colors font-medium ${isActive ? 'text-primary/75' : 'text-foreground'}`}>
                      {title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              className='hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2'
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            <Button
              className='bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
              onClick={() => navigate("/signup")}
            >
              Start Your Journey
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col">
              <ul className='flex flex-col gap-4 text-center'>
                {
                  navLinks.map(({ path, title }, index) => (
                    <li key={index}>
                      <NavLink
                        to={path}
                        className={({ isActive }) => `hover:text-primary transition-colors font-medium ${isActive ? 'text-primary/75' : 'text-foreground'}`}>
                        {title}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  className="w-full hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  className='bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'
                  onClick={() => navigate("/signup")}
                >
                  Start Your Journey
                </Button>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar