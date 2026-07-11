// Destination data, day-plan generators and matching helpers.
// Ported from the TripCraft.ai Claude Design prototype (TripCraft.dc.html).

const mkItem = (id, time, kind, title, desc, place, ph, alts) => ({
  id, time, kind, title, desc, place, ph, altIdx: -1, alts: alts || [],
});

export function sikkimDays() {
  const mk = mkItem;
  return [
    { day: 1, date: 'Mon, Oct 12', title: 'Arrival & Gangtok evening', summary: 'Land, settle in, ease into mountain air along MG Marg.',
      options: [
        { label: 'Classic', items: [
          mk('d1a', '11:00 AM', 'Transfer', 'Bagdogra → Gangtok drive', 'Scenic 4-hr drive along the Teesta river. Stop for photos at Coronation Bridge.', 'Teesta River', 'arrival_drive', [{ title: 'Helicopter to Gangtok', desc: '20-min chopper hop with aerial Himalayan views (weather permitting).', place: 'Bagdogra Helipad' }]),
          mk('d1b', '04:30 PM', 'Walk', 'MG Marg promenade', 'Pedestrian boulevard — cafes, handicrafts and people-watching. No vehicles, no litter.', 'MG Marg, Gangtok', 'mg_marg', [{ title: 'Ridge Park & Flower Show', desc: 'Manicured gardens and a seasonal flower exhibition a short walk uphill.', place: 'Ridge Park' }]),
          mk('d1c', '07:00 PM', 'Food', 'Dinner at Taste of Tibet', 'Warm momos and thukpa to beat the chill. Local favorite for 20+ years.', 'Taste of Tibet, MG Marg', 'dinner', []),
        ]},
        { label: 'Relaxed', items: [
          mk('d1d', '12:30 PM', 'Transfer', 'Leisurely drive + late lunch', 'Break the journey with a riverside lunch; arrive rested.', 'Teesta River', 'arrival_drive', []),
          mk('d1e', '05:00 PM', 'Cafe', 'Sunset coffee at Ridge', 'Slow evening with mountain views and a bakery stop.', 'Ridge Park', 'cafe', []),
        ]},
      ]},
    { day: 2, date: 'Tue, Oct 13', title: 'Tsomgo Lake & Baba Mandir', summary: 'High-altitude glacial lake day — permits sorted for you.',
      options: [
        { label: 'Classic', items: [
          mk('d2a', '06:30 AM', 'Nature', 'Tsomgo Lake sunrise', 'Sacred glacial lake at 12,300 ft, often mirror-still at dawn. Yak rides available.', 'Tsomgo Lake', 'tsomgo', [{ title: 'Nathula Pass add-on', desc: 'Continue to the Indo-China border pass (extra permit, Wed–Sun).', place: 'Nathula Pass' }]),
          mk('d2b', '10:30 AM', 'Culture', 'Baba Harbhajan Mandir', 'Revered shrine amid alpine scenery; hot Maggi stalls nearby.', 'Baba Mandir', 'baba_mandir', []),
          mk('d2c', '02:00 PM', 'Food', 'Yak-cheese lunch stop', 'Roadside dhaba with steaming thukpa and butter tea.', 'Sherathang', 'lunch', []),
          mk('d2d', '06:00 PM', 'Leisure', 'Evening at leisure', 'Rest up after altitude; light stroll on MG Marg.', 'MG Marg', 'leisure', []),
        ]},
        { label: 'Offbeat', items: [
          mk('d2e', '07:00 AM', 'Nature', 'Kyongnosla Alpine Sanctuary', 'Quieter trail through rhododendron and rare orchids.', 'Kyongnosla', 'alpine', []),
          mk('d2f', '01:00 PM', 'Culture', 'Hanuman Tok viewpoint', 'Hilltop temple with sweeping Kanchenjunga views.', 'Hanuman Tok', 'viewpoint', []),
        ]},
      ]},
    { day: 3, date: 'Wed, Oct 14', title: 'Monasteries & Gangtok culture', summary: 'A slower, soulful day among prayer flags and craft.',
      options: [
        { label: 'Classic', items: [
          mk('d3a', '09:00 AM', 'Culture', 'Rumtek Monastery', 'Largest monastery in Sikkim, seat of the Karmapa. Golden stupa and murals.', 'Rumtek Monastery', 'rumtek', [{ title: 'Enchey Monastery', desc: '200-year-old monastery closer to town, wrapped in pine.', place: 'Enchey Monastery' }]),
          mk('d3b', '12:30 PM', 'Cable', 'Gangtok ropeway ride', 'Aerial tram over the town — best panorama in the city.', 'Deorali Ropeway', 'ropeway', []),
          mk('d3c', '03:00 PM', 'Museum', 'Namgyal Institute of Tibetology', 'Rare Buddhist artefacts, thangkas and manuscripts.', 'Namgyal Institute', 'museum', []),
          mk('d3d', '06:30 PM', 'Shopping', 'Lal Bazaar & souvenirs', 'Local produce, prayer flags and handwoven wool.', 'Lal Bazaar', 'bazaar', []),
        ]},
        { label: 'Nature', items: [
          mk('d3e', '08:30 AM', 'Nature', 'Tashi Viewpoint sunrise', 'Kanchenjunga glowing gold at dawn — bring a flask.', 'Tashi Viewpoint', 'tashi', []),
          mk('d3f', '11:00 AM', 'Culture', 'Do Drul Chorten', 'Whitewashed stupa ringed by 108 prayer wheels.', 'Do Drul Chorten', 'chorten', []),
        ]},
      ]},
    { day: 4, date: 'Thu, Oct 15', title: 'Namchi day trip & departure', summary: 'Grand statues, tea gardens, then homeward.',
      options: [
        { label: 'Classic', items: [
          mk('d4a', '08:00 AM', 'Culture', 'Char Dham, Namchi', "Pilgrimage complex replicating India’s four holy shrines + 87-ft Shiva.", 'Char Dham Namchi', 'chardham', [{ title: 'Samdruptse Hill', desc: '135-ft Guru Padmasambhava statue on a lush hilltop.', place: 'Samdruptse' }]),
          mk('d4b', '12:00 PM', 'Nature', 'Temi Tea Garden', "Sikkim’s only tea estate — rolling green slopes, fresh brew.", 'Temi Tea Garden', 'tea', []),
          mk('d4c', '04:00 PM', 'Transfer', 'Drive to Bagdogra', 'Head down for your evening flight; pack snacks.', 'Bagdogra', 'departure', []),
        ]},
        { label: 'Easy', items: [
          mk('d4d', '09:30 AM', 'Leisure', 'Slow morning & cafe', 'Pack unhurried, last coffee in town.', 'MG Marg', 'cafe', []),
          mk('d4e', '01:00 PM', 'Transfer', 'Midday transfer to airport', 'Comfortable timing for an evening flight.', 'Bagdogra', 'departure', []),
        ]},
      ]},
  ];
}

