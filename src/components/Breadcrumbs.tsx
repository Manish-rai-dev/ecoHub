import Link from 'next/link'
import type { BreadcrumbItem } from '@/lib/structured-data'

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden>/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-brand-primary">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-primary hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
