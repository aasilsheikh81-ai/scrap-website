import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail. The matching BreadcrumbList schema comes from the same `trail`. */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-brand-black/95 pb-4 pt-28 text-gray-300">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 text-xs md:px-6 md:text-sm">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-brand-red">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link to={crumb.path} className="transition-colors hover:text-white">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
