import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import HomePage from './pages/HomePage';
import { sectionAliases } from './content/homeSections';
import LocationPage from './pages/LocationPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import { findLocationPage, findLocationByLegacySlug } from './content/locations';
import { findServicePage } from './content/services';

/** Top-level landing pages live at /<slug> — location pages and service pages share the namespace. */
function SlugPage() {
  const { slug = '' } = useParams();
  const location = findLocationPage(slug);
  if (location) return <LocationPage key={slug} page={location} />;
  const service = findServicePage(slug);
  if (service) return <ServicePage key={slug} page={service} />;
  return <NotFoundPage />;
}

/** Old /service-areas/:slug URLs → new keyword URLs. Hosting-level 301s live in public/_redirects. */
function LegacyAreaRedirect() {
  const { slug = '' } = useParams();
  const target = findLocationByLegacySlug(slug);
  return target ? <Navigate to={`/${target.slug}`} replace /> : <NotFoundPage />;
}

function App() {
  return (
    // Bottom padding clears the mobile action bar, which is hidden from lg up.
    <div className="min-h-screen bg-brand-offwhite pb-[86px] lg:pb-0">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {sectionAliases.map((alias) => (
          <Route key={alias} path={alias} element={<HomePage />} />
        ))}
        <Route path="/service-areas" element={<Navigate to="/#service-areas" replace />} />
        <Route path="/service-areas/:slug" element={<LegacyAreaRedirect />} />
        <Route path="/:slug" element={<SlugPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
