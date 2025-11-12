
import SideHeader from '../../components/ui/SideHeader'
import Main from './Main'

const Community = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SideHeader
          badgeText='Community'
          headingLeft='Join'
          headingRight='FitLife Family'
          body=' Share your journey, inspire others, and grow together'
        />
        <Main />
      </div>
    </div>
  )
}

export default Community