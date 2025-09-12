import AdvertiseItem from './AdvertiseItem'
import Loding from './Loding';
import Usedata from '../Store/Usedata'
import DisplayItem from './DisplayItem'
import Hero_section from './Hero-section';


function Home() {
  const { loding } = Usedata()
  return (
    <div className='containar'>
      {/* hero section */}
      <Hero_section />
      {/* menu  section */}
      <AdvertiseItem />
      {/* Card secton */}
      {!loding ? <DisplayItem /> : <Loding />}

    </div>
  )
}

export default Home;