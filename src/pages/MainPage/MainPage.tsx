import AboutCompany from '../MainPage/aboutCompany/AboutCompany'
import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'
import { propertyData, damageData } from '../../const/Articles'
import Succsses from './succsses/Succsses'
import Rec from './rec/Rec'
import { damageSuccessData, propertySuccessData } from '../../const/Succsses'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutCompany/>
      <AboutMe isProperty={true}/>
      <Articles slides={propertyData} title="מאמרים בנושא מקרקעין ובתים משותפים"/>
      <Succsses data={propertySuccessData} title="הצלחות המשרד בתחום המקרקעין ובתים משותפים"/>
      <AboutMe isProperty={false}/>
      <Articles slides={damageData} title="מאמרים בנושא נזיקין"/>
      <Succsses data={damageSuccessData} title= "הצלחות המשרד בתחום הנזיקין"/>
      <Rec/>
    </div>
  )
}

export default MainPage