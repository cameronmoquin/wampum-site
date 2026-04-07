export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-charcoal text-white py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-3 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
