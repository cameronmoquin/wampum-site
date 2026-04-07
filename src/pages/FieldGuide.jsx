import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, InfoCard, Callout } from '../components/ContentSection'
import { IconFire, IconLeaf, IconSprout, IconDroplet, IconHome } from '../components/Icons'

const guides = [
  {
    to: '/field-guide/fire',
    icon: IconFire,
    title: 'Fire Craft',
    desc: 'How to build, maintain, and cook with fire',
  },
  {
    to: '/field-guide/wild-foods',
    icon: IconLeaf,
    title: 'Wild Foods',
    desc: 'Acorn flour, foraging, and wild edibles of the Northeast',
  },
  {
    to: '/field-guide/medicinal-plants',
    icon: IconSprout,
    title: 'Medicinal Plants',
    desc: 'Plant medicine of New England',
  },
  {
    to: '/field-guide/community-gardens',
    icon: IconLeaf,
    title: 'Community Gardens',
    desc: 'The best vegetables for cooperative growing',
  },
  {
    to: '/field-guide/water',
    icon: IconDroplet,
    title: 'Water Safety',
    desc: 'Finding, filtering, and storing clean water',
  },
  {
    to: '/field-guide/shelter',
    icon: IconHome,
    title: 'Shelter',
    desc: 'Emergency and long-term shelter construction',
  },
]

export default function FieldGuide() {
  return (
    <div>
      <PageHeader
        title="Field Guide"
        subtitle="Practical knowledge for self-reliance and community resilience"
      />

      <ContentSection>
        <Prose>
          <p>
            This is not a survivalist manifesto. It is a collection of skills that humans practiced
            for most of history &mdash; skills that kept people alive, fed, warm, and connected to
            the land long before electricity, supply chains, or grocery stores. These are the things
            your great-grandparents knew. The things indigenous peoples refined over thousands of
            years. The things we forgot because convenience made them seem unnecessary.
          </p>
          <p>
            In Rhode Island &mdash; with its rocky coastline, dense hardwood forests, salt marshes,
            and cold winters &mdash; knowing how to work with the land is not a hobby. It is a form
            of respect. And if the lights ever go out for good, it becomes the difference between
            thriving and not.
          </p>
          <p>
            The Community Gardeners share what they know freely. This field guide
            is a living document, growing as we learn and teach each other. Pick a topic below and
            start learning.
          </p>
        </Prose>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {guides.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="group block bg-white p-6 border border-charcoal/8 hover:border-charcoal/20 transition-all"
            >
              <div className="mb-3">
                <g.icon className="w-7 h-7 text-charcoal/40 group-hover:text-charcoal/70 transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-bark group-hover:text-charcoal transition-colors">
                {g.title}
              </h3>
              <p className="text-smoke text-sm leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Callout type="tip">
            <p className="font-semibold mb-1">Essential Reading</p>
            <p>
              Tom Brown Jr.'s <em>Field Guide to Wilderness Survival</em> is the single best
              resource for learning these skills in depth. Brown learned tracking and survival from
              Stalking Wolf, a Lipan Apache elder, and spent decades teaching thousands of students
              at his Tracker School in New Jersey. His books are practical, field-tested, and written
              with deep respect for the land. If you own one survival book, make it that one.
            </p>
          </Callout>

          <Callout type="warning">
            <p className="font-semibold mb-1">Safety Disclaimer</p>
            <p>
              Everything in this field guide is educational. Do not attempt unfamiliar skills in
              emergency conditions for the first time. Practice fire-building, shelter construction,
              water purification, and plant identification in safe, controlled settings before you
              need them. Learn with experienced people when possible. Misidentifying a plant can kill
              you. A poorly managed fire can burn down a forest. Respect the knowledge, respect the
              land, and build your skills gradually.
            </p>
          </Callout>
        </div>
      </ContentSection>
    </div>
  )
}
