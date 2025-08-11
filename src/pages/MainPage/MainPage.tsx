import AboutCompany from '../MainPage/aboutCompany/AboutCompany'
import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'
import { propertyData, damageData } from '../../const/Articles'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutCompany/>
      <AboutMe isProperty={true}/>
      <Articles slides={propertyData}/>
      <AboutMe isProperty={false}/>
      <Articles slides={damageData}/>
    </div>
  )
}

export default MainPage