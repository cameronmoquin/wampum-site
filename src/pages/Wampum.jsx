import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, InfoCard, Callout } from '../components/ContentSection'

export default function Wampum() {
  return (
    <div>
      <PageHeader
        title="WAMPUM Token"
        subtitle="A blockchain ledger for cooperative exchange. doing what the wampum belt always did."
      />

      {/* Token Info */}
      <ContentSection>
        <h2 className="font-serif text-3xl font-bold text-bark mb-8">Token Details</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <InfoCard title="Contract Address">
            <code className="text-xs break-all block bg-parchment rounded px-2 py-1.5 font-mono">
              0xC46b794808D30f75787Da284D1EB8d46b9496A67
            </code>
            <a
              href="https://polygonscan.com/token/0xC46b794808D30f75787Da284D1EB8d46b9496A67"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-charcoal/70 underline text-xs mt-2 inline-block"
            >
              View on Polygonscan
            </a>
          </InfoCard>

          <InfoCard title="Network & Standard">
            <p><strong>Network:</strong> Polygon Mainnet</p>
            <p><strong>Standard:</strong> ERC-20</p>
            <p><strong>Total Supply:</strong> 100,000,000 WAMP</p>
            <p className="text-xs mt-1 opacity-70">Fixed supply. Non-mintable.</p>
          </InfoCard>
        </div>

        <h3 className="font-serif text-xl font-semibold text-bark mb-4">Supply Distribution</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <InfoCard title="60% Treasury">
            <p>60,000,000 WAMP held in reserve. Never sold. Backs the cooperative and ensures long-term stability.</p>
          </InfoCard>
          <InfoCard title="35% Liquidity">
            <p>35,000,000 WAMP allocated for liquidity pools, enabling trading and exchange on decentralized markets.</p>
          </InfoCard>
          <InfoCard title="5% Operations">
            <p>5,000,000 WAMP for development, community building, and keeping the lights on.</p>
          </InfoCard>
        </div>

        <h3 className="font-serif text-xl font-semibold text-bark mb-4">How to Buy WAMP</h3>
        <Prose>
          <ol className="space-y-3 list-decimal list-inside">
            <li><strong>Add the Polygon network to MetaMask.</strong> Open MetaMask, go to Settings &gt; Networks, and add Polygon Mainnet (or it may already be listed).</li>
            <li><strong>Get some POL</strong> (Polygon's native token) for gas fees. You can bridge from Ethereum or buy directly on an exchange that supports Polygon withdrawals.</li>
            <li>
              <strong>Trade on QuickSwap.</strong> Head to{' '}
              <a
                href="https://quickswap.exchange/#/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-charcoal/70 underline"
              >
                QuickSwap
              </a>
              , connect your wallet, paste the WAMP contract address, and swap.
            </li>
          </ol>
        </Prose>

        <Callout type="purple">
          Always verify the contract address before trading. The only legitimate WAMP token is at the address listed above on Polygon Mainnet.
        </Callout>
      </ContentSection>

      {/* The Real History of Wampum */}
      <ContentSection className="bg-charcoal/3">
        <h2 className="font-serif text-3xl font-bold text-bark mb-8">The Real History of Wampum</h2>

        <Prose>
          <h3 className="font-serif text-2xl font-semibold text-bark">Origins</h3>
          <p>
            Wampum beads are among the oldest manufactured items in North America. Archaeological evidence
            dates shell beads to at least 4,500 years ago. The word itself comes from the Algonquian
            <em> wampumpeag</em>, meaning "white strings of shell beads." Long before European contact,
            these beads carried meaning across the Eastern Woodlands. they were sacred, diplomatic,
            ceremonial, and deeply personal.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">Two Shells</h3>
          <p>
            Wampum was made from two species of marine shell. The <strong>channeled whelk</strong> and
            the <strong>knobbed whelk</strong> provided white beads, cut from the columella. the dense
            central pillar of the shell. The <strong>quahog</strong>, or hard clam (<em>Mercenaria
            mercenaria</em>), provided the rarer and more valued purple beads, cut from a thin streak of
            deep purple found in only some shells. Purple wampum was worth roughly twice the white.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">The Narragansett Nation</h3>
          <p>
            The Narragansett Nation occupied what is now Rhode Island for more than 10,000 years. Known
            as the "People of the Small Point," they were not a single village but a confederation of
            communities whose population exceeded 10,000 at contact. Alongside the Pequots, the
            Narragansett controlled much of the wampum production along the southern New England coast.
            The shell beds of Narragansett Bay were among the most productive in the region. Wampum
            production was skilled, specialized labor. the work of artisans, not assembly lines.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">Manufacturing</h3>
          <p>
            Making wampum by hand was painstaking and dangerous. The shell was broken with a hammerstone
            to isolate the usable sections. A stone drill called a <em>puckwhegonnautick</em> was used
            to bore the tiny holes through each bead. Water had to be dripped continuously onto the drill
            point to prevent heat fracture. one slip and the bead shattered. The silica dust produced by
            drilling cut into the lungs of the makers over time. Once drilled, beads were strung on plant
            fiber or sinew and rolled against a grinding stone to achieve their final cylindrical shape.
            A single belt could represent months of labor.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">What Wampum Really Was</h3>
          <p>
            Wampum was not just currency. That is the story Europeans told because it was the only frame
            they had. As Allen Hazard, a Narragansett wampum maker, puts it:
          </p>
          <blockquote className="border-l-4 border-charcoal/20 pl-4 py-2 my-4 text-bark/80">
            "They saw us giving it to each other and thought we were paying for things, but we were giving
            each other beautiful things."
          </blockquote>
          <p>
            The colors carried specific meaning. <strong>White wampum</strong> signified peace, purity,
            and friendship. <strong>Purple wampum</strong> signified war, death, and grieving. but also
            solemnity, gravity, and the weight of important matters. Wampum belts encoded information.
            They recorded treaties, alliances, declarations of war, condolences, and histories. They
            worked across language barriers because the patterns themselves held meaning that trained
            readers could interpret. A wampum belt was a living document.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">Treaties Recorded in Wampum</h3>
          <p>
            The <strong>Two Row Wampum Treaty</strong> of 1613, between the Haudenosaunee and the Dutch,
            is one of the earliest known diplomatic agreements between Indigenous nations and Europeans.
            Two parallel purple rows on a white field represent two vessels. a canoe and a ship.
            traveling side by side down the same river, neither steering the other's course. It is a
            treaty of mutual respect and non-interference.
          </p>
          <p>
            The <strong>Hiawatha Belt</strong> records the founding of the Iroquois Confederacy (the
            Haudenosaunee), one of the oldest participatory democracies in the world. Five nations. the
            Mohawk, Oneida, Onondaga, Cayuga, and Seneca. bound together under the Great Law of Peace,
            recorded in wampum.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">Contact and Collapse</h3>
          <p>
            Giovanni da Verrazano arrived in Narragansett Bay in 1524. nearly a century before the
            Pilgrims. The Dutch came specifically for wampum. Isaac de Rasiere, a Dutch trader, brought
            wampum to Plymouth Colony in 1627 and demonstrated its value as a trade medium. By 1637,
            wampum was declared legal tender in the Massachusetts Bay Colony.
          </p>
          <p>
            Then came the collapse. European metal drill bits made mass production possible. Dutch and
            English entrepreneurs set up wampum factories. first in New Amsterdam, then across the
            coast. Counterfeit and machine-made beads flooded the market, destroying the value that had
            been maintained by the difficulty and artistry of hand production. The fur trade, which wampum
            had lubricated, collapsed as beaver populations were hunted out. And then came war.
          </p>
          <p>
            King Philip's War (1675-76) devastated southern New England. The <strong>Great Swamp
            Massacre</strong> in December 1675 killed between 300 and 600 Narragansett men, women, and
            children in a surprise winter attack on their fortified village in what is now South
            Kingstown, Rhode Island. It was one of the deadliest single engagements in colonial American
            history. The Narragansett Nation was shattered. but not destroyed.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-bark">Today</h3>
          <p>
            The Narragansett Nation received federal recognition in 1983 after a long legal fight. They
            hold approximately 1,800 acres in Charlestown, Rhode Island. Allen Hazard, a Narragansett
            tribal member, operates <strong>The Purple Shell</strong>, where he makes wampum using
            traditional methods. the same shells, the same techniques, the same patience. The tradition
            never died. It was suppressed, commercialized, nearly erased. but people kept making it the
            right way.
          </p>
        </Prose>
      </ContentSection>

      {/* Why We Named It This */}
      <ContentSection>
        <h2 className="font-serif text-3xl font-bold text-bark mb-8">Why We Named It This</h2>
        <Prose>
          <p>
            We named the token WAMPUM because the blockchain ledger does what the wampum belt did:
            it creates an immutable record of exchange between parties. No intermediary. No rewriting
            after the fact. The agreement is in the pattern, visible to anyone who reads it.
          </p>
          <p>
            This is not an appropriation. it is an acknowledgment of the charge. Wampum was the
            original ledger technology on this continent. It recorded treaties that colonial governments
            later broke. It held meaning that colonial economies could not comprehend and so reduced to
            "Indian money." The recognition deserved to be spoken rather than buried.
          </p>
          <p>
            We do not claim to continue the tradition of wampum-making. We claim to have learned from it.
            A record of exchange should be beautiful. It should be hard to counterfeit. And the parties
            to the agreement should each hold their own proof.
          </p>
        </Prose>
      </ContentSection>

      {/* Disclaimer */}
      <ContentSection className="border-t border-sand-dark/30">
        <h2 className="font-serif text-2xl font-bold text-bark mb-6">Disclaimer</h2>
        <Callout type="warning">
          <p className="font-semibold mb-2">This is not financial advice.</p>
          <p>
            WAMP is a community token. It has no guaranteed monetary value and should not be treated as
            an investment. Cryptocurrency is volatile and unregulated. Do not spend money you cannot
            afford to lose. We make no promises about price, returns, or future value. This project is
            an experiment in cooperative economics. nothing more, nothing less.
          </p>
        </Callout>
        <Prose>
          <p className="text-sm text-smoke">
            The WAMPUM token is not affiliated with, endorsed by, or connected to any Indigenous nation,
            tribal government, or Native organization. References to the history of wampum are
            educational and offered with respect. We encourage anyone interested in supporting
            Narragansett culture to visit{' '}
            <a
              href="https://narragansettindiannation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-charcoal/70 underline"
            >
              narragansettindiannation.org
            </a>.
          </p>
        </Prose>
      </ContentSection>
    </div>
  )
}
