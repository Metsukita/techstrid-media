import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CompetitiveAdvantages from '../components/CompetitiveAdvantages';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FunnelDiagram from '../components/FunnelDiagram';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <FunnelDiagram />
      <Services />
      <CompetitiveAdvantages />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;