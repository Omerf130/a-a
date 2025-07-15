import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutMe/>
      <Articles/>
    </div>
  )
}

export default MainPage