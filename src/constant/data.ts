import { Apple, Award, Beef, Coffee, Dumbbell, Flame, Heart, Target, TrendingUp, Users, UtensilsCrossed, Zap } from "lucide-react";

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