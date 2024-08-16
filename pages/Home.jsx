import React from 'react'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import Hero from '../components/Hero'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
   <>
   <Hero 
    title={
      "Welcome to SuperMom | Your a centralized online platform for diverse requirements of pregnant mothers"
    }
    imageUrl={"/hero.png"}
   />
   <Biography imageUrl={"/about.png"}/>
   <Departments/>
   <MessageForm/>
   
   </>
  )
}

export default Home