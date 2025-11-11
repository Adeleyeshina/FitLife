import { Award, Dumbbell, Heart, TrendingUp, Users, Zap } from "lucide-react";

export const navLinks = [
    {title : "Home", path : "/"},
    {title : "Workouts", path : "/workouts"},
    {title : "Meal Plans", path : "/meal"},
    {title : "Progress", path : "/progress"},
    {title : "Community", path : "/community"},
]

export const stats = [
    { value: '10K+', label: 'Active Members', icon: Users },
    { value: '500+', label: 'Workout Plans', icon: Dumbbell },
    { value: '95%', label: 'Success Rate', icon: TrendingUp },
    { value: '50+', label: 'Expert Trainers', icon: Award }
];

export const featuredPrograms = [
    {
        title: 'Weight Loss Bootcamp',
        description: 'High-intensity program designed to burn fat fast',
        duration: '8 weeks',
        level: 'Intermediate',
        icon: Zap,
        color: 'from-primary to-chart-2'
    },
    {
        title: 'Strength Builder',
        description: 'Build muscle and increase overall strength',
        duration: '12 weeks',
        level: 'Advanced',
        icon: Dumbbell,
        color: 'from-chart-2 to-chart-3'
    },
    {
        title: 'Yoga Flow',
        description: 'Flexibility and mindfulness for body and soul',
        duration: '6 weeks',
        level: 'Beginner',
        icon: Heart,
        color: 'from-chart-3 to-chart-4'
    }
];