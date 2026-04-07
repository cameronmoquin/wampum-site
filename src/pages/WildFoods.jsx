import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout, Recipe } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

export default function WildFoods() {
  return (
    <div>
      <PageHeader
        title="Wild Foods & Foraging"
        subtitle="Acorn flour, wild edibles, and the pantry that grows itself"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            The Northeast woodlands are not wilderness. They are a pantry. For ten thousand years, people ate well here without a single grocery store. The food is still there. You just have to learn to see it.
          </p>

          <Callout type="warning">
            <p><strong>Never eat anything you cannot identify with 100% certainty.</strong> Use at least two reliable field guides. Learn from experienced foragers in person. Some edible plants have toxic look-alikes. When in doubt, don't eat it. No meal is worth a trip to the ER — or worse.</p>
          </Callout>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Acorn Flour</h2>
          <p>
            Acorns were a staple food across the Americas, Europe, and Asia for thousands of years. The Narragansett ground them with a mortar called a <em>wetuomp</em>. One mature oak tree can produce 70,000 acorns in a good year. That's hundreds of pounds of potential flour growing in every park, every yard, every forest in Rhode Island.
          </p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Harvesting</h3>
          <p>
            Collect in fall (September through November in RI). <strong>White oak acorns</strong> (rounded caps, less tannin) are preferred over red oak (pointed caps, more bitter, more leaching required). Look for worm-free nuts — check the cap end for tiny holes. Shake them; if they rattle, the meat has dried out and may be bad. Gather more than you think you need; many will be wormy or rotten inside.
          </p>

          <h3 className="text-2xl font-serif font-semibold text-bark mt-8 mb-3">Processing</h3>
          <ol className="list-decimal list-inside space-y-3 ml-4 text-charcoal/80">
            <li><strong>Shell:</strong> Crack with a rock or nutcracker. The shell comes off in pieces. Remove the papery inner skin (testa) as well — it's bitter.</li>
            <li><strong>Crush or grind:</strong> Chop the nut meat into small pieces, then grind in a food processor, blender, or with a mortar and pestle. The finer the grind, the better the flour.</li>
            <li>
              <strong>Leach the tannins:</strong> Raw acorns are bitter and astringent. You must leach the tannins out. Two methods:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>Cold water method (preferred):</strong> Place ground acorn meal in a jar of cold water. Change the water 2-3 times per day for 3-7 days until the water runs clear and the flour tastes mild — nutty, not bitter. This preserves the starch and makes better flour.</li>
                <li><strong>Hot water method (faster):</strong> Boil the ground meal in several changes of water. Drain when the water turns brown, add fresh water, boil again. Repeat 4-8 times until the bitterness is gone. Faster but breaks down the starch.</li>
              </ul>
            </li>
            <li><strong>Dry:</strong> Spread the leached meal thin on a baking sheet. Air dry in the sun, or dry in an oven at the lowest setting (150-170°F) until completely dry. Stir occasionally.</li>
            <li><strong>Final grind:</strong> Once dry, grind again to a fine flour consistency. Store in an airtight container. Keeps for months.</li>
          </ol>

          <Recipe
            title="Acorn Flour Pancakes"
            ingredients={[
              "1 cup acorn flour (leached and dried)",
              "1/2 cup wheat flour (or all acorn for grain-free)",
              "1 egg",
              "1 cup water or milk",
              "2 tbsp rendered fat or oil",
              "1 tsp baking powder if available",
              "Pinch of salt",
              "Maple syrup or honey for serving"
            ]}
            steps={[
              "Mix dry ingredients in a bowl",
              "Beat egg and combine with water and melted fat",
              "Combine wet and dry — don't overmix. Batter will be denser than wheat pancakes",
              "Heat a flat stone, cast iron, or pan over coals until water drops sizzle",
              "Pour small rounds. These cook slower than wheat — be patient",
              "Flip when edges firm and bubbles hold. Cook until golden",
              "Serve with maple syrup, honey, or berry preserves"
            ]}
            note="Acorn pancakes taste nutty and earthy. They were a staple food for thousands of years across the Americas. The Narragansett ground acorns with a mortar called a wetuomp."
          />

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Wild Edibles of Rhode Island</h2>
          <p className="mb-6">These are common, relatively easy to identify, and abundant in southern New England. This is a starting point, not a complete guide.</p>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Ramps (Wild Leeks)</h3>
              <p className="text-xs text-smoke mb-2">Allium tricoccum — Spring (April-May)</p>
              <p className="text-sm text-charcoal/80">Found in moist deciduous forests. Broad, smooth leaves that smell unmistakably like garlic-onion. Both leaves and bulbs are edible. Saut&eacute; the leaves, pickle the bulbs. Harvest sparingly — take one leaf per plant, skip small patches. Ramps reproduce slowly.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Dandelion</h3>
              <p className="text-xs text-smoke mb-2">Taraxacum officinale — Spring through Fall</p>
              <p className="text-sm text-charcoal/80">The entire plant is edible. Young greens in salad (older leaves are bitter — blanch them). Roots roasted as coffee substitute. Flowers for fritters or wine. It grows in every lawn in America. Stop killing it and start eating it.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Cattail</h3>
              <p className="text-xs text-smoke mb-2">Typha latifolia — Year-round</p>
              <p className="text-sm text-charcoal/80">Called the "supermarket of the swamp." Spring shoots eaten like asparagus. Immature flower heads boiled like corn. Pollen collected as flour supplement. Roots (rhizomes) yield starch year-round — peel, crush in water, let starch settle out. Also: the fluff is excellent fire tinder and insulation.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Chickweed</h3>
              <p className="text-xs text-smoke mb-2">Stellaria media — Spring and Fall</p>
              <p className="text-sm text-charcoal/80">A mild, pleasant green that grows abundantly in disturbed soil, gardens, and edges. Tiny white star-shaped flowers. Eat raw in salads or add to any cooked dish. One of the easiest and safest wild greens to start with.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Lamb's Quarters</h3>
              <p className="text-xs text-smoke mb-2">Chenopodium album — Summer</p>
              <p className="text-sm text-charcoal/80">One of the most nutritious wild greens on earth — more iron and protein than spinach. Diamond-shaped leaves with a white powdery coating underneath. Grows in gardens as a "weed." Cook like spinach. Your ancestors ate this plant every summer for thousands of years.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Autumn Olive Berries</h3>
              <p className="text-xs text-smoke mb-2">Elaeagnus umbellata — Fall (September-November)</p>
              <p className="text-sm text-charcoal/80">An invasive shrub that produces enormous quantities of small, tart, red berries speckled with silver. Higher in lycopene than tomatoes. Eat fresh, make fruit leather, jam, or sauce. The plant is everywhere in RI and nobody wants it — eat it with impunity.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Elderberries</h3>
              <p className="text-xs text-smoke mb-2">Sambucus nigra — Late Summer</p>
              <p className="text-sm text-charcoal/80">Dark purple berry clusters on large shrubs near water and field edges. <strong>Must be cooked</strong> — raw elderberries cause nausea. Cook into syrup (immune support), jam, wine, or pie. Flowers can be made into fritters or cordial. A critical medicinal and food plant.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Black Walnuts</h3>
              <p className="text-xs text-smoke mb-2">Juglans nigra — Fall</p>
              <p className="text-sm text-charcoal/80">Rich, intense flavor. Getting to the nut meat is tedious — thick green husk that stains everything black, then a rock-hard shell. Cure in husks for 2 weeks, remove husks, dry shells for another 2 weeks, crack with a hammer or vice. Worth it. The flavor is extraordinary.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Rose Hips</h3>
              <p className="text-xs text-smoke mb-2">Rosa spp. — Late Fall after first frost</p>
              <p className="text-sm text-charcoal/80">The fruit of wild roses — small red-orange pods left after petals drop. Extremely high in vitamin C (more than oranges by weight). Make into tea, jam, or syrup. Harvest after the first frost when they soften and sweeten. Split open, scrape out seeds and hairs, use the flesh.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Jerusalem Artichoke (Sunchoke)</h3>
              <p className="text-xs text-smoke mb-2">Helianthus tuberosus — Fall through Spring</p>
              <p className="text-sm text-charcoal/80">A perennial sunflower relative with edible tubers. Plant once, harvest forever — they spread aggressively. Dig tubers after first frost. Eat raw (nutty, crunchy), roast, or mash like potatoes. Store in ground through winter and dig as needed. One of the most reliable perennial food crops for the Northeast.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-1">Wild Garlic & Onion</h3>
              <p className="text-xs text-smoke mb-2">Allium vineale / Allium canadense — Spring through Fall</p>
              <p className="text-sm text-charcoal/80">Found along paths, field edges, and open woods. The key identifier: it must smell like onion or garlic when crushed. If it doesn't smell like allium, don't eat it — some toxic look-alikes exist. Use leaves and bulbs in any dish that calls for onion or garlic.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-4 mt-12">Preservation</h2>
          <p className="mb-4">The foraging season is abundant but short. Preservation extends the harvest through winter.</p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-2">Drying</h3>
              <p className="text-sm text-smoke">Slice thin, spread on racks in sun or near a fire. Air must circulate. Herbs, fruits, mushrooms, and meat all dry well. Store in sealed containers. Rehydrate in water or add directly to soups.</p>
            </div>
            <div className="bg-white p-5 border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-2">Smoking</h3>
              <p className="text-sm text-smoke">Build a small, smoky fire (green wood, especially hickory or apple). Hang strips of meat or fish above the smoke. Cold smoking (below 90°F) preserves without cooking. Hot smoking cooks and preserves simultaneously.</p>
            </div>
            <div className="bg-white p-5 border border-charcoal/8">
              <h3 className="font-semibold text-bark mb-2">Fermentation</h3>
              <p className="text-sm text-smoke">Salt + vegetables + time = preservation without electricity. Sauerkraut, kimchi, pickles. The bacteria do the work. 2-3% salt by weight, submerge in brine, wait 1-4 weeks. See Sandor Katz, <em>The Art of Fermentation</em>.</p>
            </div>
          </div>
        </Prose>
      </ContentSection>
    </div>
  )
}
