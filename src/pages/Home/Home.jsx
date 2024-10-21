import React from 'react'
import Hero from '../../components/Hero/Hero'
import Faq from '../../components/Faq/Faq'
import Newsletter from '../../components/Newsletter/Newsletter'
import MenuCards from '../../components/MenuCards/MenuCards'
import Service from '../../components/Service/Service'
import Testimonial from '../../components/Testimonial/Testimonial'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <MenuCards/>
      <Faq/>
      <Testimonial/>
      <Newsletter/>
      <Contact/>
    </div>
  )
}

export default Home