export function dateLabel(startStr, offsetDays) {
  try {
    const d = new Date(startStr);
    if (isNaN(d)) throw new Error('invalid');
    d.setDate(d.getDate() + offsetDays);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  } catch (e) {
    return 'Day ' + (offsetDays + 1);
  }
}

export function formatRange(a, b) {
  try {
    const x = new Date(a), y = new Date(b);
    if (isNaN(x) || isNaN(y)) throw new Error('invalid');
    return x.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' – ' + y.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return 'your travel dates';
  }
}

export function matchDest(str) {
  const s = (str || '').toLowerCase();
  const map = [
    ['sikkim', 'sikkim'], ['gangtok', 'sikkim'],
    ['goa', 'goa'],
    ['kerala', 'kerala'], ['kochi', 'kerala'], ['munnar', 'kerala'], ['alleppey', 'kerala'],
    ['rajasthan', 'rajasthan'], ['jaipur', 'rajasthan'], ['udaipur', 'rajasthan'], ['jodhpur', 'rajasthan'],
    ['bali', 'bali'], ['ubud', 'bali'],
    ['dubai', 'dubai'],
  ];
  for (const m of map) { if (s.includes(m[0])) return m[1]; }
  return '__generic';
}

export function genDays(prefix, plan, startStr) {
  const mk = (id, a) => ({
    id, time: a[0], kind: a[1], title: a[2], place: a[3], desc: a[4],
    ph: a[5] || (a[1] || 'stop').toLowerCase(), altIdx: -1, alts: a[6] || [],
  });
  return (plan || []).map((d, i) => ({
    day: i + 1,
    date: dateLabel(startStr, i),
    title: d[0],
    summary: d[1],
    options: [
      { label: d[2] || 'Classic', items: (d[3] || []).map((a, j) => mk(prefix + '-' + i + 'a' + j, a)) },
      { label: d[4] || 'Alternative', items: (d[5] || []).map((a, j) => mk(prefix + '-' + i + 'b' + j, a)) },
    ],
  }));
}

export function suggestList() {
  return [
    { city: 'Sikkim', region: 'Himalayan mountains, India', tag: 'Mountains', value: 'Sikkim, India' },
    { city: 'Goa', region: 'Beaches, India', tag: 'Beach', value: 'Goa, India' },
    { city: 'Kerala', region: 'Backwaters, India', tag: 'Backwaters', value: 'Kerala, India' },
    { city: 'Rajasthan', region: 'Palaces & forts, India', tag: 'Heritage', value: 'Rajasthan, India' },
    { city: 'Bali', region: 'Islands, Indonesia', tag: 'Islands', value: 'Bali, Indonesia' },
    { city: 'Dubai', region: 'City & desert, UAE', tag: 'City', value: 'Dubai, UAE' },
    { city: 'Manali', region: 'Himalayas, India', tag: 'Mountains', value: 'Manali, India' },
    { city: 'Kyoto', region: 'Temples, Japan', tag: 'Culture', value: 'Kyoto, Japan' },
    { city: 'Paris', region: 'France', tag: 'City', value: 'Paris, France' },
    { city: 'Maldives', region: 'Islands', tag: 'Beach', value: 'Maldives' },
  ];
}

export function depCities() {
  return [
    { city: 'Mumbai', region: 'Maharashtra, India' },
    { city: 'Delhi', region: 'India' },
    { city: 'Bengaluru', region: 'Karnataka, India' },
    { city: 'Chennai', region: 'Tamil Nadu, India' },
    { city: 'Kolkata', region: 'West Bengal, India' },
    { city: 'Hyderabad', region: 'Telangana, India' },
    { city: 'Pune', region: 'Maharashtra, India' },
    { city: 'Ahmedabad', region: 'Gujarat, India' },
    { city: 'Jaipur', region: 'Rajasthan, India' },
    { city: 'Chandigarh', region: 'India' },
    { city: 'Lucknow', region: 'Uttar Pradesh, India' },
    { city: 'Kochi', region: 'Kerala, India' },
    { city: 'Goa', region: 'India' },
    { city: 'Singapore', region: 'Singapore' },
    { city: 'Dubai', region: 'UAE' },
    { city: 'London', region: 'United Kingdom' },
    { city: 'New York', region: 'USA' },
  ];
}

