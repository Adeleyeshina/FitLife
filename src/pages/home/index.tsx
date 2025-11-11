
import DailyTips from './DailyTips'
import FeaturedProgram from './FeaturedProgram'
import Hero from './Hero'
import HomeCta from './HomeCta'
import Stats from './Stats'

const Home = () => {
  return (
     <div className='min-h-screen'>
        <Hero/>
        <Stats />
        <FeaturedProgram />
        <DailyTips />
        <HomeCta />
     </div>
  )
}

export default Home