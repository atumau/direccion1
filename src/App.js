
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Artificialintelligence from "./Components/ArtificialIntelligence/artificialintelligence";
import Cloudservices from "./Components/CloudServices/cloudservices";
import Speaktous from "./Components/Common/Speaktous/speaktous";
import Technologyconsulting from "./Components/TechnologyConsulting/technologyconsulting";
import Contactus from "./Components/ContactUs/contactus";
import Aboutus from "./Components/AboutUs/aboutus";
import Deliverymodel from "./Components/DeliveryModel/Deliverymodel";
AOS.init({
  duration: 1000,
});
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artificialintelligence" element={<Artificialintelligence />} />
            <Route path="/cloudservices" element={<Cloudservices />} />
            <Route path="/speaktous" element={<Speaktous />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/deliverymodel" element={<Deliverymodel />} />
            <Route path="/technologyconsulting" element={<Technologyconsulting />} />
          </Routes>
        </>
        <Footer />

      </Router>
    </>
  );
}

export default App;
