import SideHeader from "../../components/ui/SideHeader"
import Charts from "./Charts"
import Goal from "./Goal"
import Stats from "./Stats"


const Progress = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <SideHeader 
                    badgeText="Progress Dashboard"
                    headingLeft="Track Your"
                    headingRight="Journey"
                    body="Monitor your progress and celebrate your achievements"
                />
                <Stats />
                <Charts />
                <Goal />
            </div>
        </div>
    )
}

export default Progress