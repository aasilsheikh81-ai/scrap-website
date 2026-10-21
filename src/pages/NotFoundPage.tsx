import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../seo/Seo';
import { servicePages } from '../content/services';
import { locationPages } from '../content/locations';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[75vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-28 text-[#101C32]">
      <Seo
        title="Page Not Found | AutoScrape Pro"
        description="The page you were looking for could not be found. Explore our scrap car pickup, vehicle disposal and ELV scrapping services or contact our team."
        path="/404"
        noindex
      />
      <h1 className="mb-4 text-3xl font-extrabold text-[#101C32] md:text-5xl">Page not found</h1>
      <p className="mb-8 max-w-md text-center text-[#667085]">
        This page doesn’t exist or has moved. These pages may help:
      </p>
      <ul className="mb-10 grid max-w-2xl gap-2.5 text-center sm:grid-cols-2">
        {[...servicePages.map((p) => ({ slug: p.slug, label: p.navLabel })), ...locationPages.map((p) => ({ slug: p.slug, label: p.h1 }))].map(
          (link) => (
            <li key={link.slug}>
              <Link to={`/${link.slug}`} className="text-sm font-semibold text-[#087A45] hover:underline">
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
      <Link to="/" className="btn btn-primary !py-3 !px-6 rounded-xl font-bold flex items-center gap-2 shadow-sm">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </main>
  );
}
