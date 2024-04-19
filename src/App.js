
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Artificialintelligence from "./Components/ArtificialIntelligence/artificialintelligence";
import Cloudservices from "./Components/CloudServices/cloudservices";
import Speaktous from "./Components/Common/Speaktous/speaktous";
import Technologyconsulting from "./Components/TechnologyConsulting/technologyconsulting";

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
            <Route path="/technologyconsulting" element={<Technologyconsulting />} />
          </Routes>
        </>
        <Footer />
      </Router>
    </>
  );
}

export default App;
