import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero.jsx';

const Appointment = () => {
  return (
    <>
     <Hero title={"Schedule Your Appointment"} 
      imageUrl={"/signin.png"} />
     <AppointmentForm/>
    </>
  )
}

export default Appointment