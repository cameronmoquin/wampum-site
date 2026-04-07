import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection, { Prose, Callout } from '../components/ContentSection'
import { IconArrowLeft } from '../components/Icons'

function PlantCard({ name, latin, uses, description }) {
  return (
    <div className="bg-white p-5 border border-charcoal/8">
      <h4 className="font-serif text-lg font-semibold text-bark">{name}</h4>
      <p className="text-xs text-smoke italic mb-2">{latin}</p>
      <p className="text-xs text-charcoal/60 font-medium mb-2">{uses}</p>
      <p className="text-sm text-charcoal/80">{description}</p>
    </div>
  )
}

export default function MedicinalPlants() {
  return (
    <div>
      <PageHeader
        title="Medicinal Plants"
        subtitle="Plant medicine of New England"
      />

      <ContentSection>
        <Link to="/field-guide" className="text-moss hover:text-moss-dark text-sm font-medium mb-8 inline-block"><IconArrowLeft className="w-3.5 h-3.5 inline mr-1" />Back to Field Guide</Link>

        <Prose>
          <p className="text-xl text-charcoal/80 font-serif italic mb-8">
            Humans used plant medicine for the vast majority of our existence. This is not alternative medicine. For most of human history, this was the only medicine. Treat it with the same respect you would any pharmacology — because that's what it is.
          </p>

          <Callout type="warning">
            <p><strong>Disclaimer:</strong> This is educational information only, not medical advice. Consult a healthcare provider before using any herbal remedy, especially if pregnant, nursing, or taking medications. Some plants are toxic in certain preparations or dosages. Some interact with pharmaceuticals. Learn from experienced herbalists. Start with small amounts. Know your allergies.</p>
          </Callout>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">First Aid & Wound Care</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Plantain"
              latin="Plantago major"
              uses="Stings, bites, minor cuts, splinters"
              description="The 'band-aid plant.' Grows in every lawn, sidewalk crack, and trail edge in Rhode Island. Broad, ribbed leaves with parallel veins. Crush a leaf and chew it briefly (or mash between rocks), then apply the poultice directly to stings, insect bites, minor cuts, or splinters. It draws and soothes. This is your first plant to learn."
            />
            <PlantCard
              name="Yarrow"
              latin="Achillea millefolium"
              uses="Stops bleeding, wound antiseptic"
              description="Named for Achilles, who supposedly used it on the battlefield. Feathery, fern-like leaves. White flower clusters. Crush fresh leaves and press firmly onto bleeding wounds — yarrow is a powerful styptic. Also used as a tea for fever reduction. Grows in fields, roadsides, and disturbed ground throughout New England."
            />
            <PlantCard
              name="Jewelweed"
              latin="Impatiens capensis"
              uses="Poison ivy remedy, skin irritation"
              description="Orange-spotted trumpet flowers, found near streams and in moist shady areas — often growing right next to poison ivy (nature's hint). Crush the succulent stems and apply the juice directly to poison ivy rash, insect bites, or nettle stings. Most effective when applied immediately after exposure."
            />
            <PlantCard
              name="Comfrey"
              latin="Symphytum officinale"
              uses="Sprains, bruises, bone healing"
              description="Large, hairy leaves. Called 'knitbone' historically. Apply as a poultice to sprains, bruises, and minor fractures to support healing. External use only — contains pyrrolizidine alkaloids that can damage the liver if taken internally. Grows easily in gardens."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Digestive & Stomach</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Peppermint / Wild Mint"
              latin="Mentha spp."
              uses="Nausea, indigestion, cramping"
              description="Grows along streams and moist areas. Square stems, opposite leaves, unmistakable smell. Brew fresh or dried leaves as tea for nausea, upset stomach, and digestive cramping. Also: a few crushed leaves in water makes a serviceable field mouthwash."
            />
            <PlantCard
              name="Chamomile"
              latin="Matricaria chamomilla"
              uses="Stomach calming, sleep aid, anxiety"
              description="Small daisy-like flowers with a sweet apple scent. Brew as tea — gentle enough for children. Calms the stomach, eases anxiety, promotes sleep. One of the safest and most broadly useful medicinal plants. Grows easily from seed and self-sows."
            />
            <PlantCard
              name="Ginger Root"
              latin="Zingiber officinale"
              uses="Nausea, warming, circulation"
              description="Not native to New England but grows indoors in pots and stores well. Slice fresh root and steep in hot water for powerful anti-nausea tea. Warming — helps circulation in cold weather. Chew a small piece for quick relief from motion sickness or stomach upset."
            />
            <PlantCard
              name="Slippery Elm"
              latin="Ulmus rubra"
              uses="Sore throat, digestive lining"
              description="Inner bark produces a thick mucilage when mixed with water. Soothes sore throats, coats and calms the digestive tract. Strip inner bark from small branches (not the main trunk — don't kill the tree). Dry and powder, mix with warm water to form a gel."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Respiratory</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Mullein"
              latin="Verbascum thapsus"
              uses="Coughs, lung congestion, respiratory support"
              description="Tall stalk with fuzzy gray-green leaves, impossible to miss once you know it. Grows on roadsides, fields, disturbed ground. Brew dried leaves as tea for coughs, bronchitis, and lung congestion. The hairs can irritate the throat — strain tea through a cloth. Mullein was smoked by Native Americans as a lung remedy."
            />
            <PlantCard
              name="Elderberry"
              latin="Sambucus nigra"
              uses="Cold/flu prevention, immune support"
              description="Cook berries into syrup (berries + water + honey). Take a tablespoon daily during cold/flu season for immune support, or every 2-3 hours at first sign of illness. Research suggests antiviral properties. MUST BE COOKED — raw berries and all green parts are toxic."
            />
            <PlantCard
              name="Pine Needle Tea"
              latin="Pinus strobus (Eastern White Pine)"
              uses="Vitamin C, respiratory support"
              description="Fresh green needles of Eastern White Pine steeped in hot water for 10-15 minutes. Surprisingly pleasant — slightly citrusy. High in vitamin C and vitamin A. Used historically to prevent scurvy. Expectorant properties help clear congestion. Avoid during pregnancy. Do NOT use yew (Taxus) needles — they're toxic."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Pain & Inflammation</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Willow Bark"
              latin="Salix spp."
              uses="Headache, pain, fever, inflammation"
              description="Contains salicin — the compound aspirin was derived from. Harvest inner bark from young branches of willow trees (found near every waterway in RI). Steep in hot water for tea. Effective for headaches, muscle pain, fever, and general inflammation. Same contraindications as aspirin — avoid if allergic to aspirin or on blood thinners."
            />
            <PlantCard
              name="White Pine Bark"
              latin="Pinus strobus"
              uses="Anti-inflammatory, antioxidant"
              description="Inner bark of Eastern White Pine can be brewed as tea for anti-inflammatory and antioxidant benefits. Also: the inner bark (cambium) is edible as an emergency food — scrape it, dry it, pound into flour. The Abenaki and other Northeast nations used it regularly."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Immune Support</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Echinacea"
              latin="Echinacea purpurea"
              uses="Immune stimulant, cold prevention"
              description="Purple coneflower. Take at the very first sign of illness — it stimulates immune response. Most effective as a tincture (root in alcohol for 6 weeks). Less effective once you're already sick. Grows easily in gardens. Native to North America."
            />
            <PlantCard
              name="Garlic"
              latin="Allium sativum"
              uses="Antimicrobial, immune support, blood pressure"
              description="The most powerful common medicinal food. Raw garlic is antimicrobial, antiviral, and antifungal. Crush a clove, let it sit 10 minutes (activates allicin), then swallow with water or food. For ear infections: warm garlic-infused olive oil dropped in the ear. Grow it in every garden."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6">Nervine / Calming</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <PlantCard
              name="Lemon Balm"
              latin="Melissa officinalis"
              uses="Calming, antiviral, digestive"
              description="Mint family, lemon-scented leaves. Gentle calming tea — safe for children and adults. Also has antiviral properties, particularly against herpes simplex. Grows aggressively in gardens (contain it or it will take over). Fresh leaf tea before bed for sleep support."
            />
            <PlantCard
              name="Valerian Root"
              latin="Valeriana officinalis"
              uses="Sleep aid, anxiety, muscle relaxation"
              description="Strong sleep aid and muscle relaxant. Dig roots in fall of second year, dry and make tea or tincture. The smell is... distinctive (cats love it). Most effective taken 30-60 minutes before bed. Do not combine with prescription sleep medications or alcohol."
            />
            <PlantCard
              name="Passionflower"
              latin="Passiflora incarnata"
              uses="Anxiety, insomnia, nervous tension"
              description="A climbing vine with extraordinary flowers. Tea from dried aerial parts (leaves, stems, flowers) is a gentle but effective anxiolytic. Calms racing thoughts without heavy sedation. Can be grown in southern New England with winter protection."
            />
          </div>

          <h2 className="text-3xl font-serif font-bold text-bark mb-6 mt-10">Preparation Methods</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-2">Tea / Infusion</h3>
              <p className="text-sm text-charcoal/80">Pour boiling water over plant material (1-2 tablespoons per cup). Steep 10-15 minutes for leaves and flowers, 20-30 minutes for roots and bark. Strain. Drink warm. This is the simplest and most common preparation method.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-2">Poultice</h3>
              <p className="text-sm text-charcoal/80">Crush, chew, or mash fresh plant material and apply directly to the skin. Cover with a cloth or large leaf to hold in place. Replace every few hours. Used for wounds, stings, sprains, and skin irritation. The oldest form of topical medicine.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-2">Tincture</h3>
              <p className="text-sm text-charcoal/80">Pack a jar with chopped plant material. Cover with 80-proof (40%) vodka or similar alcohol. Seal and store in a dark place for 4-6 weeks, shaking daily. Strain through cheesecloth. The alcohol extracts and preserves the active compounds. Take by the dropperful. Tinctures keep for years.</p>
            </div>

            <div className="bg-white p-6 border border-charcoal/8">
              <h3 className="font-serif text-lg font-semibold text-bark mb-2">Salve</h3>
              <p className="text-sm text-charcoal/80">Infuse dried plant material in oil (olive oil works) over low heat for several hours or in a sunny window for 4-6 weeks. Strain. Melt beeswax into the infused oil (roughly 1 oz wax per cup of oil). Pour into tins. Use for skin conditions, minor wounds, and chapped skin. A plantain-calendula salve is a medicine cabinet essential.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-parchment border border-charcoal/8">
            <h3 className="font-serif text-xl font-semibold text-bark mb-2">Essential Reading</h3>
            <p className="text-smoke mb-2">
              <strong>Tom Brown Jr., <em>Field Guide to Wild Edible and Medicinal Plants</em></strong> — Covers identification and use of Northeast species with illustrations and field notes.
            </p>
            <p className="text-smoke">
              <strong>Rosemary Gladstar, <em>Medicinal Herbs: A Beginner's Guide</em></strong> — Clear, practical introduction to growing and using medicinal herbs. Start here if the field guides feel overwhelming.
            </p>
          </div>
        </Prose>
      </ContentSection>
    </div>
  )
}
