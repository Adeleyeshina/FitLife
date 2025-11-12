import { Apple, Award, Beef, Coffee, Dumbbell, Flame, Heart, Target, TrendingDown, TrendingUp, Users, UtensilsCrossed, Zap } from "lucide-react";
import type { PostProps } from "./types";

export const navLinks = [
    { title: "Home", path: "/" },
    { title: "Workouts", path: "/workouts" },
    { title: "Meal Plans", path: "/meal" },
    { title: "Progress", path: "/progress" },
    { title: "Community", path: "/community" },
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

// --------------------------WORK OUT----------------------------------------
export const categories = [
    { name: 'Weight Loss', icon: Flame, color: 'from-red-500 to-orange-500', count: 45 },
    { name: 'Strength', icon: Dumbbell, color: 'from-primary to-chart-2', count: 60 },
    { name: 'Cardio', icon: Heart, color: 'from-pink-500 to-red-500', count: 38 },
    { name: 'Yoga', icon: Target, color: 'from-purple-500 to-pink-500', count: 28 }
];

export const workoutPlans = [
    {
        title: '30-Day Fat Burner Challenge',
        category: 'Weight Loss',
        level: 'Intermediate',
        duration: '30 days',
        workouts: 24,
        progress: 65,
        description: 'High-intensity interval training designed to maximize fat burn',
        icon: Flame
    },
    {
        title: 'Muscle Building Mastery',
        category: 'Strength',
        level: 'Advanced',
        duration: '12 weeks',
        workouts: 48,
        progress: 30,
        description: 'Progressive overload program for serious muscle gains',
        icon: Dumbbell
    },
    {
        title: 'Cardio Endurance Pro',
        category: 'Cardio',
        level: 'Intermediate',
        duration: '8 weeks',
        workouts: 32,
        progress: 50,
        description: 'Build cardiovascular endurance and stamina',
        icon: Heart
    },
    {
        title: 'Yoga Flow & Flexibility',
        category: 'Yoga',
        level: 'Beginner',
        duration: '6 weeks',
        workouts: 18,
        progress: 80,
        description: 'Mind-body connection through yoga practices',
        icon: Target
    },
    {
        title: 'Power HIIT Sessions',
        category: 'Weight Loss',
        level: 'Advanced',
        duration: '6 weeks',
        workouts: 30,
        progress: 20,
        description: 'Short, intense workouts for maximum results',
        icon: Zap
    },
    {
        title: 'Core Strength Builder',
        category: 'Strength',
        level: 'Beginner',
        duration: '4 weeks',
        workouts: 16,
        progress: 0,
        description: 'Build a strong foundation with core-focused exercises',
        icon: TrendingUp
    }
];



// --------------------------MEAL----------------------------------------
export const mealCategories = [
    { name: 'Breakfast', icon: Coffee, color: 'from-amber-500 to-orange-500' },
    { name: 'Lunch', icon: UtensilsCrossed, color: 'from-primary to-chart-2' },
    { name: 'Dinner', icon: Beef, color: 'from-red-500 to-pink-500' },
    { name: 'Snacks', icon: Apple, color: 'from-green-500 to-emerald-500' }
];

export const mealPlans = [
    {
        name: 'High Protein Power Bowl',
        category: 'Lunch',
        calories: 520,
        protein: 45,
        carbs: 38,
        fats: 22,
        prepTime: '25 min',
        difficulty: 'Easy',
        description: 'Grilled chicken, quinoa, avocado, and mixed greens with tahini dressing',
        tags: ['High Protein', 'Gluten-Free']
    },
    {
        name: 'Overnight Oats Delight',
        category: 'Breakfast',
        calories: 380,
        protein: 15,
        carbs: 52,
        fats: 12,
        prepTime: '5 min',
        difficulty: 'Easy',
        description: 'Rolled oats soaked in almond milk with berries, chia seeds, and honey',
        tags: ['Quick', 'Vegetarian']
    },
    {
        name: 'Salmon & Sweet Potato',
        category: 'Dinner',
        calories: 615,
        protein: 42,
        carbs: 48,
        fats: 28,
        prepTime: '35 min',
        difficulty: 'Medium',
        description: 'Baked salmon fillet with roasted sweet potato and steamed broccoli',
        tags: ['Omega-3', 'Heart Healthy']
    },
    {
        name: 'Greek Yogurt Parfait',
        category: 'Snacks',
        calories: 220,
        protein: 18,
        carbs: 28,
        fats: 6,
        prepTime: '5 min',
        difficulty: 'Easy',
        description: 'Greek yogurt layered with granola, fresh berries, and a drizzle of honey',
        tags: ['Low-Calorie', 'Probiotic']
    },
    {
        name: 'Turkey Avocado Wrap',
        category: 'Lunch',
        calories: 465,
        protein: 32,
        carbs: 42,
        fats: 18,
        prepTime: '15 min',
        difficulty: 'Easy',
        description: 'Whole wheat wrap filled with lean turkey, avocado, lettuce, and tomatoes',
        tags: ['Balanced', 'Portable']
    },
    {
        name: 'Veggie Stir-Fry Bowl',
        category: 'Dinner',
        calories: 390,
        protein: 12,
        carbs: 58,
        fats: 14,
        prepTime: '20 min',
        difficulty: 'Easy',
        description: 'Colorful vegetables stir-fried with brown rice and teriyaki sauce',
        tags: ['Vegan', 'Low-Calorie']
    }
];

// --------------------------Progress----------------------------------------
export const weightData = [
    { date: 'Week 1', weight: 185 },
    { date: 'Week 2', weight: 183 },
    { date: 'Week 3', weight: 181 },
    { date: 'Week 4', weight: 180 },
    { date: 'Week 5', weight: 178 },
    { date: 'Week 6', weight: 176 },
    { date: 'Week 7', weight: 175 },
    { date: 'Week 8', weight: 173 }
];

export const workoutData = [
    { day: 'Mon', calories: 420 },
    { day: 'Tue', calories: 380 },
    { day: 'Wed', calories: 450 },
    { day: 'Thu', calories: 390 },
    { day: 'Fri', calories: 480 },
    { day: 'Sat', calories: 520 },
    { day: 'Sun', calories: 350 }
];

export const progress_stats = [
    {
        title: 'Weight Lost',
        value: '12 lbs',
        change: '-6.5%',
        trend: 'down',
        icon: TrendingDown,
        color: 'text-primary'
    },
    {
        title: 'Workouts This Week',
        value: '5/7',
        change: '+2 from last week',
        trend: 'up',
        icon: Dumbbell,
        color: 'text-chart-2'
    },
    {
        title: 'Calories Burned',
        value: '2,990',
        change: '+15%',
        trend: 'up',
        icon: Flame,
        color: 'text-chart-3'
    },
    {
        title: 'Current Streak',
        value: '12 days',
        change: 'Personal best!',
        trend: 'up',
        icon: Award,
        color: 'text-chart-4'
    }
];

export const achievements = [
    { name: 'First Week Complete', unlocked: true, date: '2 weeks ago' },
    { name: '10 Workouts Milestone', unlocked: true, date: '1 week ago' },
    { name: '5 lbs Lost', unlocked: true, date: '5 days ago' },
    { name: '1 Month Streak', unlocked: false, date: 'Locked' },
    { name: '50 Workouts Total', unlocked: false, date: 'Locked' },
    { name: 'Goal Weight Achieved', unlocked: false, date: 'Locked' }
];

export const posts : Array<PostProps> = [
    {
        user: { name: 'Sarah Johnson', avatar: '', initials: 'SJ', badge: 'Pro Member' },
        timestamp: '2 hours ago',
        content: 'Just completed my first 5K run! 🎉 Never thought I could do it, but FitLife helped me get here. Feeling amazing!',
        image: '',
        likes: 24,
        comments: 8,
        achievement: 'First 5K Complete'
    },
    {
        user: { name: 'Mike Chen', avatar: '', initials: 'MC', badge: 'Trainer' },
        timestamp: '5 hours ago',
        content: 'Quick tip for everyone: Don\'t skip your warm-up! It makes a HUGE difference in preventing injuries and improving performance. Stay safe out there! 💪',
        image: '',
        likes: 42,
        comments: 15,
        achievement: null
    },
    {
        user: { name: 'Emma Davis', avatar: '', initials: 'ED', badge: 'Active' },
        timestamp: '1 day ago',
        content: 'Before and after - 3 months with FitLife! Consistency is key. Thank you to this amazing community for keeping me motivated! 🔥',
        image: '',
        likes: 156,
        comments: 32,
        achievement: '3 Month Milestone'
    },
    {
        user: { name: 'Alex Martinez', avatar: '', initials: 'AM', badge: 'Pro Member' },
        timestamp: '1 day ago',
        content: 'Hit a new personal record on bench press today! 225 lbs! Small victories lead to big changes. Keep pushing! 💯',
        image: '',
        likes: 67,
        comments: 19,
        achievement: 'New PR'
    }
];

export const topMembers = [
    { name: 'Jessica Lee', workouts: 124, streak: 45, initials: 'JL' },
    { name: 'David Park', workouts: 98, streak: 32, initials: 'DP' },
    { name: 'Rachel Green', workouts: 87, streak: 28, initials: 'RG' },
    { name: 'Tom Wilson', workouts: 76, streak: 21, initials: 'TW' }
];