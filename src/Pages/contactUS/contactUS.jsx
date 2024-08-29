import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Navigation from './navigation/navgitaion'
import Contact from './contact/contact'
import GetInTouch from './getInTouch/getInTouch'
import Map from './map/map'
import Subscribe from '../mainPage/subscribe/subscribe'

function ContactUS() {
  return (
    <>
    <Navbar/>
    <Navigation/>
    <Contact/>
     <GetInTouch/>
   <Map/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default ContactUS