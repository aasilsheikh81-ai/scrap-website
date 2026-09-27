import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../seo/Seo';
import { servicePages } from '../content/services';
import { locationPages } from '../content/locations';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-brand-offwhite px-4 pb-20 pt-36 text-brand-black">
      <Seo
        title="Page Not Found | AutoScrape Pro"
        description="The page you were looking for could not be found. Explore our scrap car pickup, vehicle disposal and ELV scrapping services or contact our team."
        path="/404"
        noindex
      />
      <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">Page not found</h1>
      <p className="mb-10 max-w-md text-center text-brand-muted">
        This page doesn’t exist or has moved. These pages may help:
      </p>
      <ul className="mb-10 grid max-w-2xl gap-2 text-center sm:grid-cols-2">
        {[...servicePages.map((p) => ({ slug: p.slug, label: p.navLabel })), ...locationPages.map((p) => ({ slug: p.slug, label: p.h1 }))].map(
          (link) => (
            <li key={link.slug}>
              <Link to={`/${link.slug}`} className="text-sm font-semibold text-brand-red hover:underline">
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
      <Link to="/" className="btn btn-primary">
        <ArrowLeft className="h-5 w-5" />
        Back to home
      </Link>
    </main>
  );
}
