export default function ContentSection({ children, className }) {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 ${className || ''}`}>
      {children}
    </div>
  )
}

export function Prose({ children }) {
  return (
    <div className="prose max-w-none space-y-6 text-charcoal/85 leading-relaxed text-base sm:text-lg">
      {children}
    </div>
  )
}

export function InfoCard({ title, icon, children }) {
  return (
    <div className="bg-white p-6 border border-charcoal/8 hover:border-charcoal/15 transition-colors">
      {icon && <div className="mb-3 text-charcoal/60">{icon}</div>}
      <h3 className="font-serif text-lg font-semibold mb-2 text-charcoal">{title}</h3>
      <div className="text-smoke text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function Callout({ children, type = 'note' }) {
  const styles = {
    note: 'bg-charcoal/3 border-charcoal/20',
    warning: 'bg-ember/3 border-ember/30',
    tip: 'bg-charcoal/3 border-charcoal/20',
    purple: 'bg-charcoal/3 border-wampum/30',
  }
  const labels = {
    note: 'Note',
    warning: 'Warning',
    tip: 'Tip',
    purple: 'Note',
  }
  return (
    <div className={`border-l-4 p-5 my-6 ${styles[type]}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-smoke/70 mb-2">{labels[type]}</p>
      <div className="text-sm leading-relaxed text-charcoal/80">{children}</div>
    </div>
  )
}

export function Recipe({ title, ingredients, steps, note }) {
  return (
    <div className="bg-white p-6 sm:p-8 border border-charcoal/8 my-8">
      <h3 className="font-serif text-2xl font-semibold mb-4 text-charcoal">{title}</h3>
      {ingredients && (
        <div className="mb-6">
          <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-smoke mb-3">Ingredients</h4>
          <ul className="space-y-1">
            {ingredients.map((item, i) => (
              <li key={i} className="text-sm text-charcoal/80 flex items-start gap-2">
                <span className="text-charcoal/30 mt-0.5">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {steps && (
        <div>
          <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-smoke mb-3">Method</h4>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="text-sm text-charcoal/80 flex items-start gap-3">
                <span className="bg-charcoal text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {note && (
        <p className="mt-4 text-sm italic text-smoke border-t border-charcoal/8 pt-4">{note}</p>
      )}
    </div>
  )
}
