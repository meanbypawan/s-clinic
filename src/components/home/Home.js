import About from "../about/About";
import Appointment from "../appointments/Appointment";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Banner from "../main-banner/Banner";
import OurDoctor from "../out-doctors/OurDoctor";
import Testimonial from "../testimonial/Testimonial";
import Treatment from "../treatment/Treatment";


export default function Home(){
    return <>
       <Header/>
       <Banner/> 
       <Appointment/>
       <About/>
       <Treatment/>
       <OurDoctor/>
       <Testimonial/>
       <Contact/>
       <Footer/> 
    </>
}