import Footer from "./components/footer";
import Navbar from "./components/navbar";
import mining from '../public/images/mining1.jpg'

export default function Home() {
  return (
   <div className="flex flex-col h-screen">
    <div className="flex-none">
      <Navbar />
    </div>
    <div className=" flex-1 mx-1 brightness-50" 
        style={{backgroundImage: `url(${mining.src})`,
        backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',filter: 'brightness(100%)'}}>            
    </div>
      <Footer />
   </div>
  );
}
