import { Link } from 'react-router-dom'
import ContentSection from '../components/ContentSection'
import { IconBook, IconShell, IconFire, IconLeaf, IconUsers, IconCompass } from '../components/Icons'

const cards = [
  {
    to: '/story',
    icon: <IconBook className="w-5 h-5" />,
    title: 'The Story',
    desc: 'Rhode Island after the collapse. A novel in progress about what comes after.',
  },
  {
    to: '/wampum',
    icon: <IconShell className="w-5 h-5" />,
    title: 'WAMPUM Token',
    desc: 'An ERC-20 on Polygon. 100 million tokens. A ledger built to outlast the systems that made it.',
  },
  {
    to: '/field-guide/fire',
    icon: <IconFire className="w-5 h-5" />,
    title: 'Fire & Shelter',
    desc: 'How to keep warm, stay dry, and build something that holds through winter.',
  },
  {
    to: '/field-guide/wild-foods',
    icon: <IconLeaf className="w-5 h-5" />,
    title: 'Food & Foraging',
    desc: 'What grows here. What you can eat. What the land gives if you learn to ask.',
  },
  {
    to: '/community',
    icon: <IconUsers className="w-5 h-5" />,
    title: 'Community Building',
    desc: 'Governance, mutual aid, conflict resolution. The hard work of staying together.',
  },
  {
    to: '/library',
    icon: <IconCompass className="w-5 h-5" />,
    title: 'Library',
    desc: 'The books, maps, and references we think should survive. A shelf for the long emergency.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero, editorial, stark */}
      <section className="bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/40 mb-6 font-sans">
            The Community Gardeners &middot; Providence, Rhode Island
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            The Wampum
          </h1>
          <p className="font-serif text-lg sm:text-xl text-white/50 italic max-w-lg leading-relaxed">
            A Field Guide for What Comes Next
          </p>
        </div>
      </section>

      {/* Opening Quote */}
      <section className="border-b border-charcoal/8">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
          <blockquote className="font-serif text-base sm:text-lg text-charcoal/70 leading-loose italic">
            We are writing this in April 2026. The supply chain is thin. The news is bad
            and has been bad for several years now. It keeps getting worse in small increments.
            We are noticing it. We have been preparing. This token is part of
            that preparation. We want to explain what it is and why we built it the way we
            built it, because if things go the way we think they might go, this document will
            matter more than it does today. We are writing it now so it exists.
          </blockquote>
          <p className="mt-8 text-xs text-smoke tracking-wide uppercase">
            The Community Gardeners, Providence, Rhode Island
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <ContentSection>
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2 tracking-tight">
          What You Will Find Here
        </h2>
        <p className="text-smoke max-w-2xl mb-10 leading-relaxed text-sm">
          Each section is a chapter. Together they form something between a manual
          and a memoir. Practical knowledge wrapped in the story of why it was gathered.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/8">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group block bg-cream p-6 hover:bg-parchment transition-colors no-underline"
            >
              <div className="mb-3 text-charcoal/40 group-hover:text-charcoal/70 transition-colors">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2 group-hover:text-charcoal transition-colors">
                {card.title}
              </h3>
              <p className="text-smoke text-sm leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </ContentSection>

      {/* What This Is */}
      <section className="bg-charcoal text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-white tracking-tight">
            What This Is
          </h2>
          <div className="space-y-6 font-serif text-base sm:text-lg text-white/60 leading-loose italic">
            <p>
              This is a supplement to a novel in progress. The novel is about a community in western Rhode Island that has to learn to stop fighting within itself in order to survive.
            </p>
            <p>
              The conflict in the story is not left versus right. It is left versus left. People who agree on the big things tearing each other apart over the small ones. The community that makes it is the one that figures out how to stop doing that.
            </p>
            <p>
              The field guide is real. The survival knowledge is real. The token is real. 100 million WAMP on the Polygon blockchain, minted April 2026. The story wrapped around all of it is fiction. Only barely. Only for now.
            </p>
            <p>
              This site collects the practical knowledge the characters in the novel need to survive. Fire, food, water, shelter, medicine, cooperative governance. All of it researched, all of it usable. If the novel becomes unnecessary, good. If it doesn't, this is here.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-b border-charcoal/8">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3 tracking-tight">
            Begin
          </h2>
          <p className="text-smoke max-w-xl mb-8 leading-relaxed text-sm">
            Read the story that holds it all together, or go straight to the
            knowledge that might keep you warm.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/story"
              className="inline-block bg-charcoal text-white px-6 py-2.5 text-sm font-medium hover:bg-charcoal/80 transition-colors no-underline"
            >
              Read the Story
            </Link>
            <Link
              to="/wampum"
              className="inline-block bg-charcoal text-white px-6 py-2.5 text-sm font-medium hover:bg-charcoal/80 transition-colors no-underline"
            >
              The WAMPUM Token
            </Link>
            <Link
              to="/field-guide"
              className="inline-block border border-charcoal/20 text-charcoal px-6 py-2.5 text-sm font-medium hover:bg-charcoal/5 transition-colors no-underline"
            >
              Open the Field Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-14 text-center">
          <p className="font-serif italic text-charcoal/40 text-base sm:text-lg leading-relaxed">
            If you are reading this and things are fine, we are glad. Hold some WAMP
            anyway. Know the history. Plant something.
          </p>
          <p className="mt-6 text-xs text-smoke/50 tracking-wide uppercase">
            thewampum.com &middot; April 2026
          </p>
        </div>
      </section>

      {/* SEO content, visually hidden */}
      <div className="sr-only" aria-hidden="true">
        <h2>The Wampum. Community survival field guide. Providence, Rhode Island.</h2>
        <p>The Wampum is a community survival field guide and companion to a novel in progress by Cameron Moquin. Based in Providence, Rhode Island. Covers foraging in New England, fire building techniques, medicinal plants of the Northeast, community garden planning for USDA Zone 6b, water purification methods, emergency shelter construction, and cooperative community organizing.</p>
        <p>WAMPUM (WAMP) is a community cryptocurrency token on the Polygon blockchain. ERC 20. 100 million fixed supply. Available on QuickSwap decentralized exchange.</p>
        <p>Rhode Island survival guide. New England foraging. Providence community organizing. Mutual aid Rhode Island. Community gardens Providence RI. Narragansett Bay. Western Rhode Island. Arcadia Management Area.</p>
        <p>Cameron Moquin writer Providence Rhode Island. Wayward Birds Productions. Jude of Mosspunkia. Post collapse fiction. Speculative fiction. Literary fiction Rhode Island.</p>
      </div>
    </>
  )
}
