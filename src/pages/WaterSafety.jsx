import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

export default function WaterSafety() {
  return (
    <div>
      <PageHeader
        title="Water Safety"
        subtitle="Finding, purifying, and storing clean water"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            You can survive roughly three weeks without food. You can survive roughly three days without water. Everything in this guide is secondary to water. Solve water first.
          </p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4">Finding Water</h2>

          <Callout type="note">
            <p><strong>Rhode Island advantage:</strong> We are a water-rich state. Narragansett Bay, dozens of freshwater rivers and streams, hundreds of ponds, and regular rainfall (46 inches/year average). In most of RI, you are never more than a few miles from fresh water. The challenge is purification, not finding it.</p>
          </Callout>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Sources, Best to Worst</h3>
          <ol className="list-decimal list-inside space-y-3 ml-4 text-charcoal/80">
            <li><strong>Springs:</strong> Water emerging from the ground is often the cleanest natural source. Look for green vegetation on hillsides in otherwise dry areas. Still purify it — giardia doesn't care how clean it looks.</li>
            <li><strong>Moving streams and rivers:</strong> Flowing water is generally safer than still water. Collect upstream from any settlements, agriculture, or roads. The Pawtuxet, Wood, Pawcatuck rivers all flow through western RI.</li>
            <li><strong>Rain collection:</strong> Rainwater is essentially distilled. Collect from tarps or clean roof surfaces. First-flush from a roof carries debris — let the first few minutes run off, then collect.</li>
            <li><strong>Freshwater ponds and lakes:</strong> Abundant in RI. Higher risk of contamination — agricultural runoff, algae blooms, bacteria. Always purify thoroughly.</li>
            <li><strong>Dew collection:</strong> Tie absorbent cloth around your ankles and walk through tall grass at dawn. Wring into a container. Slow but reliable on dewy mornings.</li>
            <li><strong>Transpiration bag:</strong> Tie a clear plastic bag around a leafy tree branch in the sun. Condensation collects inside. Yields small amounts — 1-2 cups per bag per day.</li>
          </ol>

          <Callout type="warning">
            <p><strong>Warning signs of contaminated water:</strong> Unusual color or cloudiness. Chemical smell. Dead animals nearby. Foam or oily film on surface. Industrial sites or agricultural operations upstream. Algae blooms (blue-green algae is toxic and cannot be filtered or boiled out). When in doubt, find a different source.</p>
          </Callout>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Purification Methods</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-3">1. Boiling</h3>
              <p className="text-sm text-charcoal/60 font-medium mb-2">Most reliable method. Kills all biological pathogens.</p>
              <p className="text-charcoal/80">Bring water to a <strong>rolling boil for 1 full minute</strong>. At elevations above 6,500 feet, boil for 3 minutes. That's it. Does not remove chemical contaminants or heavy metals. Does not remove sediment — pre-filter through cloth if the water is murky. Requires fuel and a container — plan accordingly.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-3">2. Chemical Treatment</h3>
              <p className="text-sm text-charcoal/60 font-medium mb-2">Lightweight, no fire needed. Carry these in your kit.</p>
              <ul className="space-y-2 text-charcoal/80 text-sm">
                <li><strong>Iodine tablets:</strong> Follow package instructions. Usually 1 tablet per liter, 30 minute wait. Leaves a taste. Don't use if pregnant or with thyroid conditions.</li>
                <li><strong>Chlorine dioxide (Aquamira, Katadyn):</strong> More effective than iodine against cryptosporidium. 4-hour wait for full effectiveness.</li>
                <li><strong>Household bleach (unscented, 8.25% sodium hypochlorite):</strong> 2 drops per liter of clear water, 4 drops per liter of cloudy water. Stir. Wait 30 minutes. Should smell slightly of chlorine. If it doesn't, repeat. This is the emergency method to remember.</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-3">3. Filtration</h3>
              <p className="text-sm text-charcoal/60 font-medium mb-2">Removes pathogens and sediment. Portable or improvised.</p>
              <p className="text-charcoal/80 mb-3">Commercial filters (Sawyer, LifeStraw, Katadyn) are excellent and worth stocking. For improvised filtration:</p>

              <div className="bg-parchment p-5 border border-charcoal/8">
                <h4 className="font-semibold text-bark mb-3">DIY Sand & Charcoal Filter</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-charcoal/80">
                  <li>Cut the bottom off a large plastic bottle (2-liter or larger). Invert it — the neck opening is now the bottom/spout.</li>
                  <li>Stuff a cloth or grass plug into the neck to prevent material from falling out.</li>
                  <li>Add layers in this order (bottom to top):
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Small gravel (1 inch layer)</li>
                      <li>Coarse sand (2 inches)</li>
                      <li>Crushed charcoal from a hardwood fire — NOT briquettes (3-4 inches)</li>
                      <li>Fine sand (2 inches)</li>
                      <li>Small gravel top layer (1 inch)</li>
                    </ul>
                  </li>
                  <li>Pour water through the top. Collect from the neck at the bottom.</li>
                  <li><strong>Important:</strong> This improves clarity and removes some contaminants, but does NOT reliably kill all pathogens. <strong>Boil or chemically treat the filtered water as well.</strong></li>
                </ol>
              </div>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-3">4. Solar Disinfection (SODIS)</h3>
              <p className="text-sm text-charcoal/60 font-medium mb-2">Free. Requires only sunlight and a clear bottle.</p>
              <p className="text-charcoal/80">Fill a clear PET plastic bottle with water (pre-filter if cloudy). Lay it on its side in direct sunlight for at least 6 hours (or 2 days if overcast). UV radiation kills bacteria, viruses, and parasites. Place bottles on a reflective surface (corrugated metal roof) for faster results. Not effective against chemical contamination.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-3">5. Distillation</h3>
              <p className="text-sm text-charcoal/60 font-medium mb-2">For saltwater or heavily contaminated sources. Energy-intensive.</p>
              <p className="text-charcoal/80">Boil water, capture the steam, and condense it back into liquid. A simple still: pot with a lid, tubing from the lid to a collection container, with the tubing running through cold water to condense steam. Removes salt, heavy metals, and most chemical contaminants. Slow — produces small quantities. Reserve for when other methods aren't viable.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Storage</h2>
          <ul className="space-y-2 text-charcoal/80">
            <li><strong>Containers:</strong> Food-grade plastic, glass, or stainless steel. Never reuse chemical containers. Blue water barrels (55 gallon) are the standard for bulk storage.</li>
            <li><strong>Location:</strong> Cool, dark place. Heat and light encourage algae and bacterial growth.</li>
            <li><strong>Rotation:</strong> Replace stored water every 6 months, or treat with 1/4 teaspoon bleach per gallon for long-term storage.</li>
            <li><strong>Quantity:</strong> One gallon per person per day minimum. Two gallons if cooking and hygiene are included. A family of four needs 56 gallons per two-week supply.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Rain Collection</h2>
          <p>A 1,000 square foot roof collects approximately 600 gallons per inch of rainfall. Rhode Island averages 46 inches per year. That's 27,600 gallons annually from a single moderate-sized roof. A simple system:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-charcoal/80 mt-3">
            <li>Clean gutters and downspouts</li>
            <li>Install a first-flush diverter (sends the first dirty runoff away)</li>
            <li>Connect downspout to a food-grade barrel (55 gallon) with a screen to keep debris and mosquitoes out</li>
            <li>Install a spigot near the bottom for easy access</li>
            <li>Overflow pipe directs excess to a second barrel or away from the foundation</li>
            <li>Purify before drinking — rooftop runoff carries bird droppings, dust, and debris</li>
          </ol>
        </Prose>
      </ContentSection>
    </div>
  )
}
