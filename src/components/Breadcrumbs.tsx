import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail in the new light theme. */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#F9FAFB] py-3 border-b border-[#E5E7EB] text-[#667085]">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 text-xs md:px-6 md:text-sm">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-bold text-[#087A45]">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link to={crumb.path} className="transition-colors hover:text-[#087A45]">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
