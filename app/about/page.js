import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import call from '../../public/images/call.jpg'

export default function About() {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex-none">
      <Navbar />
    </div>
    <div className=" flex-1 mx-1 relative"
        style={{backgroundImage: `url(${call.src})`,
        backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat', filter: 'brightness(50%)'}}>            
    </div>
    <div className=' absolute top-1/4 w-[45%] left-10 h-[45%] flex flex-col  p-10 opacity-80 text-l'>
      <h1 className=' text-left text-white text-6xl p-2 font-bold'>About Us</h1>
      <p className=' text-white p-2 text-xl font-medium'>MANDO MINING is a leading mining company dedicated to responsible and sustainable resource extraction. With a rich history spanning over 20 years, we have established ourselves as a trusted partner in the mining industry.

At MANDO MINING, we prioritize safety, environmental stewardship, and community engagement in all aspects of our operations. Our team of experienced professionals is committed to implementing best practices to minimize environmental impact and ensure the well-being of our employees and surrounding communities.

</p>
    </div>
      <Footer />
   </div>
  )
}
