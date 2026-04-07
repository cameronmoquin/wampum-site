import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

function CropCard({ name, why, tips }) {
  return (
    <div className="bg-white p-5 border border-charcoal/8">
      <h4 className="font-serif text-lg font-semibold text-bark mb-2">{name}</h4>
      <p className="text-sm text-charcoal/80 mb-2">{why}</p>
      <p className="text-xs text-smoke italic">{tips}</p>
    </div>
  )
}

export default function CommunityGardens() {
  return (
    <div>
      <PageHeader
        title="Community Gardens"
        subtitle="The best vegetables for cooperative growing in Rhode Island"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            Growing food together is the oldest form of community. A garden teaches patience, cooperation, and the reality that some things cannot be rushed or bought. Start here. Everything else follows.
          </p>

          <Callout type="tip">
            <p><strong>Rhode Island specifics:</strong> USDA Zone 6b. Last frost: mid-April to early May. First frost: mid-October. Growing season: approximately 150-180 days. The good news: moderate maritime climate means milder winters than inland New England. Extended season possible with simple cold frames and row cover.</p>
          </Callout>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Tier 1: The Foundation</h2>
          <p className="mb-6">If you grow nothing else, grow these. They produce calories, store without refrigeration, and keep a community fed through winter.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <CropCard
              name="Potatoes"
              why="Calorie-dense, store well, grow in poor soil. A single 100 sq ft bed can produce 400+ lbs. More calories per acre than any grain crop. They're why Ireland had a population boom and why its collapse was catastrophic."
              tips="Plant seed potatoes in April. Hill soil around stems as they grow. Harvest after tops die back. Cure in dark, cool area for 2 weeks. Store at 38-45°F."
            />
            <CropCard
              name="Winter Squash"
              why="Butternut, acorn, Hubbard. Store for 3-6 months unrefrigerated in a cool room. High in calories, vitamins, and fiber. A single butternut vine can produce 10-15 squash."
              tips="Start indoors in April or direct sow after last frost. Give them space. vines sprawl 10+ feet. Harvest when stem is dry and hard. Cure in sun for a week."
            />
            <CropCard
              name="Dry Beans"
              why="Protein. Nitrogen fixers (they improve the soil). Store indefinitely when dried. Kidney, black, navy, pinto. grow what you eat. A 100 sq ft bed yields 10-20 lbs of dried beans."
              tips="Direct sow after last frost. Bush types are easier. Let pods dry on plant until they rattle. Thresh and winnow. Store in sealed jars."
            />
            <CropCard
              name="Kale & Collards"
              why="Cold-hardy powerhouses. Produce into December in RI. often into January with minimal protection. More nutritious than almost any other green. One plant produces for months."
              tips="Start indoors in March or direct sow in April. Harvest outer leaves continuously. Flavor improves after frost. Lacinato (dinosaur) kale is the workhorse variety."
            />
            <CropCard
              name="Garlic"
              why="Plant in October, harvest in July, stores all year. Medicinal, culinary, essential. Every community garden should have a garlic bed. Hardneck varieties produce scapes in June. a bonus crop."
              tips="Plant individual cloves 2 inches deep, 6 inches apart in October. Mulch heavily. Harvest when lower leaves brown. Cure in shade for 3 weeks. Stores 6-12 months."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Tier 2: The Builders</h2>
          <p className="mb-6">These expand the diet, add variety, and fill nutritional gaps. Morale crops. fresh tomatoes in August change everything.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <CropCard
              name="Tomatoes"
              why="The morale crop. Nothing tastes like a fresh garden tomato. Preserve as sauce, can, dry, or freeze. One indeterminate plant can produce 10-20 lbs. San Marzano for sauce, Sungold for eating, Roma for canning."
              tips="Start indoors 6-8 weeks before last frost. Transplant after soil warms. Stake or cage. Prune suckers on indeterminate varieties. Harvest at peak color."
            />
            <CropCard
              name="Sweet Potatoes"
              why="Calorie-dense, different family from potatoes (diversification protects against crop failure). High in vitamin A. Beauregard variety performs well in RI."
              tips="Plant slips (not tubers) after soil reaches 65°F. usually late May in RI. Build raised mounds for drainage. Harvest before first frost. Cure at 80-85°F for a week."
            />
            <CropCard
              name="Onions"
              why="The base of everything. Soup, stir-fry, sauce, salsa. you will use onions every single day. Store well for months. Long-day varieties for RI (Copra, Stuttgarter)."
              tips="Start from sets or transplants in early April. Harvest when tops fall over. Cure in sun for several days, then in shade for 2 weeks. Store in mesh bags, cool and dry."
            />
            <CropCard
              name="Carrots"
              why="Store in the ground through winter under heavy mulch. dig as needed. Or keep in a root cellar in sand. Sweet and calorie-dense. Kids eat them raw. Danvers and Chantenay for heavy RI soils."
              tips="Direct sow in loose, stone-free soil. Tiny seeds. mix with sand for even spacing. Thin to 2 inches. Patient crop. 70-80 days. Succession plant monthly."
            />
            <CropCard
              name="Cabbage"
              why="Sauerkraut. That's the reason. Fermented cabbage stores all winter without electricity, is loaded with probiotics, and has prevented scurvy on ships for centuries. Also: coleslaw, stir-fry, stuffed cabbage, soup."
              tips="Start indoors in March. Transplant in April. Harvest when heads are firm. For sauerkraut: shred, salt (2% by weight), pack in jars, submerge, wait 3-4 weeks."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Tier 3: The Extras</h2>
          <p className="mb-6">These add flavor, variety, and nutritional diversity. Not survival crops. quality of life crops. And quality of life matters.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <CropCard name="Hot Peppers" why="Preservation (hot sauce, dried flakes), spice, medicinal. Cayenne is the workhorse." tips="Start indoors early. Love heat. Dry or ferment into hot sauce." />
            <CropCard name="Lettuce & Greens" why="Fast-growing, succession plant every 2 weeks for continuous harvest. Mesclun mixes give variety." tips="Cool-season crop. Direct sow spring and fall. Bolts in heat. shade cloth helps." />
            <CropCard name="Herbs" why="Basil, parsley, cilantro, dill. Flavor makes simple food sustaining. Fresh herbs transform rice and beans from subsistence into a meal." tips="Most are easy from seed. Basil needs warmth. Parsley is biennial. Dill self-sows." />
            <CropCard name="Peas" why="Early spring crop. first fresh food of the year. Nitrogen fixer. Snow peas, snap peas, shelling peas." tips="Direct sow as soon as soil can be worked (March in RI). Provide trellis. Harvest often." />
            <CropCard name="Corn" why="The Three Sisters (corn, beans, squash). Cultural and nutritional significance. Cornmeal stores well." tips="Direct sow after last frost. Plant in blocks, not rows (wind-pollinated). Needs nitrogen." />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Perennials: Plant Once, Harvest for Years</h2>
          <p className="mb-4">Every community garden should have a perennial section. These are investments that pay off for decades.</p>

          <div className="bg-white p-6 border border-charcoal/8">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div><strong className="text-bark">Asparagus</strong> <span className="text-smoke">3 years to first harvest, then 20+ years of spring spears</span></div>
              <div><strong className="text-bark">Rhubarb</strong> <span className="text-smoke">Indestructible. Tart stalks for sauce, pie, compote. Leaves are toxic.</span></div>
              <div><strong className="text-bark">Blueberries</strong> <span className="text-smoke">RI's acidic soil is perfect. 5+ lbs per bush. Fresh, frozen, dried.</span></div>
              <div><strong className="text-bark">Raspberries</strong> <span className="text-smoke">Spread aggressively. Give them a dedicated bed. Fresh eating and jam.</span></div>
              <div><strong className="text-bark">Blackberries</strong> <span className="text-smoke">Thornless varieties available. Prolific. Jam, cobbler, eaten by the handful.</span></div>
              <div><strong className="text-bark">Apple Trees</strong> <span className="text-smoke">Semi-dwarf for manageable size. Cider, sauce, storage apples. 5-7 years to production.</span></div>
              <div><strong className="text-bark">Pear Trees</strong> <span className="text-smoke">Fewer pest problems than apples. Bartlett, Seckel, Asian pears.</span></div>
              <div><strong className="text-bark">Rosemary, Thyme, Oregano</strong> <span className="text-smoke">Hardy perennial herbs. Rosemary needs winter protection in RI.</span></div>
              <div><strong className="text-bark">Chives</strong> <span className="text-smoke">Earliest spring allium. Flowers are edible. Divide every few years.</span></div>
              <div><strong className="text-bark">Jerusalem Artichoke</strong> <span className="text-smoke">Perennial tuber. Unstoppable once established. See Wild Foods page.</span></div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-12">The Three Sisters</h2>
          <p className="mb-4">
            The Narragansett and other Northeast nations grew corn, beans, and squash together. the Three Sisters. This is not a romantic concept. It is agricultural engineering.
          </p>
          <div className="bg-charcoal/3 p-6 border border-charcoal/8 mb-8">
            <ul className="space-y-3 text-charcoal/80">
              <li><strong className="text-bark">Corn</strong> provides the structure. a living pole for the beans to climb.</li>
              <li><strong className="text-bark">Beans</strong> fix nitrogen in the soil, feeding the corn and squash. They climb the corn, reaching sunlight without a trellis.</li>
              <li><strong className="text-bark">Squash</strong> spreads across the ground, its broad leaves shading out weeds and retaining soil moisture. The prickly vines deter animals.</li>
            </ul>
            <p className="text-sm text-smoke mt-4">Together, they produce more calories per acre than any one grown alone. The nutritional profile is complete: carbohydrates (corn), protein (beans), vitamins and fat (squash). This system was feeding millions of people on this continent for thousands of years before European contact.</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Cooperative Growing Principles</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-semibold text-bark mb-1">Divide and Rotate</h3>
              <p className="text-sm text-smoke">Split the garden into sections. Rotate responsibility seasonally. Nobody gets stuck with the worst job forever. Rotate crops too. don't plant the same family in the same bed two years running.</p>
            </div>
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-semibold text-bark mb-1">Shared Tool Shed</h3>
              <p className="text-sm text-smoke">One set of good tools maintained together beats twenty sets of cheap tools rusting in garages. Clean tools after use. Sharpen blades monthly. Oil wooden handles. This is the practice of caring for shared things.</p>
            </div>
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-semibold text-bark mb-1">Save Seeds</h3>
              <p className="text-sm text-smoke">Save seeds from your best producers each year. Let a few of each crop go to seed. Dry seeds thoroughly, store in labeled envelopes in a cool, dark place. Within a few years, you have varieties adapted to your specific soil and climate. This is how every food crop on earth was developed.</p>
            </div>
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-semibold text-bark mb-1">Compost Everything</h3>
              <p className="text-sm text-smoke">Every kitchen in the community contributes scraps. Every garden bed gets compost. The cycle is: soil grows food, food feeds people, scraps feed soil. Nothing leaves the system. A three-bin hot compost setup serves a dozen households.</p>
            </div>
            <div className="border-l-4 border-charcoal/20 pl-5">
              <h3 className="font-semibold text-bark mb-1">Water Wisely</h3>
              <p className="text-sm text-smoke">Rain barrels on every building with a downspout. Drip irrigation saves 50-70% over sprinklers. Mulch everything. 3-4 inches of straw or leaves reduces watering needs dramatically. Water in the morning. Water deep and less often rather than shallow and daily.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-12">Rhode Island Zone 6b Planting Calendar</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-3 py-2 text-left font-semibold">Month</th>
                  <th className="px-3 py-2 text-left font-semibold">Indoor</th>
                  <th className="px-3 py-2 text-left font-semibold">Outdoor</th>
                  <th className="px-3 py-2 text-left font-semibold">Harvest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/8">
                <tr className="bg-white"><td className="px-3 py-2 font-medium">March</td><td className="px-3 py-2">Tomatoes, peppers, cabbage, kale</td><td className="px-3 py-2">Peas (late March if soil workable)</td><td className="px-3 py-2">Overwintered kale, stored roots</td></tr>
                <tr className="bg-charcoal/3"><td className="px-3 py-2 font-medium">April</td><td className="px-3 py-2">Squash, cucumbers</td><td className="px-3 py-2">Potatoes, onion sets, lettuce, carrots, beets</td><td className="px-3 py-2">Asparagus, rhubarb, spring greens</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">May</td><td className="px-3 py-2"></td><td className="px-3 py-2">Beans, corn, squash, tomato transplants (after last frost)</td><td className="px-3 py-2">Peas, lettuce, radishes</td></tr>
                <tr className="bg-charcoal/3"><td className="px-3 py-2 font-medium">June</td><td className="px-3 py-2"></td><td className="px-3 py-2">Sweet potatoes, succession lettuce, herbs</td><td className="px-3 py-2">Garlic scapes, strawberries, peas</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">July</td><td className="px-3 py-2"></td><td className="px-3 py-2">Fall brassicas (kale, broccoli), fall carrots</td><td className="px-3 py-2">Beans, cucumbers, zucchini, blueberries, early tomatoes</td></tr>
                <tr className="bg-charcoal/3"><td className="px-3 py-2 font-medium">Aug</td><td className="px-3 py-2"></td><td className="px-3 py-2">Fall lettuce, spinach, radishes</td><td className="px-3 py-2">Tomatoes, peppers, corn, beans, berries</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Sept</td><td className="px-3 py-2"></td><td className="px-3 py-2">Overwintering garlic (late Sept)</td><td className="px-3 py-2">Squash, potatoes, apples, pears, sweet potatoes</td></tr>
                <tr className="bg-charcoal/3"><td className="px-3 py-2 font-medium">Oct</td><td className="px-3 py-2"></td><td className="px-3 py-2">Garlic (main planting), cover crops</td><td className="px-3 py-2">Late greens, root vegetables, cabbage, pumpkins</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Nov-Feb</td><td className="px-3 py-2">Plan, order seeds, repair tools</td><td className="px-3 py-2">Mulch beds, protect perennials</td><td className="px-3 py-2">Cold-frame greens, stored crops, sprouts</td></tr>
              </tbody>
            </table>
          </div>
        </Prose>
      </ContentSection>
    </div>
  )
}