export function genericBundle(dest) {
  const city = (dest || '').split(',')[0].trim() || 'your destination';
  const H = (n, r, t, rev, p, ph) => ({ name: n, rating: r, tag: t, reviews: rev, price: p, phLabel: ph, mmt: 'https://www.makemytrip.com/hotels/', booking: 'https://www.booking.com/', agoda: 'https://www.agoda.com/' });
  const F = (n, r, c, p, d) => ({ name: n, rating: r, cuisine: c, price: p, dish: d, phLabel: 'food', mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(n + ' ' + city) });
  const T = (i, m, no, co) => ({ icon: i, mode: m, note: no, cost: co });
  return {
    city, region: dest || city,
    season: { range: 'Spring & Autumn', sub: 'Apr–Jun · Sep–Nov', note: 'Mild weather and lighter crowds make these the sweet spots for ' + city + '.' },
    hotels: [H('The Grand ' + city, '4.6', 'Premium · central', '1,900', 9000, 'hotel1'), H(city + ' Boutique Stay', '4.4', 'Comfort · downtown', '1,240', 5200, 'hotel2'), H(city + ' Backpackers', '4.2', 'Budget · old town', '2,050', 1600, 'hotel3')],
    food: [F('Central Kitchen', '4.5', 'Local', '₹₹', 'Try: regional specialities'), F('The Corner Cafe', '4.4', 'Cafe', '₹₹', 'Try: coffee & pastries'), F('Heritage Table', '4.6', 'Fine dining', '₹₹₹', 'Try: chef tasting menu')],
    transport: [T('🚕', 'Taxi / ride-hail', 'App cabs widely available', 'varies'), T('🚇', 'Metro / bus', 'Cheap city network', 'low'), T('🚗', 'Auto / tuk-tuk', 'Short hops', 'low'), T('🚶', 'Walking', 'Compact, walkable centre', 'free')],
    sos: [{ icon: '🚨', label: 'Emergency', sub: 'Police / fire', number: '112', tel: 'tel:112' }, { icon: '🚑', label: 'Ambulance', sub: 'Medical emergency', number: '112', tel: 'tel:112' }, { icon: '🏛️', label: 'Tourist helpline', sub: 'Local assistance', number: '112', tel: 'tel:112' }],
    plan: [
      ['Arrival & orientation', 'Settle in and get a feel for ' + city + '.', 'Classic',
        [['12:00 PM', 'Transfer', 'Arrive & hotel check-in', city, 'Drop bags and freshen up before exploring.'], ['04:00 PM', 'Walk', 'Old-town orientation walk', city + ' centre', 'Get your bearings on foot.'], ['07:30 PM', 'Food', 'Welcome dinner', city, 'A local restaurant to kick things off.']],
        'Relaxed', [['01:00 PM', 'Cafe', 'Slow arrival & cafe', city, 'Ease in with coffee and people-watching.'], ['05:00 PM', 'Walk', 'Sunset viewpoint', city, 'The best skyline view in town.']]],
      ['Icons & landmarks', 'The must-see sights of ' + city + '.', 'Classic',
        [['09:00 AM', 'Culture', 'Signature landmark', city, 'The sight everyone comes for.'], ['12:30 PM', 'Museum', 'City museum', city, 'Context on history and culture.'], ['04:00 PM', 'Walk', 'Main square & lanes', city, 'Wander the central quarter.']],
        'Guided', [['09:30 AM', 'Culture', 'Guided heritage walk', city, 'A local guide brings it to life.'], ['02:00 PM', 'Museum', 'Art & gallery stop', city, 'Classic and contemporary works.']]],
      ['Nature & day trip', 'A change of pace beyond the city.', 'Classic',
        [['08:30 AM', 'Nature', 'Scenic day trip', city + ' outskirts', "The region’s natural highlight."], ['01:00 PM', 'Food', 'Countryside lunch', city + ' region', 'A relaxed meal with a view.'], ['04:00 PM', 'Nature', 'Viewpoint & photos', city + ' region', 'Golden-hour panoramas.']],
        'Leisure', [['10:00 AM', 'Nature', 'Botanical garden', city, 'Green space and easy strolling.'], ['03:00 PM', 'Leisure', 'Waterside walk', city, 'Unhurried afternoon by the water.']]],
      ['Markets & departure', 'Last tastes and treasures before you fly.', 'Classic',
        [['10:00 AM', 'Shopping', 'Local market', city, 'Handicrafts, spices and gifts.'], ['01:00 PM', 'Food', 'Farewell lunch', city, 'One more local favourite.'], ['04:00 PM', 'Transfer', 'Transfer to airport', city, 'Head off with time to spare.']],
        'Easy', [['10:30 AM', 'Cafe', 'Slow morning', city, 'Pack unhurried, last coffee.'], ['01:30 PM', 'Transfer', 'Midday departure', city, 'Comfortable timing to fly out.']]],
    ],
  };
}

