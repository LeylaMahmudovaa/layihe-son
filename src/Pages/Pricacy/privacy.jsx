import React from 'react'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Navigation from './navigation/navgitaion'
import Subscribe from '../mainPage/subscribe/subscribe'
import Policy from './policy/policy'

function Privacy() {
  return (
   <>
    <Navbar/>
    <Navigation/>
    <Policy/>
    <Subscribe/>
    <Footer/>
   </>
  )
}

export default Privacy