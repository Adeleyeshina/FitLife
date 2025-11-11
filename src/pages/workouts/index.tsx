import CenterTextHeader from "../../components/ui/CenterTextHeader"
import Categories from "./Categories"
import WorkPlan from "./WorkPlan"



const Workouts = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <CenterTextHeader
          badgeText="Workout Programs"
          headingLeft="Fitness Journey"
          headingRight="Starts Here"
          body="Choose from our expertly designed workout programs tailored to your goals"
        />
        <Categories />
        <WorkPlan />
      </div>
    </div>
  )
}

export default Workouts