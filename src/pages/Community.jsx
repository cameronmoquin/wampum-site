import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, InfoCard, Callout } from '../components/ContentSection'

export default function Community() {
  return (
    <div>
      <PageHeader
        title="Community"
        subtitle="How to build cooperative systems that don't require anyone to be in charge"
      />

      <ContentSection>
        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            The question is not whether community is possible. Humans have lived cooperatively for most of our existence as a species. The question is whether we can do it intentionally, in a culture that has spent three centuries training us not to.
          </p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">What We Mean by Cooperative</h2>
          <p>
            We don't mean a commune. We don't mean a cult. We don't mean everyone agrees about everything. We mean a group of people who have decided, deliberately, to share certain resources and responsibilities because doing so makes everyone's life more stable, more resilient, and less lonely.
          </p>
          <p>
            A cooperative community is a set of agreements. Some are formal. Some are habits. All of them can be renegotiated. The point is that they exist — that people have talked about them, written them down, and chosen them together.
          </p>
        </Prose>
      </ContentSection>

      {/* Behavioral Design Section */}
      <div className="bg-parchment py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold text-bark mb-3">Designing Good Systems</h2>
          <p className="text-smoke mb-8">
            In 1948, B.F. Skinner published <em>Walden Two</em>, a novel about an intentional community designed using behavioral science. The book is imperfect. Some of its ideas feel controlling. But its core insight is sound: the systems we live inside shape how we behave. If we design better systems, we get better outcomes. Not by controlling people — by removing friction from cooperation and adding friction to exploitation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Shared Labor by Choice">
              <p>Everyone contributes. Nobody is assigned permanently to work they hate. Labor rotates. A credit system tracks hours — not to punish, but to make invisible work visible. Cooking, cleaning, childcare, and maintenance count as much as building or growing.</p>
            </InfoCard>

            <InfoCard title="Small-Scale Governance">
              <p>No president. No board. Decisions happen by consent — which is not the same as consensus. Consent means nobody has a principled objection. You don't have to love every decision. You have to be able to live with it. If you can't, you say so, and the group works it out.</p>
            </InfoCard>

            <InfoCard title="Design the Environment">
              <p>If you want people to cook together, build a kitchen people want to be in. If you want people to share tools, make the tool library easier to use than buying your own. Behavioral design is architecture, not coercion. You make the good thing the easy thing.</p>
            </InfoCard>

            <InfoCard title="Children Belong to Everyone">
              <p>Not literally. But the idea that child-rearing is the sole responsibility of biological parents is historically bizarre. Most human societies shared the work. Children benefit from multiple trusted adults. Parents benefit from not doing it alone. This is not radical. This is Tuesday in most of human history.</p>
            </InfoCard>

            <InfoCard title="Transparency Over Trust">
              <p>Don't build a system that requires people to be good. Build a system that makes it easy to see what's happening. Open books. Shared calendars. Public meeting notes. Trust comes from transparency, not the other way around.</p>
            </InfoCard>

            <InfoCard title="The Right to Leave">
              <p>Any community that makes it hard to leave is not a community. It's a trap. Good cooperative design includes exit paths. Nobody stays because they have to. They stay because it works.</p>
            </InfoCard>
          </div>

          <Callout type="note">
            <p><strong>A note on Walden Two:</strong> Read it if you haven't. Read it critically. Skinner's fictional community has elements that feel paternalistic. The planners have too much power. The novel doesn't fully solve the problem of authority. But the questions it asks — can we design a community that reduces unnecessary suffering? — remain worth asking. Take what works. Leave the rest.</p>
          </Callout>
        </div>
      </div>

      {/* Practical Principles */}
      <ContentSection>
        <h2 className="text-3xl font-serif font-bold text-bark mb-8">Practical Cooperative Principles</h2>

        <div className="space-y-8">
          <div className="border-l-4 border-charcoal pl-6">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Shared Meals</h3>
            <p className="text-smoke">
              Start here. Before you build governance or write bylaws, eat together. Cooking rotation — three people cook for twenty, then they don't cook for a week. The math works. The relationships that form over a shared table are the foundation of everything else. You learn who shows up. You learn who cleans without being asked. That's your community.
            </p>
          </div>

          <div className="border-l-4 border-charcoal pl-6">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Tool Libraries</h3>
            <p className="text-smoke">
              Nobody needs to own a circular saw. One good one serves twenty households. Same with ladders, pressure canners, dehydrators, tillers, and socket sets. A shared tool shed with a checkout log costs a fraction of everyone buying their own. This is not ideological. This is efficient.
            </p>
          </div>

          <div className="border-l-4 border-charcoal pl-6">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Skill-Sharing as Currency</h3>
            <p className="text-smoke">
              You know how to wire a circuit. Your neighbor knows how to can tomatoes. Your other neighbor can fix a carburetor. None of you need to pay each other. You need a system for making offers visible and matching needs to abilities. A bulletin board works. A group chat works. The medium doesn't matter. The practice of asking and offering does.
            </p>
          </div>

          <div className="border-l-4 border-charcoal pl-6">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Conflict Resolution</h3>
            <p className="text-smoke">
              Conflicts will happen. They are not failures. They are data. The system needs a process: direct conversation first, mediation second, community discussion third. The goal is not to eliminate disagreement. The goal is to prevent disagreement from becoming resentment. Name it early. Address it directly. Move on.
            </p>
          </div>

          <div className="border-l-4 border-charcoal pl-6">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Decision-Making by Consent</h3>
            <p className="text-smoke">
              Consensus is a trap. It requires everyone to agree, which means one person can block anything. Consent-based decision-making is different: a proposal passes unless someone has a reasoned, principled objection — not a preference, not a feeling, but a specific concern that the proposal would cause harm. This keeps things moving while protecting minority voices.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* The Community Gardeners Model */}
      <div className="bg-bark text-sand-light py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold text-sand-light mb-6">The Community Gardeners Model</h2>

          <div className="space-y-6 text-sand-light/80">
            <div className="flex gap-4 items-start">
              <span className="text-white/70 text-2xl shrink-0">1.</span>
              <div>
                <h3 className="font-semibold text-sand-light text-lg mb-1">Start with food. Always start with food.</h3>
                <p>A garden is the lowest-stakes, highest-return cooperative project. You learn to work together. You produce something tangible. You build trust over dirt and seeds before you try to build it over money or governance. If you can't grow tomatoes together, you can't do anything together.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-white/70 text-2xl shrink-0">2.</span>
              <div>
                <h3 className="font-semibold text-sand-light text-lg mb-1">Map your resources.</h3>
                <p>Who has a yard? Who has tools? Who knows how to do what? Who has a truck? Every community is richer than it thinks. Most of the wealth is invisible because nobody has bothered to inventory it. Make a list. Share it. You'll be surprised.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-white/70 text-2xl shrink-0">3.</span>
              <div>
                <h3 className="font-semibold text-sand-light text-lg mb-1">Know your neighbors.</h3>
                <p>Not "wave from the driveway" know. Actually know. What they need. What they can do. Whether they have medication they can't miss. Whether they have kids. Whether they can cook. This information is critical when things go sideways and useful when things are fine.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-white/70 text-2xl shrink-0">4.</span>
              <div>
                <h3 className="font-semibold text-sand-light text-lg mb-1">Build trust before you build systems.</h3>
                <p>Don't start with bylaws. Don't start with blockchain. Start with showing up. Trust is earned in small increments — returning a borrowed tool, covering someone's shift, sharing a surplus. Systems formalize trust that already exists. They cannot create it from nothing.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-white/70 text-2xl shrink-0">5.</span>
              <div>
                <h3 className="font-semibold text-sand-light text-lg mb-1">Keep the ledger honest.</h3>
                <p>When the community reaches the point where exchange matters — labor credits, shared expenses, trading surplus — you need a record that everyone can see and nobody can alter unilaterally. This is why we built <Link to="/wampum" className="text-white/80 hover:text-white underline">WAMPUM</Link>. The blockchain is a wampum belt. Both parties hold the record.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Checklist */}
      <ContentSection>
        <h2 className="text-3xl font-serif font-bold text-bark mb-6">Getting Started Where You Are</h2>
        <p className="text-smoke mb-8">
          You don't need land. You don't need money. You don't need to move anywhere. You need to start.
        </p>

        <div className="bg-white p-6 sm:p-8 border border-charcoal/8">
          <h3 className="font-serif text-xl font-semibold text-bark mb-4">This Week</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Learn the name of one neighbor you don't know yet",
              "Inventory what you have: tools, skills, space, seeds",
              "Cook a meal and invite someone to share it",
              "Start a compost bin — even a bucket under the sink counts",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-smoke">
                <span className="w-4 h-4 border border-charcoal/30 inline-block shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="font-serif text-xl font-semibold text-bark mb-4">This Month</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Plant something edible — a window box of herbs counts",
              "Find or start a community garden plot in your area",
              "Have a conversation with a neighbor about mutual aid — not in those words, just: what do you need? what can you offer?",
              "Learn one new practical skill: bread baking, basic sewing, fire starting, seed saving",
              "Read one book from the Library page",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-smoke">
                <span className="w-4 h-4 border border-charcoal/30 inline-block shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="font-serif text-xl font-semibold text-bark mb-4">This Season</h3>
          <ul className="space-y-3">
            {[
              "Organize a shared meal with 3+ households",
              "Start a tool-sharing arrangement with neighbors",
              "Preserve something: can tomatoes, dry herbs, ferment cabbage",
              "Map your local resources: water sources, foraging spots, community spaces",
              "Have the hard conversation: what would we do if the power went out for a week? A month?",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-smoke">
                <span className="w-4 h-4 border border-charcoal/30 inline-block shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-smoke mt-8 font-serif italic text-lg">
          "If you are reading this and things are fine, we are glad. Hold some WAMP anyway. Know the history. Plant something."
        </p>
      </ContentSection>
    </div>
  )
}
