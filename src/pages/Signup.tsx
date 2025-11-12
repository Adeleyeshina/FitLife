import { useState } from "react"
import { Link } from "react-router-dom"
import { Dumbbell, Mail, Lock, User, Github, Chrome } from 'lucide-react'
import Button from "../components/ui/Button"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSignup = () => {

  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-primary/5 via-background to-chart-2/5 py-7">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="bg-primary p-3 rounded-xl">
              <Dumbbell className="h-8 w-8 text-primary-foreground" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold">
            Join <span className="text-primary">FitLife</span> Today
          </h1>
          <p className="text-muted-foreground mt-2">Start your transformation journey</p>
        </div>

        <div className="border-2 rounded-xl border-gray-200 bg-card text-card-foreground shadow">
          <div className="text-center flex flex-col space-y-1.5 p-6">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Create Account</h2>
            <p className="text-sm text-muted-foreground">Sign up to unlock your full potential</p>
          </div>
          <div className="space-y-6 p-6 pt-0">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name">Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email">Email</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">

                Create Account
              </Button>
            </form>

            <div className="flex items-center justify-center text-center mb-5 ">
              <span className="flex-1 h-px bg-primary" />
              <span className="px-3 text-xs text-muted-foreground">
                Or sign up with
              </span>
              <span className="flex-1 h-px bg-primary" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                className="h-9 px-4 py-2 w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                <Chrome className="h-5 w-5 mr-2" />
                Google
              </Button>
              <Button className="h-9 px-4 py-2 w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup