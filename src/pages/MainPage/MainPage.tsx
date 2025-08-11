import AboutCompany from '../MainPage/aboutCompany/AboutCompany'
import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'
import { propertyData, damageData } from '../../const/Articles'
import Succsses from './succsses/Succsses'
import Rec from './rec/Rec'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutCompany/>
      <AboutMe isProperty={true}/>
      <Articles slides={propertyData}/>
      <AboutMe isProperty={false}/>
      <Articles slides={damageData}/>
      <Succsses/>
      <Rec/>
    </div>
  )
}

export default MainPage