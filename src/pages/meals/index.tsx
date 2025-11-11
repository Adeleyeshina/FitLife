import CenterTextHeader from "../../components/ui/CenterTextHeader"


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
            </div>
        </div>
    )
}

export default Meals