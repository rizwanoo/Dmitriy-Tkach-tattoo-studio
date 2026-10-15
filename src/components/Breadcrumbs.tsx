import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#999995] uppercase tracking-wider"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-2"
        >
          <Link
            to="/"
            itemProp="item"
            className="hover:text-white transition-colors"
          >
            <span itemProp="name">HOME</span>
          </Link>
          <meta itemProp="position" content="1" />
          <span className="text-white/20" aria-hidden="true">/</span>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <li
              key={item.label}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {item.path && !isLast ? (
                <>
                  <Link
                    to={item.path}
                    itemProp="item"
                    className="hover:text-white transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <span className="text-white/20" aria-hidden="true">/</span>
                </>
              ) : (
                <span
                  itemProp="name"
                  className="text-[#E9E4DC] font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
