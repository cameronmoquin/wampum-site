import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

export default function FireCraft() {
  return (
    <div>
      <PageHeader
        title="Fire Craft"
        subtitle="How to build, maintain, and cook with fire"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            Fire is warmth, light, water purification, food preparation, morale, and signaling. It is the first technology. Everything else follows from it.
          </p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4">The Fire Triangle</h2>
          <p>Every fire needs three things in balance:</p>

          <div className="grid sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white p-5 text-center border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-1">Heat</h3>
              <p className="text-sm text-smoke">An ignition source. Match, spark, friction, focused sunlight.</p>
            </div>
            <div className="bg-white p-5 text-center border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-1">Fuel</h3>
              <p className="text-sm text-smoke">Material that burns. Tinder, kindling, and sustained fuel in progression.</p>
            </div>
            <div className="bg-white p-5 text-center border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-1">Oxygen</h3>
              <p className="text-sm text-smoke">Air circulation. Do not smother the fire. Feed it breath.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Gathering Materials</h2>
          <p>Collect materials <strong>before</strong> you try to start a fire. Organize them by size within arm's reach.</p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Tinder: Catches a Spark</h3>
          <p>Tinder must be completely dry, fine, and fibrous. If it doesn't crumble easily or feel papery, it's not ready.</p>
          <ul className="list-disc list-inside space-y-1 text-charcoal/80 ml-4">
            <li><strong>Birch bark:</strong> The best option. The oils make it burn even when damp. Peel thin strips.</li>
            <li><strong>Dried grass:</strong> Bundle loosely in a nest shape. Dead standing grass is better than ground lying.</li>
            <li><strong>Cattail fluff:</strong> The seed heads. Catches a spark instantly. Carry it in your pocket.</li>
            <li><strong>Pine needles:</strong> Dead brown needles, loose and dry. Bundle them.</li>
            <li><strong>Cedar bark:</strong> Shred it between your hands until it's fluffy. Excellent tinder.</li>
            <li><strong>Fatwood:</strong> Resin saturated pine heartwood. Found in dead pine stumps. Shave curls off it. Burns hot and long even in rain.</li>
          </ul>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Kindling: Feeds the Young Fire</h3>
          <p>Pencil-thin to finger-thick dry sticks. Dead branches still attached to trees (off the ground) are usually drier. Split softwood works well. Gather a double armful before starting.</p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Fuel. Sustains the Fire</h3>
          <p>Wrist-thick to arm-thick pieces of hardwood. Oak, hickory, maple. dense wood that burns slow and hot. Season your wood: dead standing timber is usually better than anything on the ground, which absorbs moisture.</p>

          <Callout type="tip">
            <p><strong>Tom Brown's rule:</strong> Gather three times more tinder, kindling, and fuel than you think you need. Then gather more. Running out of materials while your fire is trying to establish is the most common mistake.</p>
          </Callout>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Ignition Methods</h2>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">1. Match or Lighter</h3>
          <p>There is no shame in carrying matches or a lighter. Carry both. Store matches in a waterproof container. A Bic lighter works in cold and wind when matches won't. Preparedness is not about proving something. it's about succeeding.</p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">2. Ferro Rod (Fire Steel)</h3>
          <p>A ferrocerium rod throws sparks at 3,000°F when scraped with a steel striker. It works wet, works in wind, works at altitude, and lasts thousands of strikes.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-charcoal/80">
            <li>Prepare your tinder bundle. bird's nest shape, loose and fluffy in the center</li>
            <li>Hold the rod close to the tinder, almost touching</li>
            <li>Pull the rod back toward you while holding the striker steady (don't push forward. you'll scatter the tinder)</li>
            <li>Direct sparks into the center of the tinder bundle</li>
            <li>Once the tinder catches, gently blow at the base. steady, not hard</li>
            <li>Transfer the burning bundle to your prepared fire lay</li>
          </ol>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">3. Bow Drill</h3>
          <p>The bow drill is the most reliable friction fire method. Tom Brown considers it the fundamental skill. Learn this and you can make fire anywhere there are trees.</p>

          <Callout type="note">
            <p><strong>Materials:</strong> All components should be from the same wood or woods of similar hardness. Cottonwood, willow, cedar, basswood, and poplar work well. Avoid resinous woods (pine) for the fireboard and spindle.</p>
          </Callout>

          <div className="bg-white p-6 border border-charcoal/8 my-6">
            <h4 className="font-semibold text-bark mb-4">Bow Drill Components</h4>
            <dl className="space-y-3 text-sm">
              <div><dt className="font-semibold text-charcoal inline">Fireboard:</dt><dd className="text-smoke inline ml-1">Flat piece of dry, dead wood. About 1 inch thick, at least 2 inches wide. Carve a small depression near the edge for the spindle. Cut a V-notch from the edge to the depression. this is where the coal forms.</dd></div>
              <div><dt className="font-semibold text-charcoal inline">Spindle:</dt><dd className="text-smoke inline ml-1">Straight, dry stick about 12-18 inches long, thumb-thick. Round it. Point the top end slightly. Blunt the bottom end. it should fit the fireboard depression.</dd></div>
              <div><dt className="font-semibold text-charcoal inline">Bearing Block:</dt><dd className="text-smoke inline ml-1">A hard piece of wood, stone, or bone with a socket to hold the top of the spindle. Lubricate this socket with oil, grease, or green leaf. you want friction on the bottom, not the top.</dd></div>
              <div><dt className="font-semibold text-charcoal inline">Bow:</dt><dd className="text-smoke inline ml-1">A sturdy, slightly curved branch about arm's length. Tie cordage (shoelace, paracord, plant fiber) loosely enough to wrap around the spindle once.</dd></div>
            </dl>
          </div>

          <p><strong>Technique:</strong></p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-charcoal/80">
            <li>Place a leaf or thin bark chip under the V-notch to catch the coal</li>
            <li>Wrap the bowstring once around the spindle</li>
            <li>Place the spindle in the fireboard depression</li>
            <li>Press down on the bearing block with your non-dominant hand. Lock your wrist against your shin for stability.</li>
            <li>Kneel with one foot pinning the fireboard</li>
            <li>Draw the bow back and forth in long, steady strokes. use the full length of the bow</li>
            <li>Start slow. Build heat. As smoke appears, increase speed and downward pressure.</li>
            <li>When thick smoke pours from the notch, stop. The coal is forming in the notch.</li>
            <li>Gently tap the fireboard to release the coal onto your leaf/bark</li>
            <li>Transfer the glowing coal to your tinder bundle. Fold the tinder around it.</li>
            <li>Blow gently and steadily. When it bursts into flame, place it in your fire lay.</li>
          </ol>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">4. Hand Drill</h3>
          <p>Same principle as the bow drill but using only your hands to spin the spindle. Faster to set up. Much harder to sustain. The spindle should be longer and thinner. Roll it between your palms while pressing down. Your hands will migrate down the spindle. float them back up quickly. This takes significant practice and callused hands.</p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">5. Flint and Steel</h3>
          <p>Strike a piece of high-carbon steel against sharp flint, chert, or quartz. The steel sheds tiny molten fragments that land on charcloth (cotton fabric charred in an oxygen-limited container). Once the charcloth catches, transfer to tinder bundle. This is the method used for centuries before matches.</p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Fire Lays</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Teepee Fire</h3>
              <p className="text-smoke text-sm mb-2">Best for: Quick start, boiling water, signaling</p>
              <p className="text-charcoal/80">Lean kindling sticks against each other in a cone shape with tinder in the center. As the kindling catches, add progressively larger pieces in the same conical arrangement. Burns hot and fast. Good for getting a fire going quickly but consumes fuel rapidly.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Log Cabin Fire</h3>
              <p className="text-smoke text-sm mb-2">Best for: Cooking, long-lasting coals, stable heat</p>
              <p className="text-charcoal/80">Stack fuel logs in alternating perpendicular layers (like Lincoln Logs). Build a small teepee of kindling in the center. The structure allows excellent airflow and collapses into a thick bed of coals. This is your cooking fire.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Dakota Hole Fire</h3>
              <p className="text-smoke text-sm mb-2">Best for: Stealth, wind protection, efficiency</p>
              <p className="text-charcoal/80">Dig a hole about 1 foot deep and 1 foot wide. Dig a second, smaller tunnel angling up from the bottom to the surface about 8 inches away. this is your air intake. Build your fire in the main hole. The hole hides the flame, blocks wind, and concentrates heat. Extremely fuel-efficient. You can set a pot directly over the hole for cooking.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Long Fire</h3>
              <p className="text-smoke text-sm mb-2">Best for: Sleeping beside, body-length warmth</p>
              <p className="text-charcoal/80">Lay two green logs parallel, slightly narrower than your body length. Build the fire between them. The logs reflect heat toward you and control the fire's spread. Sleep parallel to the fire. Feed it from the ends through the night. Combined with a debris lean-to at your back, this is a survival sleep system.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Star Fire</h3>
              <p className="text-smoke text-sm mb-2">Best for: Fuel conservation, slow burn</p>
              <p className="text-charcoal/80">Arrange 4-5 logs in a star or spoke pattern with their ends meeting in the center. Light the center. As the ends burn, push the logs inward. You control the burn rate precisely. Excellent for long nights when fuel is limited.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Cooking with Fire</h2>

          <div className="space-y-4 text-charcoal/80">
            <p><strong>Coals, not flames.</strong> Flames are for boiling water and dramatic campfire photos. Cooking happens on coals. Let your log cabin fire burn down to a thick bed of glowing embers. This gives you even, controllable heat.</p>

            <p><strong>Green-stick grill:</strong> Lay fresh (green, living) sticks across two support logs over your coal bed. They won't burn quickly because they're full of moisture. This gives you a grill surface for fish, meat, or a flat stone for pancakes.</p>

            <p><strong>Hot rock cooking:</strong> Heat smooth, dry river stones in the fire. (Never use wet stones or stones from a riverbed. they can explode from trapped moisture expanding as steam.) Drop hot stones into a container of water to bring it to a boil. this is how people cooked in wooden and bark vessels for thousands of years.</p>

            <p><strong>Clay-wrapped cooking:</strong> Wrap fish, roots, or small game in a thick coating of wet clay or mud. Bury it in coals. The clay hardens and steams the food inside. When done, crack the clay open. Skin and scales come off with the clay.</p>
          </div>

          <Callout type="warning">
            <p><strong>Fire Safety:</strong> Clear a circle at least 10 feet in diameter down to bare mineral soil. Keep water or loose dirt nearby to extinguish. Never leave a fire unattended. To fully extinguish: drown it, stir the ashes, drown again, feel with the back of your hand. If it's warm, it's not out.</p>
          </Callout>

          <div className="mt-12 p-6 bg-parchment border border-charcoal/8">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Essential Reading</h3>
            <p className="text-smoke">
              <strong>Tom Brown Jr., <em>Field Guide to Wilderness Survival</em></strong>. The fire chapter alone is worth the book. Brown learned fire-making from Stalking Wolf, a Lipan Apache elder who had been making fire since childhood. The techniques in the book are field-tested across decades and conditions. Start here.
            </p>
          </div>
        </Prose>
      </ContentSection>
    </div>
  )
}
