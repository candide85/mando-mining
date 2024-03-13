import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <Navbar />
      </div>
      <div className=" flex-1 mx-1">
        Contact page content
      </div>
        <Footer />
   </div>
  )
}
