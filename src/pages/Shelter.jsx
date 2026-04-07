import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

export default function Shelter() {
  return (
    <div>
      <PageHeader
        title="Shelter"
        subtitle="Emergency and long-term shelter construction"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            The rule of threes: three hours. In severe weather without shelter, exposure can kill you in three hours. Shelter is not a convenience. It is the first priority after immediate physical safety.
          </p>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4">Location</h2>
          <p>Where you build matters more than what you build. A perfect shelter in a terrible location will fail.</p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 border border-charcoal/8">
              <h4 className="font-semibold text-bark mb-2">Do</h4>
              <ul className="space-y-1 text-sm text-charcoal/80">
                <li>+ Choose elevated ground (water drains away)</li>
                <li>+ Build near materials (saves energy hauling)</li>
                <li>+ Find natural windbreaks (rock faces, dense trees)</li>
                <li>+ Face opening away from prevailing wind</li>
                <li>+ Stay near water but above flood zones</li>
                <li>+ Look for flat, debris-free ground</li>
              </ul>
            </div>
            <div className="bg-white p-4 border border-charcoal/8">
              <h4 className="font-semibold text-bark mb-2">Don't</h4>
              <ul className="space-y-1 text-sm text-charcoal/80">
                <li>- Build in dry riverbeds (flash flood risk)</li>
                <li>- Build under dead standing trees ("widow-makers")</li>
                <li>- Build at the bottom of a hill (cold air pools)</li>
                <li>- Build in tall grass (insects, snakes, fire risk)</li>
                <li>- Build on exposed ridgelines (wind, lightning)</li>
                <li>- Build directly on bare ground without insulation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Emergency Shelters</h2>

          <div className="bg-white p-6 border border-charcoal/8 mb-6">
            <h3 className="font-serif text-2xl font-semibold text-bark mb-3">The Debris Hut</h3>
            <p className="text-sm text-charcoal/60 font-medium mb-3">Tom Brown Jr.'s signature shelter. Can be built in 1-2 hours with no tools. Keeps you warm in below-freezing temperatures.</p>
            <p className="text-charcoal/80 mb-4">This is the shelter to learn. If you know how to build a debris hut, you can survive any night in the Northeast woodlands.</p>

            <ol className="list-decimal list-inside space-y-3 text-charcoal/80">
              <li>
                <strong>Ridgepole:</strong> Find a sturdy branch or small tree, roughly 9-12 feet long. Prop one end on a stump, rock, or tree fork about 3 feet high. The other end rests on the ground. This is the spine of your shelter. You'll lie underneath it. It should be just wide enough that you can lie under it without rolling out, and just tall enough to sit up slightly.
              </li>
              <li>
                <strong>Ribbing:</strong> Lean sticks against both sides of the ridgepole, angled about 45 degrees, like the ribs of a skeleton. Space them every 6-8 inches. They should be long enough to reach from the ridgepole to the ground. The narrower the interior, the warmer you'll be. your body heat warms the space.
              </li>
              <li>
                <strong>Lattice:</strong> Weave smaller sticks horizontally through the ribs. This creates a framework to hold debris. Without the lattice, your insulation falls through.
              </li>
              <li>
                <strong>Debris. exterior:</strong> Pile leaves, pine needles, ferns, grass, and forest debris over the entire structure. Minimum 2-3 feet thick on all sides. This is your insulation. More is better. When you think you have enough, add more. The debris traps dead air, which is what keeps you warm.
              </li>
              <li>
                <strong>Debris. interior:</strong> Fill the inside with the driest, fluffiest leaves you can find. Pile them deep. you'll compress them when you climb in. This is your mattress and sleeping bag. You need at least 6 inches of compressed debris beneath you and enough to burrow into above.
              </li>
              <li>
                <strong>Door plug:</strong> Build a separate bundle of debris compressed into a mat or stuffed into a bag/jacket. Use it to plug the entrance after you climb in. Heat loss through the opening is the biggest weakness. seal it.
              </li>
            </ol>

            <Callout type="tip">
              <p><strong>Tom Brown's test:</strong> Stand outside the finished shelter and look for daylight through the walls. If you can see any light, add more debris. Light = air = heat loss. A properly built debris hut is a cocoon.</p>
            </Callout>
          </div>

          <div className="bg-white p-6 border border-charcoal/8 mb-6">
            <h3 className="font-serif text-2xl font-semibold text-bark mb-3">Lean-To</h3>
            <p className="text-sm text-charcoal/60 font-medium mb-3">Quick to build. Most effective when combined with a fire reflector.</p>
            <ol className="list-decimal list-inside space-y-2 text-charcoal/80">
              <li>Lash or prop a horizontal ridgepole between two trees, about 4-5 feet high</li>
              <li>Lean long branches against the ridgepole at 45-60 degrees, creating a sloped wall</li>
              <li>Weave smaller branches through for lattice</li>
              <li>Cover with debris, bark, or a tarp. thick layer for insulation</li>
              <li>Build a long fire 4-5 feet in front of the opening, parallel to the lean-to</li>
              <li>Build a fire reflector wall behind the fire. stack green logs or rocks to bounce heat toward you</li>
            </ol>
            <p className="text-sm text-smoke mt-3 italic">The lean-to with fire reflector is an open shelter. less warm than a debris hut alone, but the fire makes up the difference and then some. Good for mild conditions or when you want fire warmth.</p>
          </div>

          <div className="bg-white p-6 border border-charcoal/8 mb-6">
            <h3 className="font-serif text-2xl font-semibold text-bark mb-3">Snow Shelter (Quinzhee)</h3>
            <p className="text-sm text-charcoal/60 font-medium mb-3">For winter conditions. RI gets enough snow for this in most winters.</p>
            <ol className="list-decimal list-inside space-y-2 text-charcoal/80">
              <li>Pile snow into a mound 6-8 feet high, 8-10 feet in diameter. Mix snow types. this causes sintering (bonding)</li>
              <li>Let the mound settle for 1-2 hours minimum. The snow crystals bond together.</li>
              <li>Insert foot-long sticks throughout the mound to a uniform depth (12-18 inches). These are thickness guides.</li>
              <li>Hollow out the interior from one side. When you hit the tips of the sticks, stop. the wall is thick enough.</li>
              <li>Carve a sleeping platform higher than the entrance. warm air rises and collects above the door level.</li>
              <li>Poke a ventilation hole in the roof with a stick. Critical. carbon dioxide buildup can kill you in a sealed snow shelter.</li>
              <li>The entrance should angle downward from the interior. cold air sinks out.</li>
            </ol>
            <Callout type="warning">
              <p><strong>Safety:</strong> Always maintain a ventilation hole. Never use a stove or open flame inside. carbon monoxide risk. Keep a digging tool inside in case the entrance collapses. Mark the outside so nobody walks on it.</p>
            </Callout>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Longer-Term Structures</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">A-Frame with Tarp</h3>
              <p className="text-charcoal/80">If you have a tarp or plastic sheeting, drape it over a ridgepole and stake or weight the edges. Fast, effective, portable. Two tarps give you a ground cloth and roof. A 10x10 tarp is one of the most versatile survival tools you can carry.</p>
            </div>

            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Wattle and Daub</h3>
              <p className="text-charcoal/80">The oldest permanent building technique. Weave flexible branches (wattle) between upright poles to form walls. Plaster both sides with a mix of clay, mud, straw, and water (daub). Let each layer dry before adding the next. Time-intensive but produces solid, weatherproof walls. Houses in Europe built with wattle and daub 500 years ago are still standing.</p>
            </div>

            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-serif text-xl font-semibold text-bark mb-2">Root Cellar / Underground Storage</h3>
              <p className="text-charcoal/80">Not a living shelter but critical for food storage. Dig below the frost line (about 36 inches in RI). Earth maintains a constant temperature of roughly 50-55°F year-round. Frame with wood or stone, cover with soil and debris. Stores potatoes, carrots, squash, and other root vegetables all winter without refrigeration.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Key Principles</h2>

          <div className="bg-parchment p-6 border border-charcoal/8 space-y-4">
            <div>
              <h4 className="font-semibold text-bark">Insulation = Dead Air Space</h4>
              <p className="text-sm text-smoke">It's not the debris that keeps you warm. It's the trapped air between the debris. This is why fluffy, dry material works better than packed material. Same principle as a down jacket.</p>
            </div>
            <div>
              <h4 className="font-semibold text-bark">Get Off the Ground</h4>
              <p className="text-sm text-smoke">The ground steals heat 25 times faster than air. A 6-inch bed of dry leaves, pine boughs, or grass bundles between you and the earth is more important than a roof in moderate conditions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-bark">Small is Warm</h4>
              <p className="text-sm text-smoke">Your body is the heater. The smaller the shelter, the less space you need to heat. A debris hut should fit you and nothing else. Resist the urge to build big.</p>
            </div>
            <div>
              <h4 className="font-semibold text-bark">Waterproof from the Top</h4>
              <p className="text-sm text-smoke">Layer debris like shingles. start at the bottom and overlap upward. Water runs down and off. Bark (especially birch and poplar) makes excellent shingle material. A thick enough debris layer (3+ feet) is waterproof on its own.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-parchment border border-charcoal/8">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Essential Reading</h3>
            <p className="text-smoke mb-2">
              <strong>Tom Brown Jr., <em>Field Guide to Wilderness Survival</em></strong>. The debris hut chapter is the foundation of everything above. Brown's shelter techniques are tested across decades in all conditions.
            </p>
            <p className="text-smoke">
              <strong>Mors Kochanski, <em>Bushcraft</em></strong>. Canadian perspective. Excellent cold-weather shelter techniques, particularly for winter camping and long-term wilderness living.
            </p>
          </div>
        </Prose>
      </ContentSection>
    </div>
  )
}
