import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose } from '../components/ContentSection'

function Book({ title, author, description, essential }) {
  return (
    <div className={`p-5 border ${essential ? 'border-l-4 border-charcoal bg-white' : 'bg-white border-charcoal/8'}`}>
      {essential && <span className="text-xs font-semibold text-charcoal uppercase tracking-wide">Essential</span>}
      <h4 className="font-serif text-lg font-semibold text-bark mt-1">{title}</h4>
      <p className="text-sm text-smoke mb-2">{author}</p>
      <p className="text-sm text-charcoal/80">{description}</p>
    </div>
  )
}

export default function Library() {
  return (
    <div>
      <PageHeader
        title="Library"
        subtitle="The books we keep close. The ones we'd grab."
      />

      <ContentSection>
        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            These are not recommendations in the casual sense. These are the books we have read, used, argued about, and returned to. Some of them changed how we think. Some of them taught us specific skills that have kept food on the table and warmth in the house. If the shelves were burning and we could grab an armful, these are what we'd take.
          </p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Survival & Wilderness Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Book
              title="Field Guide to Wilderness Survival"
              author="Tom Brown Jr."
              essential
              description="THE foundational text. Tom Brown learned from Stalking Wolf, a Lipan Apache elder who spent his life traveling the Americas practicing and preserving earth skills. This book covers shelter, fire, water, food, tools, and tracking with a depth that no other survival book matches. It is not a weekend camping guide. It is a manual for living in the woods with nothing. Start here."
            />
            <Book
              title="Field Guide to Wild Edible and Medicinal Plants"
              author="Tom Brown Jr."
              essential
              description="The companion to the survival guide. Identification, preparation, and medicinal use of Northeast species. Brown's approach combines indigenous knowledge with field-tested practice. The illustrations are hand-drawn and specific enough for confident identification."
            />
            <Book
              title="The Tracker"
              author="Tom Brown Jr."
              description="Brown's memoir of learning from Stalking Wolf. Not a how-to book — a why-to book. It provides the philosophical foundation for everything in the field guides. Understanding why these skills matter changes how you learn them."
            />
            <Book
              title="How to Stay Alive in the Woods"
              author="Bradford Angier"
              description="A classic first published in 1956. Practical, no-nonsense, covers the basics of shelter, fire, water, food, and navigation. Less philosophical than Brown, more concise. Good second book after the Tom Brown guides."
            />
            <Book
              title="Bushcraft"
              author="Mors Kochanski"
              essential
              description="The Canadian classic. Kochanski was a wilderness living instructor for over 40 years. Exceptional cold-weather focus — relevant for New England winters. His knife and axe work chapters are unmatched. If you live where it gets cold, read this."
            />
            <Book
              title="US Army Survival Manual (FM 21-76)"
              author="Department of the Army"
              description="Dry, clinical, comprehensive. Covers global environments and scenarios. The psychology of survival chapter is particularly valuable. Free PDF available. Good reference to keep on hand but harder to learn from than Brown or Kochanski."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Gardening & Food Production</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Book
              title="The New Organic Grower"
              author="Eliot Coleman"
              essential
              description="Four-season growing in New England — Coleman farms in Maine and proves you can produce food year-round with simple cold frames and row covers. Practical, detailed, and written by someone who actually does it for a living. The crop planning chapters alone are worth the book."
            />
            <Book
              title="The One-Straw Revolution"
              author="Masanobu Fukuoka"
              description="Natural farming philosophy from a Japanese farmer-philosopher. Fukuoka's method: do as little as possible. No plowing, no weeding, no pesticides. Let the system work. The most profound book about agriculture ever written. It will change how you think about food, soil, and what 'productive' means."
            />
            <Book
              title="The Art of Fermentation"
              author="Sandor Katz"
              essential
              description="Preservation without electricity. Sauerkraut, kimchi, pickles, miso, vinegar, beer, wine, cheese, yogurt — all products of fermentation. Katz is encyclopedic and passionate. In a world without refrigeration, fermentation is how you keep food safe and nutritious through winter. This book is critical."
            />
            <Book
              title="Small-Scale Grain Raising"
              author="Gene Logsdon"
              description="Wheat, corn, oats, rice, and other grains at the garden and small-farm scale. Most people assume grain requires industrial equipment. Logsdon proves otherwise. If your community reaches the point of growing its own grain, this is the manual."
            />
            <Book
              title="The Resilient Gardener"
              author="Carol Deppe"
              essential
              description="Subtitled: 'Food production and self-reliance in uncertain times.' Focuses on the five crops that matter most: potatoes, corn, beans, squash, and eggs. Deppe grows in the Pacific Northwest but the principles are universal. Her approach to seed saving and crop resilience is deeply practical."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Community & Social Design</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Book
              title="Walden Two"
              author="B.F. Skinner"
              description="The thought experiment. A novel about an intentional community designed using behavioral science. Read it critically — some ideas feel controlling, the planners have too much power, and the novel doesn't solve the authority problem. But the central question — can we design a community that reduces unnecessary suffering? — remains the right question to ask. Take what works."
            />
            <Book
              title="Governing the Commons"
              author="Elinor Ostrom"
              essential
              description="Ostrom won the Nobel Prize for proving that communities can manage shared resources effectively without privatization or government control. She studied fishing communities, irrigation systems, and forests around the world. Her eight principles for successful commons management are the blueprint for any cooperative community. Rigorous, evidence-based, essential."
            />
            <Book
              title="Emergent Strategy"
              author="adrienne maree brown"
              description="Adaptive, relational community building inspired by natural systems. Brown draws from Octavia Butler's science fiction and the Black radical tradition. The core insight: small is good, small is all. Change happens at the scale of relationships. Not a prescriptive model — a way of thinking about how groups grow and adapt."
            />
            <Book
              title="Sacred Economics"
              author="Charles Eisenstein"
              description="A critique of money as we know it and an exploration of what economics could be. Eisenstein traces how money separated us from community and proposes alternatives rooted in gift economy and negative-interest currency. Relevant to understanding why we built WAMPUM and what we hope it becomes."
            />
            <Book
              title="Debt: The First 5,000 Years"
              author="David Graeber"
              essential
              description="An anthropologist's history of debt, money, and exchange. Graeber demolishes the myth that barter preceded money and shows that human economies have always been built on trust, obligation, and social relationship. If you want to understand what wampum actually was — not the colonial distortion but the real thing — Graeber gives you the framework."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Rhode Island & Regional</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Book
              title="A Key into the Language of America"
              author="Roger Williams (1643)"
              description="The earliest European account of the Narragansett language and culture. Williams, who founded Providence, lived among the Narragansett and documented their language, customs, and social organization. Deeply flawed by colonial perspective but invaluable as a primary source. The Narragansett words for tools, foods, and natural phenomena appear throughout."
            />
            <div className="bg-white p-5 border border-charcoal/8">
              <h4 className="font-serif text-lg font-semibold text-bark">Local Organizations</h4>
              <p className="text-sm text-smoke mb-2">These are doing the work now, in real life, in Rhode Island:</p>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li><strong>Southside Community Land Trust</strong> — Community gardens and urban farming in Providence</li>
                <li><strong>RI Wild Plant Society</strong> — Native plant conservation and education</li>
                <li><strong>Farm Fresh RI</strong> — Connecting local farms to communities</li>
                <li><strong>Narragansett Indian Tribe</strong> — 4533 South County Trail, Charlestown, RI</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">The Novel</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-5 border border-charcoal/8">
              <h4 className="font-serif text-lg font-semibold text-charcoal">The WAMPUM Novel</h4>
              <p className="text-sm text-smoke mb-2">Cameron Moquin — In progress</p>
              <p className="text-sm text-charcoal/80">A post-collapse novel set in western Rhode Island's Arcadia Management Area. A survival community discovers their WAMP wallets still function on the Polygon network. What began as a civic-pride meme coin becomes the only functioning ledger of trade and trust in southern Rhode Island. The story sits with the tension of its own name.</p>
            </div>
            <div className="bg-white p-5 border border-charcoal/8">
              <h4 className="font-serif text-lg font-semibold text-charcoal">Jude of Mosspunkia</h4>
              <p className="text-sm text-smoke mb-2">Cameron Moquin / Wayward Birds Productions</p>
              <p className="text-sm text-charcoal/80">Set in the same universe. The earlier work that established the world these stories inhabit.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Online Resources</h2>
          <div className="bg-white p-6 border border-charcoal/8">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-0.5">&#8226;</span>
                <div>
                  <strong className="text-bark">Tom Brown Jr.'s Tracker School</strong>
                  <p className="text-sm text-smoke">Hands-on wilderness skills courses in New Jersey. The real thing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-0.5">&#8226;</span>
                <div>
                  <a href="https://polygonscan.com/address/0xC46b794808D30f75787Da284D1EB8d46b9496A67" target="_blank" rel="noopener noreferrer" className="text-bark font-semibold hover:text-charcoal/70">WAMP on Polygonscan</a>
                  <p className="text-sm text-smoke">Verified contract, token details, holder information</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-0.5">&#8226;</span>
                <div>
                  <a href="https://quickswap.exchange" target="_blank" rel="noopener noreferrer" className="text-bark font-semibold hover:text-charcoal/70">QuickSwap Exchange</a>
                  <p className="text-sm text-smoke">Trade WAMP on Polygon's leading decentralized exchange</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-0.5">&#8226;</span>
                <div>
                  <a href="https://github.com/cameronmoquin/wampum-token" target="_blank" rel="noopener noreferrer" className="text-bark font-semibold hover:text-charcoal/70">WAMPUM on GitHub</a>
                  <p className="text-sm text-smoke">Full source code, contract, and the Community Gardeners README</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-0.5">&#8226;</span>
                <div>
                  <strong className="text-bark">thewampum.com</strong>
                  <p className="text-sm text-smoke">Cameron Moquin / Wayward Birds Productions</p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-center text-smoke mt-12 font-serif italic text-lg">
            "If you are reading this and things are not fine — if the network is still running and you still have a device and you found this document somehow — then you know what WAMP was built for. Use it that way. Trade fairly. Keep the ledger honest. That is all we ever asked of it."
          </p>
        </Prose>
      </ContentSection>
    </div>
  )
}
