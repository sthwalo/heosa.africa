import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Awards from './pages/Awards';
import Overview from './pages/Overview';
import AwardsCategories from './pages/AwardsCategories';
import AwardsNominate from './pages/AwardsNominate';
import Partners from './pages/Partners';
import MedicalEvents from './pages/MedicalEvents';
import About from './pages/About';
import Finalists from './pages/Finalists';
import PastWinners from './pages/PastWinners';
import PastFinalists from './pages/PastFinalists';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Winners from './pages/Winners';
import TermsAndConditions from './pages/T&Cs';
import QRCodes from './pages/QRCodes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/awards/overview" element={<Overview />} />
            <Route path="/awards/categories" element={<AwardsCategories />} />
            <Route path="/awards/winners" element={<Winners />} />
            <Route path="/awards/past-winners" element={<PastWinners />} />
            <Route path="/awards/nominate" element={<AwardsNominate />} />
            <Route path="/awards/qrcodes" element={<QRCodes />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/medical-events" element={<MedicalEvents />} />
            <Route path="/about" element={<About />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/past-winners" element={<PastWinners />} />
            <Route path="/past-winners/:year" element={<PastWinners />} />
            <Route path="/finalists" element={<Finalists />} />
            <Route path="/past-finalists" element={<PastFinalists />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/t&cs" element={<TermsAndConditions />} />
            <Route path="/awards/vote" element={<Finalists />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;