import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Awards from './pages/Awards';
import Overview from './pages/Overview';
import AwardsCategories from './pages/AwardsCategories';
import AwardsWinners from './pages/AwardsWinners';
import AwardsNominate from './pages/AwardsNominate';
import Partners from './pages/Partners';
import MedicalEvents from './pages/MedicalEvents';
import MedicalEventsRegister from './pages/MedicalEventsRegister';
import About from './pages/About';
import Finalists from './pages/Finalists';
import FinalistsWinners from './pages/FinalistsWinners';
import FinalistsVote from './pages/FinalistsVote';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

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
            <Route path="/awards/winners" element={<AwardsWinners />} />
            <Route path="/awards/nominate" element={<AwardsNominate />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/medical-events" element={<MedicalEvents />} />
            <Route path="/medical-events/register" element={<MedicalEventsRegister />} />
            <Route path="/about" element={<About />} />
            <Route path="/finalists" element={<Finalists />} />
            <Route path="/finalists/past-winners" element={<FinalistsWinners />} />
            <Route path="/finalists/vote" element={<FinalistsVote />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;