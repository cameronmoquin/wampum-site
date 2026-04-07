import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, InfoCard } from '../components/ContentSection'

export default function Story() {
  return (
    <>
      <PageHeader
        title="The Story"
        subtitle="A novel-in-progress set in post-collapse Rhode Island. This is a dispatch from a world that hasn't happened yet."
      />

      {/* Epigraph */}
      <section className="bg-parchment border-b border-sand-dark/20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
          <blockquote className="font-serif text-base sm:text-lg text-earth leading-loose italic">
            <span className="text-3xl text-charcoal/20 leading-none mr-1">&ldquo;</span>
            The last gas station in South County closed on a Tuesday.
            Nobody wrote it down. There was no ceremony. The pumps had been dry
            for a week already and the owner had left for his brother's place
            in Vermont. Someone spray-painted GONE NORTH on the door in letters
            you could read from Route 1. After that it was just another building
            with a parking lot and weeds coming through the cracks.
            <span className="text-3xl text-charcoal/20 leading-none ml-1">&rdquo;</span>
          </blockquote>
          <p className="mt-6 text-sm text-smoke font-sans">
            — from the novel
          </p>
        </div>
      </section>

      <ContentSection>
        <Prose>
          <h2 className="font-serif text-3xl text-bark mb-6">The Setting</h2>
          <p>
            The novel is set in Rhode Island — the smallest state, the most densely
            populated corner of New England, a place where the ocean and the forest
            have always been closer together than they should be. The story takes
            place primarily in and around the <strong>Arcadia Management Area</strong>,
            a 14,000-acre tract of forest in western Rhode Island that stretches
            across the towns of Exeter, Richmond, Hopkinton, and West Greenwich.
          </p>
          <p>
            Arcadia is real. You can drive there now. The trails are marked. The
            rivers — the Wood River, the Flat River, the Falls River — run through
            granite and rhododendron. In the novel, Arcadia becomes something else:
            the last viable land in southern Rhode Island, high enough above the
            flooding bay, far enough from the coast, dense enough with timber and
            fresh water to sustain a small population through what comes next.
          </p>
        </Prose>
      </ContentSection>

      {/* Collapse Section */}
      <section className="bg-bark/5 border-y border-sand-dark/15">
        <ContentSection>
          <Prose>
            <h2 className="font-serif text-3xl text-bark mb-6">The Collapse</h2>
            <p>
              It does not happen all at once. That is the thing nobody prepared for —
              not the speed of it, but the slowness. The collapse is cascading and
              compound: climate change drives coastal flooding that swallows
              Warwick, Cranston, parts of East Providence. The bay rises. The
              insurance companies leave before the water does.
            </p>
            <p>
              The economy, already contracting, fails in stages. Supply chains that
              were fragile become intermittent and then theoretical. The grid goes
              unreliable in the summers and then in the winters too.
            </p>
            <p>
              And then the reactor.
            </p>
            <p>
              The <strong>URI Research Reactor</strong> in Kingston — a small facility,
              well-maintained, no Chernobyl — suffers a contained but consequential
              meltdown during a grid failure. The contamination zone is limited.
              The panic is not. Kingston, Wakefield, Narragansett, and most of
              South Kingstown become an exclusion area. Not because the radiation
              demands it everywhere, but because the evacuation order is given and
              never rescinded. There is no one left to rescind it.
            </p>
          </Prose>

          <blockquote className="my-10 border-l-4 border-charcoal/20 pl-6 py-2">
            <p className="font-serif text-base sm:text-lg text-earth italic leading-loose">
              &ldquo;The dosimeters read fine past Exeter. That was the thing.
              The land didn't know it was supposed to be dangerous. The trees
              kept growing. The deer came back before the people did.&rdquo;
            </p>
            <p className="mt-4 text-sm text-smoke font-sans">— from the novel</p>
          </blockquote>
        </ContentSection>
      </section>

      {/* The Token */}
      <ContentSection>
        <Prose>
          <h2 className="font-serif text-3xl text-bark mb-6">The Token</h2>
          <p>
            Before the collapse, a small group of Providence residents — the
            Community Gardeners — minted a token called WAMPUM on the Polygon
            blockchain. It was a civic-pride project, part meme coin, part
            thought experiment, part earnest preparation. They wrote a README
            explaining why. They cited the history of wampum — the real wampum,
            the shell beads of the Narragansett and Wampanoag, the ledger that
            preceded every European one.
          </p>
          <p>
            They minted 100 million tokens. They set the supply forever. They
            held 60% in a treasury and let 40% circulate. They did not expect
            it to matter the way it came to matter.
          </p>
          <p>
            After the collapse, when banks close and cash becomes abstract,
            the WAMP wallets still function. The Polygon network — running on
            distributed international servers, maintained by validators in
            Europe and Asia and South America — continues operating long after
            US infrastructure has degraded. A transaction costs a fraction of
            a cent. It clears in two seconds. It requires no institution, no
            permission, no open branch office.
          </p>
          <p>
            What began as a Providence civic-pride meme coin becomes the only
            functioning ledger of trade and trust in southern Rhode Island.
          </p>
        </Prose>

        <blockquote className="my-10 border-l-4 border-charcoal/20 pl-6 py-2">
          <p className="font-serif text-base sm:text-lg text-earth italic leading-loose">
            &ldquo;We used to joke about it. Twenty WAMP for a beer at the
            Avery. Fifty for a haircut. Then the Avery closed and haircuts
            stopped being a thing and twenty WAMP was a week of eggs from
            the Hendersons and that was not a joke at all.&rdquo;
          </p>
          <p className="mt-4 text-sm text-smoke font-sans">— from the novel</p>
        </blockquote>
      </ContentSection>

      {/* The Narragansett Connection */}
      <section className="bg-charcoal/3 border-y border-charcoal/8">
        <ContentSection>
          <Prose>
            <h2 className="font-serif text-3xl text-bark mb-6">The Narragansett Connection</h2>
            <p>
              The Narragansett Nation headquarters sits at 4533 South County Trail
              in Charlestown, Rhode Island — within the Arcadia area, within the
              geography of the novel. The Narragansett have been on this land for
              over 10,000 years. They survived the Great Swamp Massacre. They
              survived colonization, termination, and the long bureaucratic violence
              of federal recognition politics. They are still here.
            </p>
            <p>
              The novel does not look away from this. The tension of occupying
              indigenous land — of naming a token after the currency of the people
              whose home you are sheltering in — is addressed directly. The
              Community Gardeners are not heroes. They are people who prepared
              better than most and who must now reckon with what it means to build
              a new economy on old ground.
            </p>
            <p>
              The Narragansett characters in the novel are not props. They have
              their own story, their own relationship to the collapse, their own
              long memory of what it means when a civilization fails. They have
              seen it before.
            </p>
          </Prose>

          <blockquote className="my-10 border-l-4 border-charcoal/20 pl-6 py-2">
            <p className="font-serif text-base sm:text-lg text-earth italic leading-loose">
              &ldquo;You named your internet money after our money,&rdquo; she said.
              &ldquo;And now you're on our land using it to buy our food.&rdquo;
              She was not smiling but she was not angry either. She was stating
              facts the way you state weather. &ldquo;We should probably talk
              about that.&rdquo;
            </p>
            <p className="mt-4 text-sm text-smoke font-sans">— from the novel</p>
          </blockquote>
        </ContentSection>
      </section>

      {/* The World */}
      <ContentSection>
        <Prose>
          <h2 className="font-serif text-3xl text-bark mb-6">The World</h2>
          <p>
            Rhode Island is 1,214 square miles. It takes an hour to drive across
            it, or it did when the roads were maintained and the gas was available.
            Now the geography is felt differently. The bay — Narragansett Bay —
            cuts the state nearly in half. The East Bay is largely flooded or
            abandoned. Providence holds on, barely, around College Hill and the
            West Side. The rest is a negotiation between water and what the water
            hasn't taken.
          </p>
          <p>
            West of the bay, the land rises. Oak and hickory forests. Glacial
            ponds. Stone walls from farms that failed two centuries ago. The
            Arcadia Management Area becomes the center of gravity — not because
            anyone planned it, but because it has what people need: trees for
            fuel, rivers for water, soil that will grow things if you know
            how to ask it.
          </p>
          <p>
            Communities form around gardens and trade routes. The old rail
            trails — the South County Bike Path, the Washington Secondary —
            become walking highways. Bridges matter more than they ever did.
            A functioning well is worth more than a house with plumbing that
            no longer connects to anything.
          </p>
        </Prose>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <InfoCard title="Narragansett Bay">
            The bay defines everything. Rising water has reshaped the coastline.
            Fishing is possible but the catch is different now. The shellfishing
            beds — the quahog beds that once produced wampum — are still there,
            shallower and warmer.
          </InfoCard>
          <InfoCard title="The Arcadia Forests">
            14,000 acres of oak, pine, and hemlock. The rivers run clean. The
            deer population has exploded without hunting pressure and then
            corrected. Firewood is the currency underneath the currency.
          </InfoCard>
          <InfoCard title="Providence">
            The city survives in pieces. College Hill has a generator co-op.
            Federal Hill runs a market. The waterfront is gone. What remains
            is stubborn and loud and refuses to leave.
          </InfoCard>
          <InfoCard title="The Trade Routes">
            Former bike paths and rail trails link the settlements. A walk
            from Providence to Arcadia takes a full day. Runners carry
            messages. WAMP transactions confirm before they arrive.
          </InfoCard>
        </div>
      </ContentSection>

      {/* About the Author */}
      <section className="bg-parchment border-t border-sand-dark/20">
        <ContentSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-bark mb-6">About the Author</h2>
            <p className="text-smoke leading-relaxed mb-4">
              <strong className="text-charcoal">Cameron Moquin</strong> is a writer and
              developer in Providence, Rhode Island. <em>The Wampum</em> is set in
              the same universe as <em>Jude of Mosspunkia</em>. Both are concerned
              with what people build after the things they relied on stop working.
            </p>
            <p className="text-smoke leading-relaxed mb-8">
              The WAMPUM token is real. The field guide is real. The novel is in
              progress. The world it describes is fiction, but the distance between
              fiction and forecast gets shorter every year.
            </p>
            <p className="text-sm text-smoke/70 tracking-wide">
              thewampum.com
            </p>
          </div>
        </ContentSection>
      </section>

      {/* Closing CTA */}
      <section className="bg-bark text-sand-light">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14 text-center">
          <p className="font-serif italic text-sand/80 text-lg mb-8 leading-relaxed">
            The story continues in the field guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/wampum"
              className="inline-block bg-charcoal text-white px-8 py-3 rounded-lg font-sans font-medium text-sm hover:bg-charcoal/80 transition-colors no-underline"
            >
              The WAMPUM Token
            </Link>
            <Link
              to="/field-guide"
              className="inline-block bg-charcoal/70 text-white px-8 py-3 rounded-lg font-sans font-medium text-sm hover:bg-charcoal/60 transition-colors no-underline"
            >
              Open the Field Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