export function allDests() {
  const H = (name, rating, tag, reviews, price, ph) => ({ name, rating, tag, reviews, price, phLabel: ph, mmt: 'https://www.makemytrip.com/hotels/', booking: 'https://www.booking.com/', agoda: 'https://www.agoda.com/' });
  const F = (name, rating, cuisine, price, dish, city) => ({ name, rating, cuisine, price, dish, phLabel: 'food', mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + city) });
  const T = (icon, mode, note, cost) => ({ icon, mode, note, cost });
  const SOS = (word, police, amb, tnum) => [
    { icon: '🚨', label: 'Police', sub: word, number: police, tel: 'tel:' + police },
    { icon: '🚑', label: 'Ambulance', sub: 'Medical emergency', number: amb, tel: 'tel:' + amb },
    { icon: '🏛️', label: 'Tourist helpline', sub: '24×7 assistance', number: tnum, tel: 'tel:' + tnum },
  ];

  return {
    sikkim: {
      city: 'Gangtok', region: 'Sikkim, India',
      season: { range: 'Mar–May', sub: '& Oct–mid Dec', note: 'Clear skies, rhododendron blooms and crisp Himalayan views — peak season with cool ~14°C days. ☀️' },
      hotels: [H('Mayfair Spa Resort & Casino', '4.8', 'Premium · Ranipool', '3,240', 9800, 'hotel_mayfair'), H('Summit Namnang Courtyard', '4.6', 'Comfort · Gangtok', '1,870', 5400, 'hotel_summit'), H('Zostel Gangtok', '4.3', 'Budget · MG Marg', '2,110', 1400, 'hotel_zostel')],
      food: [F('Taste of Tibet', '4.6', 'Tibetan', '₹₹', 'Try: pork momos, thukpa', 'Gangtok'), F('The Coffee Shop', '4.5', 'Cafe', '₹₹', 'Try: hot chocolate, waffles', 'Gangtok'), F('Nimtho Sikkimese', '4.7', 'Local', '₹₹₹', 'Try: gundruk, phagshapa', 'Gangtok')],
      transport: [T('🚕', 'Shared / private cab', 'Sumo & taxi unions; book at MG Marg stand', '₹250–600'), T('🚌', 'SNT government bus', 'Cheapest for Gangtok–Namchi routes', '₹80–150'), T('🚗', 'Auto / e-rickshaw', 'Short hops within town', '₹40–120'), T('🛣️', 'Self-drive rental', 'SUV recommended for mountain roads', '₹2,500/day')],
      sos: SOS('All-India emergency', '112', '108', '1363'), plan: null,
    },
    goa: {
      city: 'Goa', region: 'Goa, India',
      season: { range: 'Nov–Feb', sub: 'cool & dry', note: 'Sunny days, gentle sea breeze and buzzing beach shacks — the classic Goa window. 🏖️' },
      hotels: [H('Taj Fort Aguada Resort', '4.7', 'Premium · Candolim', '4,120', 11500, 'hotel1'), H('Lemon Tree Amarante', '4.4', 'Comfort · Candolim', '2,240', 5200, 'hotel2'), H('Zostel Goa', '4.2', 'Budget · Anjuna', '3,010', 1300, 'hotel3')],
      food: [F('Fisherman’s Wharf', '4.5', 'Goan seafood', '₹₹', 'Try: prawn balchao, fish curry', 'Goa'), F('Gunpowder', '4.6', 'Coastal', '₹₹', 'Try: appam, pork vindaloo', 'Assagao Goa'), F('Cafe Bodega', '4.4', 'Cafe', '₹₹', 'Try: quiche, cold coffee', 'Panjim')],
      transport: [T('🛵', 'Rented scooter', 'Cheapest way to hop beaches', '₹400/day'), T('🚕', 'Cab / taxi', 'Airport & long transfers', '₹800–2,000'), T('🚌', 'Kadamba bus', 'Budget intercity routes', '₹20–80'), T('⛴️', 'River ferry', 'Free flat-boat crossings', 'Free')],
      sos: SOS('All-India emergency', '112', '108', '1364'),
      plan: [
        ['Arrival & North Goa beaches', 'Land, settle and sink into the northern sands.', 'Classic',
          [['12:00 PM', 'Transfer', 'Arrive & check-in', 'North Goa', 'Drop bags near Candolim and hit the coast.'], ['04:00 PM', 'Beach', 'Baga & Calangute', 'Baga Beach', 'Lively sands, water sports and sunset shacks.'], ['07:30 PM', 'Food', 'Beach-shack dinner', 'Baga', 'Grilled seafood with your toes in the sand.']],
          'Quiet', [['01:00 PM', 'Beach', 'Sinquerim beach', 'Sinquerim', 'Calmer stretch below the old fort.'], ['05:30 PM', 'Culture', 'Chapora Fort sunset', 'Chapora Fort', 'Hilltop views over the Arabian Sea.']]],
        ['Old Goa heritage & spice', 'Portuguese churches and a spice-garden lunch.', 'Classic',
          [['09:30 AM', 'Culture', 'Basilica of Bom Jesus', 'Old Goa', 'UNESCO baroque church of St Francis Xavier.'], ['11:30 AM', 'Culture', 'Se Cathedral', 'Old Goa', "One of Asia’s largest churches."], ['02:00 PM', 'Nature', 'Spice plantation lunch', 'Ponda', 'Guided walk and a traditional Goan thali.']],
          'Local', [['10:00 AM', 'Culture', 'Fontainhas Latin Quarter', 'Panjim', 'Candy-coloured Portuguese lanes.'], ['01:00 PM', 'Culture', 'Mangeshi Temple', 'Ponda', 'Serene Goan-Hindu temple complex.']]],
        ['South Goa serenity', 'Quieter palm-fringed beaches and a boat ride.', 'Classic',
          [['09:00 AM', 'Beach', 'Palolem Beach', 'Palolem', 'Crescent bay ideal for a lazy swim.'], ['12:00 PM', 'Nature', 'Dolphin boat trip', 'Palolem', 'Morning cruise to spot dolphins.'], ['04:00 PM', 'Nature', 'Cabo de Rama fort', 'Canacona', 'Cliff-top ruins over the sea.']],
          'Offbeat', [['09:30 AM', 'Beach', 'Agonda Beach', 'Agonda', 'Turtle-nesting calm and yoga cafes.'], ['02:00 PM', 'Nature', 'Butterfly Beach kayak', 'Butterfly Beach', 'Hidden cove reached by boat or kayak.']]],
        ['Water sports & departure', 'One last splash before you fly.', 'Classic',
          [['08:30 AM', 'Adventure', 'Grande Island snorkel', 'Grande Island', 'Boat trip with snorkelling and reefs.'], ['12:30 PM', 'Food', 'Farewell Goan lunch', 'Panjim', 'Xacuti, sorpotel and bebinca.'], ['04:00 PM', 'Transfer', 'Airport transfer', 'Dabolim', 'Head off with time to spare.']],
          'Easy', [['10:00 AM', 'Nature', 'Dudhsagar Falls trip', 'Dudhsagar', 'Jeep safari to the four-tier falls.'], ['03:00 PM', 'Transfer', 'Midday departure', 'Dabolim', 'Comfortable timing to fly out.']]],
      ],
    },
    kerala: {
      city: 'Kochi', region: 'Kerala, India',
      season: { range: 'Sep–Mar', sub: 'post-monsoon', note: 'Lush green backwaters, pleasant days and calm cruising conditions. 🌴' },
      hotels: [H('Taj Malabar Resort', '4.7', 'Premium · Willingdon Is.', '2,980', 10500, 'hotel1'), H('Spice Tree Munnar', '4.5', 'Comfort · Munnar', '1,540', 6200, 'hotel2'), H('Zostel Kochi', '4.2', 'Budget · Fort Kochi', '1,860', 1500, 'hotel3')],
      food: [F('Kayees Biryani', '4.6', 'Malabar', '₹₹', 'Try: mutton biryani', 'Kochi'), F('Dal Roti', '4.5', 'Multi', '₹₹', 'Try: kathi rolls', 'Fort Kochi'), F('Thaff', '4.4', 'Seafood', '₹₹', 'Try: karimeen pollichathu', 'Kochi')],
      transport: [T('🚤', 'Houseboat', 'Overnight backwater cruising', '₹8,000/night'), T('🚕', 'Cab', 'Hills & transfers', '₹1,500–3,000'), T('🚌', 'KSRTC bus', 'Budget intercity', '₹30–120'), T('🚗', 'Auto', 'Town hops', '₹30–100')],
      sos: SOS('All-India emergency', '112', '108', '1363'),
      plan: [
        ['Arrival & Fort Kochi', 'Colonial lanes, fishing nets and Kathakali.', 'Classic',
          [['12:00 PM', 'Transfer', 'Arrive & check-in', 'Fort Kochi', 'Settle into heritage Fort Kochi.'], ['04:00 PM', 'Culture', 'Chinese fishing nets', 'Fort Kochi', 'Iconic cantilevered nets at the shore.'], ['06:30 PM', 'Culture', 'Kathakali performance', 'Fort Kochi', 'Classical dance-drama with live drums.']],
          'Local', [['01:30 PM', 'Culture', 'Mattancherry Palace', 'Mattancherry', 'Dutch palace with Ramayana murals.'], ['04:30 PM', 'Shopping', 'Jew Town antiques', 'Mattancherry', 'Spice-scented lanes and curios.']]],
        ['Munnar tea hills', 'Up into the misty Western Ghats.', 'Classic',
          [['09:00 AM', 'Nature', 'Tea Museum', 'Munnar', "How Munnar’s famous brew is made."], ['11:30 AM', 'Nature', 'Eravikulam NP', 'Munnar', 'Rolling tea slopes and Nilgiri tahr.'], ['03:00 PM', 'Nature', 'Mattupetty Dam', 'Munnar', 'Boating below emerald hills.']],
          'Scenic', [['09:30 AM', 'Nature', 'Top Station viewpoint', 'Munnar', 'Cloud-draped valley panoramas.'], ['02:00 PM', 'Nature', 'Spice garden walk', 'Munnar', 'Cardamom, pepper and vanilla vines.']]],
        ['Alleppey backwaters', 'A private houseboat on the canals.', 'Classic',
          [['10:00 AM', 'Nature', 'Board your houseboat', 'Alleppey', 'Kettuvallam cruise through Vembanad.'], ['01:00 PM', 'Food', 'Onboard Kerala lunch', 'Alleppey', 'Fresh fish curry and red rice.'], ['05:00 PM', 'Nature', 'Village & sunset', 'Alleppey', 'Moor beside paddy fields at dusk.']],
          'Active', [['09:30 AM', 'Adventure', 'Canoe shikara ride', 'Kumarakom', 'Narrow canals the big boats miss.'], ['02:00 PM', 'Nature', 'Kumarakom bird sanctuary', 'Kumarakom', 'Migratory birds along the lake.']]],
        ['Ayurveda & departure', 'Unwind, then head home renewed.', 'Classic',
          [['09:00 AM', 'Leisure', 'Ayurvedic massage', 'Kochi', 'A traditional rejuvenation therapy.'], ['12:30 PM', 'Beach', 'Marari beach lunch', 'Mararikulam', 'Palm-lined fishing-village shore.'], ['04:00 PM', 'Transfer', 'Airport transfer', 'Kochi', 'Head off relaxed.']],
          'Easy', [['10:30 AM', 'Cafe', 'Slow morning', 'Fort Kochi', 'Last filter coffee by the water.'], ['01:30 PM', 'Transfer', 'Midday departure', 'Kochi', 'Comfortable timing to fly out.']]],
      ],
    },
    rajasthan: {
      city: 'Jaipur', region: 'Rajasthan, India',
      season: { range: 'Oct–Mar', sub: 'cool desert air', note: 'Comfortable days for forts and palaces before the summer heat. 🏰' },
      hotels: [H('Rambagh Palace', '4.9', 'Palace · Jaipur', '3,510', 26000, 'hotel1'), H('Trident Udaipur', '4.6', 'Premium · Udaipur', '2,120', 9800, 'hotel2'), H('Zostel Jaipur', '4.3', 'Budget · Jaipur', '2,760', 1400, 'hotel3')],
      food: [F('LMB', '4.5', 'Rajasthani', '₹₹', 'Try: dal baati churma', 'Jaipur'), F('Suvarna Mahal', '4.7', 'Fine dining', '₹₹₹', 'Try: laal maas', 'Jaipur'), F('Handi', '4.5', 'Mughlai', '₹₹', 'Try: tandoori, handi meat', 'Jaipur')],
      transport: [T('🚕', 'Cab', 'Best for city-to-city', '₹2,000–4,000'), T('🚗', 'Auto', 'Old-city hops', '₹50–200'), T('🚌', 'RSRTC bus', 'Budget intercity', '₹50–300'), T('🚲', 'Cycle-rickshaw', 'Bazaar crawls', '₹30–80')],
      sos: SOS('All-India emergency', '112', '108', '1363'),
      plan: [
        ['Jaipur Pink City', 'Palaces and observatories in the walled city.', 'Classic',
          [['09:00 AM', 'Culture', 'Hawa Mahal', 'Jaipur', 'The honeycomb Palace of Winds facade.'], ['11:00 AM', 'Culture', 'City Palace', 'Jaipur', 'Royal courtyards and museums.'], ['01:30 PM', 'Culture', 'Jantar Mantar', 'Jaipur', 'Giant 18th-century stone instruments.']],
          'Forts', [['09:00 AM', 'Culture', 'Amber Fort', 'Amer', 'Hilltop fort with mirror halls.'], ['12:00 PM', 'Nature', 'Jal Mahal photo stop', 'Jaipur', 'Water palace on Man Sagar Lake.']]],
        ['Forts & bazaars', 'Sunset ramparts and buzzing markets.', 'Classic',
          [['09:30 AM', 'Culture', 'Nahargarh Fort', 'Jaipur', 'Ridge fort over the whole city.'], ['01:00 PM', 'Museum', 'Albert Hall Museum', 'Jaipur', 'Indo-Saracenic art and artefacts.'], ['05:00 PM', 'Shopping', 'Johari & Bapu Bazaar', 'Jaipur', 'Gems, textiles and juttis.']],
          'Culture', [['10:00 AM', 'Culture', 'Jaigarh Fort', 'Jaipur', 'Home of the giant Jaivana cannon.'], ['07:00 PM', 'Food', 'Chokhi Dhani', 'Jaipur', 'Village-themed folk dinner.']]],
        ['Udaipur lakes', 'The romantic City of Lakes.', 'Classic',
          [['09:30 AM', 'Culture', 'City Palace Udaipur', 'Udaipur', 'Sprawling palace over Lake Pichola.'], ['12:30 PM', 'Nature', 'Lake Pichola boat', 'Udaipur', 'Glide past Jag Mandir island.'], ['04:00 PM', 'Culture', 'Jagdish Temple', 'Udaipur', 'Ornate Indo-Aryan temple.']],
          'Leisure', [['10:00 AM', 'Nature', 'Saheliyon ki Bari', 'Udaipur', 'Garden of fountains and lotus pools.'], ['05:30 PM', 'Nature', 'Monsoon Palace sunset', 'Udaipur', 'Hilltop palace golden hour.']]],
        ['Jodhpur & departure', 'The Blue City, then homeward.', 'Classic',
          [['09:00 AM', 'Culture', 'Mehrangarh Fort', 'Jodhpur', 'Towering fort above the blue houses.'], ['12:00 PM', 'Culture', 'Blue City walk', 'Jodhpur', 'Indigo lanes below the fort.'], ['04:00 PM', 'Transfer', 'Airport transfer', 'Jodhpur', 'Head off with time to spare.']],
          'Easy', [['09:30 AM', 'Culture', 'Jaswant Thada', 'Jodhpur', 'Marble memorial by the lake.'], ['01:00 PM', 'Transfer', 'Midday departure', 'Jodhpur', 'Comfortable timing to fly out.']]],
      ],
    },
    bali: {
      city: 'Bali', region: 'Bali, Indonesia',
      season: { range: 'Apr–Oct', sub: 'dry season', note: 'Sunny, low-humidity days ideal for temples, beaches and rice-terrace walks. 🌞' },
      hotels: [H('The Mulia Nusa Dua', '4.8', 'Premium · Nusa Dua', '5,240', 24000, 'hotel1'), H('Padma Resort Ubud', '4.6', 'Comfort · Ubud', '3,120', 12000, 'hotel2'), H('Kayun Hostel', '4.3', 'Budget · Ubud', '2,010', 1800, 'hotel3')],
      food: [F('Locavore', '4.7', 'Modern', '₹₹₹', 'Try: tasting menu', 'Ubud'), F("Naughty Nuri’s", '4.5', 'BBQ', '₹₹', 'Try: pork ribs', 'Ubud'), F('La Favela', '4.4', 'Fusion', '₹₹', 'Try: cocktails & tapas', 'Seminyak')],
      transport: [T('🛵', 'Scooter rental', 'Cheapest island transport', '₹350/day'), T('🚗', 'Private driver', 'Full-day tours', '₹3,000/day'), T('📱', 'Grab / Gojek', 'App ride-hailing', 'varies'), T('⛴️', 'Fast boat', 'To the Nusa islands', '₹1,200')],
      sos: SOS('Indonesia emergency', '112', '118', '112'),
      plan: [
        ['Seminyak & the south', 'Beach clubs and a cliff-top sunset.', 'Classic',
          [['11:00 AM', 'Beach', 'Seminyak Beach', 'Seminyak', 'Wide sands and surf-side loungers.'], ['04:00 PM', 'Culture', 'Tanah Lot temple', 'Tanah Lot', 'Sea temple on a tidal rock.'], ['07:00 PM', 'Leisure', 'Beach-club dinner', 'Seminyak', 'Sunset cocktails and dining.']],
          'Surf', [['10:00 AM', 'Adventure', 'Kuta surf lesson', 'Kuta', 'Gentle beginner breaks.'], ['05:30 PM', 'Beach', 'Double Six sunset', 'Seminyak', 'Golden-hour on the sand.']]],
        ['Ubud culture', 'Rice terraces and temple green.', 'Classic',
          [['08:30 AM', 'Nature', 'Tegallalang terraces', 'Ubud', 'Emerald stepped rice paddies.'], ['11:30 AM', 'Nature', 'Sacred Monkey Forest', 'Ubud', 'Jungle temple full of macaques.'], ['03:00 PM', 'Culture', 'Ubud Palace', 'Ubud', 'Royal courtyards and carvings.']],
          'Serene', [['08:00 AM', 'Culture', 'Tirta Empul', 'Tampaksiring', 'Holy spring purification temple.'], ['04:00 PM', 'Nature', 'Campuhan Ridge walk', 'Ubud', 'Easy green-hill sunset stroll.']]],
        ['Temples & waterfalls', 'Highland lake temple and falls.', 'Classic',
          [['09:00 AM', 'Culture', 'Ulun Danu Beratan', 'Bedugul', 'Iconic temple on a mountain lake.'], ['11:30 AM', 'Culture', 'Handara Gate', 'Bedugul', 'Famous Balinese photo gateway.'], ['02:30 PM', 'Nature', 'Git Git waterfall', 'Singaraja', 'Jungle cascade and cool pools.']],
          'Hidden', [['09:30 AM', 'Nature', 'Tegenungan waterfall', 'Gianyar', 'Popular lowland falls near Ubud.'], ['02:00 PM', 'Culture', 'Lempuyang gates', 'Karangasem', 'The Gates of Heaven view.']]],
        ['Nusa islands & departure', 'A boat day, then home.', 'Classic',
          [['08:00 AM', 'Adventure', 'Nusa Penida day trip', 'Nusa Penida', 'Fast boat to dramatic cliffs.'], ['11:00 AM', 'Beach', 'Kelingking Beach', 'Nusa Penida', 'The T-Rex cliff and turquoise bay.'], ['05:00 PM', 'Transfer', 'Airport transfer', 'Denpasar', 'Head off with time to spare.']],
          'Easy', [['09:30 AM', 'Culture', 'Uluwatu temple', 'Uluwatu', 'Clifftop temple and Kecak dance.'], ['02:00 PM', 'Transfer', 'Midday departure', 'Denpasar', 'Comfortable timing to fly out.']]],
      ],
    },
    dubai: {
      city: 'Dubai', region: 'Dubai, UAE',
      season: { range: 'Nov–Mar', sub: 'cooler months', note: 'Warm, dry and comfortable — the best window for desert and outdoor plans. 🌆' },
      hotels: [H('Atlantis The Palm', '4.7', 'Premium · Palm', '6,410', 38000, 'hotel1'), H('Rove Downtown', '4.5', 'Comfort · Downtown', '4,020', 9000, 'hotel2'), H('Premier Inn Barsha', '4.3', 'Budget · Al Barsha', '3,110', 5000, 'hotel3')],
      food: [F('Ravi Restaurant', '4.5', 'Pakistani', '₹₹', 'Try: mutton karahi', 'Dubai'), F('Al Ustad Special Kabab', '4.6', 'Persian', '₹₹', 'Try: chicken kabab', 'Dubai'), F('Pierchic', '4.7', 'Seafood', '₹₹₹', 'Try: oysters, sea bass', 'Dubai')],
      transport: [T('🚇', 'Metro', 'Fast, cheap and driverless', '₹80–160'), T('🚕', 'Taxi', 'Widely available', '₹250–900'), T('📱', 'Careem', 'App ride-hailing', 'varies'), T('🚋', 'Tram', 'Marina & JBR area', '₹80–120')],
      sos: SOS('UAE Police', '999', '998', '901'),
      plan: [
        ['Downtown & Burj Khalifa', 'The record-breaking heart of the city.', 'Classic',
          [['10:00 AM', 'Culture', 'Burj Khalifa At the Top', 'Downtown Dubai', "World’s tallest tower observation deck."], ['01:00 PM', 'Shopping', 'The Dubai Mall', 'Downtown Dubai', 'Mega-mall with aquarium and souk.'], ['06:00 PM', 'Leisure', 'Dubai Fountain show', 'Downtown Dubai', 'Choreographed water and light.']],
          'Views', [['11:00 AM', 'Culture', 'Dubai Frame', 'Zabeel', 'Golden frame between old and new.'], ['05:00 PM', 'Leisure', 'City Walk', 'Jumeirah', 'Open-air dining and street art.']]],
        ['Old Dubai & souks', 'Creek crossings and gold lanes.', 'Classic',
          [['09:30 AM', 'Culture', 'Al Fahidi district', 'Bur Dubai', 'Restored wind-tower old quarter.'], ['11:30 AM', 'Transfer', 'Abra creek crossing', 'Dubai Creek', 'Traditional boat across the water.'], ['12:30 PM', 'Shopping', 'Gold & Spice souks', 'Deira', 'Glittering lanes of gold and spice.']],
          'Heritage', [['10:00 AM', 'Museum', 'Dubai Museum', 'Bur Dubai', 'City history in Al Fahidi Fort.'], ['12:00 PM', 'Shopping', 'Textile souk', 'Bur Dubai', 'Fabrics and souvenirs.']]],
        ['Desert & beach', 'Dunes by day, beach by evening.', 'Classic',
          [['03:00 PM', 'Adventure', 'Desert safari', 'Dubai Desert', 'Dune bashing and sandboarding.'], ['05:00 PM', 'Culture', 'Camel ride & falcons', 'Dubai Desert', 'Golden-hour in the dunes.'], ['07:30 PM', 'Food', 'Bedouin-camp dinner', 'Dubai Desert', 'BBQ buffet with live shows.']],
          'Coast', [['10:00 AM', 'Beach', 'Jumeirah Beach', 'Jumeirah', 'Soft sand with Burj Al Arab views.'], ['01:00 PM', 'Leisure', 'La Mer beachfront', 'Jumeirah', 'Cafes, murals and watersports.']]],
        ['Palm Jumeirah & departure', 'Island icons before you fly.', 'Classic',
          [['10:00 AM', 'Culture', 'Palm & Atlantis', 'Palm Jumeirah', 'Monorail over the palm-shaped island.'], ['12:30 PM', 'Culture', 'The View at the Palm', 'Palm Jumeirah', 'Panorama of the whole island.'], ['04:00 PM', 'Transfer', 'Airport transfer', 'DXB', 'Head off with time to spare.']],
          'Easy', [['10:30 AM', 'Leisure', 'Marina walk', 'Dubai Marina', 'Waterfront towers and yachts.'], ['01:30 PM', 'Transfer', 'Midday departure', 'DXB', 'Comfortable timing to fly out.']]],
      ],
    },
  };
}

