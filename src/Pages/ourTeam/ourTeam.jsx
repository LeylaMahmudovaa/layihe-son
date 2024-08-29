import React from 'react'

import Navigation from './navigation/navgitaion'
import Navbar from '../../components/navbar/navbar'
import Team from './team/team'
import Statistics from './statistics/statistics'
import Subscribe from '../mainPage/subscribe/subscribe'
import Footer from '../../components/footer/footer'


function OurTeam() {
  return (
    <section>
        <Navbar/>
        <Navigation/>
        <Team/>
        <Statistics/>
        <Subscribe/>
        <Footer/>
    </section>
  )
}

export default OurTeam