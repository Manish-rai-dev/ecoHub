import type { FaqItem } from '@/lib/structured-data'

export default function FaqSection({
  items,
  title = 'Frequently asked questions',
}: {
  items: FaqItem[]
  title?: string
}) {
  return (
    <section aria-labelledby="faq-heading" className="py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 id="faq-heading" className="text-3xl font-bold text-brand-primary">
          {title}
        </h2>
        <div className="mt-8 divide-y rounded-2xl border bg-white px-5">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-brand-primary">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