export function destBundle(key, formDestination) {
  const D = allDests();
  if (key && D[key]) return D[key];
  return genericBundle(formDestination);
}

export function buildDays(key, formStart, formDestination) {
  if (key === 'sikkim') return sikkimDays();
  const b = destBundle(key, formDestination);
  return genDays(key, b.plan, formStart);
}

export const surprisePools = {
  sikkim: [['Ban Jhakri Falls', 'Landscaped energy-park with waterfalls and folklore sculptures', 'Walk'], ['Tashi View Point', 'Sunrise deck facing Kanchenjunga', 'Walk'], ['Ganesh Tok', 'Hilltop shrine with sweeping Gangtok views', 'Walk'], ['Rumtek Monastery', 'Grand Tibetan monastery, prayer-hall murals', 'Walk'], ['Temi Tea Garden', 'Rolling estate slopes, fresh brew tasting', 'Walk'], ['Namgyal Institute of Tibetology', 'Rare thangkas and Himalayan artefacts', 'Walk']],
  goa: [['Fontainhas', 'Latin-quarter lanes, ochre villas', 'Walk'], ['Dudhsagar Falls', 'Four-tier jungle waterfall', 'Walk'], ['Chapora Fort', 'Sunset ramparts over the river mouth', 'Walk'], ['Anjuna Flea Market', 'Bohemian stalls and live music', 'Walk'], ['Divar Island ferry', 'Slow backwater crossing, sleepy hamlets', 'Transfer'], ['Spice plantation tour', 'Guided walk with a traditional lunch', 'Food']],
  kerala: [['Kathakali performance', 'Classical dance-drama with live percussion', 'Walk'], ['Mattancherry Palace', 'Dutch-era murals and royal regalia', 'Walk'], ['Kumarakom Bird Sanctuary', 'Backwater birding boardwalk', 'Walk'], ['Tea Museum, Munnar', 'Colonial estate, processing demo', 'Walk'], ['Chinese fishing nets', 'Cantilevered nets at golden hour', 'Walk'], ['Ayurveda spa session', 'Signature warm-oil therapy', 'Walk']],
  rajasthan: [['Amber Fort', 'Hilltop ramparts and mirror palace', 'Walk'], ['Hawa Mahal', 'Honeycomb pink-sandstone facade', 'Walk'], ['Jal Mahal', 'Water-palace views at dusk', 'Walk'], ['Chokhi Dhani', 'Folk-village dinner and performances', 'Food'], ['City Palace museum', 'Courtyards, armoury, textiles', 'Walk'], ['Nahargarh sunset', 'City-lights panorama from the fort', 'Walk']],
};
const defaultSurprisePool = [['Old-town heritage walk', 'Guided stroll through the historic core', 'Walk'], ['Local viewpoint', 'Best sunset panorama in town', 'Walk'], ['Signature market', 'Street food and artisan stalls', 'Food'], ['Riverside promenade', 'Easy waterfront amble', 'Walk'], ['Landmark museum', 'Regional art and history', 'Walk'], ['Hidden cafe crawl', 'Three local favourites, one afternoon', 'Cafe']];

export function surprisePool(key) {
  return surprisePools[key] || defaultSurprisePool;
}
