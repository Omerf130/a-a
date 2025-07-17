import AboutCompany from '../MainPage/aboutCompany/AboutCompany'
import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutCompany/>
      <AboutMe/>
      <Articles/>
    </div>
  )
}

export default MainPage