import CenterTextHeader from "../../components/ui/CenterTextHeader"
import DailyGoal from "./DailyGoal"
import MealCategories from "./MealCategories"
import MealPlan from "./MealPlan"


const Meals = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <CenterTextHeader 
                    badgeText="Nutrition Plans"
                    headingLeft="Fuel Your Body"
                    headingRight="Right"
                    body=" Personalized meal plans with precise calorie and nutrient breakdowns"
                />
                <MealCategories />
                <MealPlan />
                <DailyGoal />
            </div>
        </div>
    )
}

export default Meals