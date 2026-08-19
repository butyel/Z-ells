import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbNode } from "@/lib/schema";
import { SITE_URL } from "@/config/site";

export type Crumb = { name: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  path: string;
};

export function Breadcrumbs({ items, path }: BreadcrumbsProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <nav aria-label="Trilha de navegação" className="container-site pt-24 sm:pt-28">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-foreground/80">
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbNode(url, items)} />
    </>
  );
}