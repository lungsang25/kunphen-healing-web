
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BranchClinic from '../components/BranchClinic';
import Doctors from '../components/Doctors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <BranchClinic />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
