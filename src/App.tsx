import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import HomePage from './pages/HomePage';
import ServiceAreaDetails from './components/ServiceAreaDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    // Bottom padding clears the mobile action bar, which is hidden from lg up.
    <div className="min-h-screen bg-brand-offwhite pb-[86px] lg:pb-0">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/process" element={<HomePage />} />
        <Route path="/service-areas" element={<HomePage />} />
        <Route path="/gallery" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/location" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/service-areas/:slug" element={<ServiceAreaDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
