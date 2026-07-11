-- TripCraft.ai — seed the 6 curated destinations.
-- Generated from src/data/destinations.js (allDests). Safe to re-run (upsert).

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'sikkim',
  'Gangtok',
  'Sikkim, India',
  '{"range":"Mar–May","sub":"& Oct–mid Dec","note":"Clear skies, rhododendron blooms and crisp Himalayan views — peak season with cool ~14°C days. ☀️"}'::jsonb,
  '[{"name":"Mayfair Spa Resort & Casino","rating":"4.8","tag":"Premium · Ranipool","reviews":"3,240","price":9800,"phLabel":"hotel_mayfair","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Summit Namnang Courtyard","rating":"4.6","tag":"Comfort · Gangtok","reviews":"1,870","price":5400,"phLabel":"hotel_summit","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Zostel Gangtok","rating":"4.3","tag":"Budget · MG Marg","reviews":"2,110","price":1400,"phLabel":"hotel_zostel","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"Taste of Tibet","rating":"4.6","cuisine":"Tibetan","price":"₹₹","dish":"Try: pork momos, thukpa","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Taste%20of%20Tibet%20Gangtok"},{"name":"The Coffee Shop","rating":"4.5","cuisine":"Cafe","price":"₹₹","dish":"Try: hot chocolate, waffles","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=The%20Coffee%20Shop%20Gangtok"},{"name":"Nimtho Sikkimese","rating":"4.7","cuisine":"Local","price":"₹₹₹","dish":"Try: gundruk, phagshapa","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Nimtho%20Sikkimese%20Gangtok"}]'::jsonb,
  '[{"icon":"🚕","mode":"Shared / private cab","note":"Sumo & taxi unions; book at MG Marg stand","cost":"₹250–600"},{"icon":"🚌","mode":"SNT government bus","note":"Cheapest for Gangtok–Namchi routes","cost":"₹80–150"},{"icon":"🚗","mode":"Auto / e-rickshaw","note":"Short hops within town","cost":"₹40–120"},{"icon":"🛣️","mode":"Self-drive rental","note":"SUV recommended for mountain roads","cost":"₹2,500/day"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"All-India emergency","number":"112","tel":"tel:112"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"108","tel":"tel:108"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"1363","tel":"tel:1363"}]'::jsonb,
  null
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'goa',
  'Goa',
  'Goa, India',
  '{"range":"Nov–Feb","sub":"cool & dry","note":"Sunny days, gentle sea breeze and buzzing beach shacks — the classic Goa window. 🏖️"}'::jsonb,
  '[{"name":"Taj Fort Aguada Resort","rating":"4.7","tag":"Premium · Candolim","reviews":"4,120","price":11500,"phLabel":"hotel1","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Lemon Tree Amarante","rating":"4.4","tag":"Comfort · Candolim","reviews":"2,240","price":5200,"phLabel":"hotel2","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Zostel Goa","rating":"4.2","tag":"Budget · Anjuna","reviews":"3,010","price":1300,"phLabel":"hotel3","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"Fisherman’s Wharf","rating":"4.5","cuisine":"Goan seafood","price":"₹₹","dish":"Try: prawn balchao, fish curry","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Fisherman%E2%80%99s%20Wharf%20Goa"},{"name":"Gunpowder","rating":"4.6","cuisine":"Coastal","price":"₹₹","dish":"Try: appam, pork vindaloo","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Gunpowder%20Assagao%20Goa"},{"name":"Cafe Bodega","rating":"4.4","cuisine":"Cafe","price":"₹₹","dish":"Try: quiche, cold coffee","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Cafe%20Bodega%20Panjim"}]'::jsonb,
  '[{"icon":"🛵","mode":"Rented scooter","note":"Cheapest way to hop beaches","cost":"₹400/day"},{"icon":"🚕","mode":"Cab / taxi","note":"Airport & long transfers","cost":"₹800–2,000"},{"icon":"🚌","mode":"Kadamba bus","note":"Budget intercity routes","cost":"₹20–80"},{"icon":"⛴️","mode":"River ferry","note":"Free flat-boat crossings","cost":"Free"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"All-India emergency","number":"112","tel":"tel:112"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"108","tel":"tel:108"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"1364","tel":"tel:1364"}]'::jsonb,
  '[["Arrival & North Goa beaches","Land, settle and sink into the northern sands.","Classic",[["12:00 PM","Transfer","Arrive & check-in","North Goa","Drop bags near Candolim and hit the coast."],["04:00 PM","Beach","Baga & Calangute","Baga Beach","Lively sands, water sports and sunset shacks."],["07:30 PM","Food","Beach-shack dinner","Baga","Grilled seafood with your toes in the sand."]],"Quiet",[["01:00 PM","Beach","Sinquerim beach","Sinquerim","Calmer stretch below the old fort."],["05:30 PM","Culture","Chapora Fort sunset","Chapora Fort","Hilltop views over the Arabian Sea."]]],["Old Goa heritage & spice","Portuguese churches and a spice-garden lunch.","Classic",[["09:30 AM","Culture","Basilica of Bom Jesus","Old Goa","UNESCO baroque church of St Francis Xavier."],["11:30 AM","Culture","Se Cathedral","Old Goa","One of Asia’s largest churches."],["02:00 PM","Nature","Spice plantation lunch","Ponda","Guided walk and a traditional Goan thali."]],"Local",[["10:00 AM","Culture","Fontainhas Latin Quarter","Panjim","Candy-coloured Portuguese lanes."],["01:00 PM","Culture","Mangeshi Temple","Ponda","Serene Goan-Hindu temple complex."]]],["South Goa serenity","Quieter palm-fringed beaches and a boat ride.","Classic",[["09:00 AM","Beach","Palolem Beach","Palolem","Crescent bay ideal for a lazy swim."],["12:00 PM","Nature","Dolphin boat trip","Palolem","Morning cruise to spot dolphins."],["04:00 PM","Nature","Cabo de Rama fort","Canacona","Cliff-top ruins over the sea."]],"Offbeat",[["09:30 AM","Beach","Agonda Beach","Agonda","Turtle-nesting calm and yoga cafes."],["02:00 PM","Nature","Butterfly Beach kayak","Butterfly Beach","Hidden cove reached by boat or kayak."]]],["Water sports & departure","One last splash before you fly.","Classic",[["08:30 AM","Adventure","Grande Island snorkel","Grande Island","Boat trip with snorkelling and reefs."],["12:30 PM","Food","Farewell Goan lunch","Panjim","Xacuti, sorpotel and bebinca."],["04:00 PM","Transfer","Airport transfer","Dabolim","Head off with time to spare."]],"Easy",[["10:00 AM","Nature","Dudhsagar Falls trip","Dudhsagar","Jeep safari to the four-tier falls."],["03:00 PM","Transfer","Midday departure","Dabolim","Comfortable timing to fly out."]]]]'::jsonb
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'kerala',
  'Kochi',
  'Kerala, India',
  '{"range":"Sep–Mar","sub":"post-monsoon","note":"Lush green backwaters, pleasant days and calm cruising conditions. 🌴"}'::jsonb,
  '[{"name":"Taj Malabar Resort","rating":"4.7","tag":"Premium · Willingdon Is.","reviews":"2,980","price":10500,"phLabel":"hotel1","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Spice Tree Munnar","rating":"4.5","tag":"Comfort · Munnar","reviews":"1,540","price":6200,"phLabel":"hotel2","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Zostel Kochi","rating":"4.2","tag":"Budget · Fort Kochi","reviews":"1,860","price":1500,"phLabel":"hotel3","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"Kayees Biryani","rating":"4.6","cuisine":"Malabar","price":"₹₹","dish":"Try: mutton biryani","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Kayees%20Biryani%20Kochi"},{"name":"Dal Roti","rating":"4.5","cuisine":"Multi","price":"₹₹","dish":"Try: kathi rolls","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Dal%20Roti%20Fort%20Kochi"},{"name":"Thaff","rating":"4.4","cuisine":"Seafood","price":"₹₹","dish":"Try: karimeen pollichathu","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Thaff%20Kochi"}]'::jsonb,
  '[{"icon":"🚤","mode":"Houseboat","note":"Overnight backwater cruising","cost":"₹8,000/night"},{"icon":"🚕","mode":"Cab","note":"Hills & transfers","cost":"₹1,500–3,000"},{"icon":"🚌","mode":"KSRTC bus","note":"Budget intercity","cost":"₹30–120"},{"icon":"🚗","mode":"Auto","note":"Town hops","cost":"₹30–100"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"All-India emergency","number":"112","tel":"tel:112"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"108","tel":"tel:108"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"1363","tel":"tel:1363"}]'::jsonb,
  '[["Arrival & Fort Kochi","Colonial lanes, fishing nets and Kathakali.","Classic",[["12:00 PM","Transfer","Arrive & check-in","Fort Kochi","Settle into heritage Fort Kochi."],["04:00 PM","Culture","Chinese fishing nets","Fort Kochi","Iconic cantilevered nets at the shore."],["06:30 PM","Culture","Kathakali performance","Fort Kochi","Classical dance-drama with live drums."]],"Local",[["01:30 PM","Culture","Mattancherry Palace","Mattancherry","Dutch palace with Ramayana murals."],["04:30 PM","Shopping","Jew Town antiques","Mattancherry","Spice-scented lanes and curios."]]],["Munnar tea hills","Up into the misty Western Ghats.","Classic",[["09:00 AM","Nature","Tea Museum","Munnar","How Munnar’s famous brew is made."],["11:30 AM","Nature","Eravikulam NP","Munnar","Rolling tea slopes and Nilgiri tahr."],["03:00 PM","Nature","Mattupetty Dam","Munnar","Boating below emerald hills."]],"Scenic",[["09:30 AM","Nature","Top Station viewpoint","Munnar","Cloud-draped valley panoramas."],["02:00 PM","Nature","Spice garden walk","Munnar","Cardamom, pepper and vanilla vines."]]],["Alleppey backwaters","A private houseboat on the canals.","Classic",[["10:00 AM","Nature","Board your houseboat","Alleppey","Kettuvallam cruise through Vembanad."],["01:00 PM","Food","Onboard Kerala lunch","Alleppey","Fresh fish curry and red rice."],["05:00 PM","Nature","Village & sunset","Alleppey","Moor beside paddy fields at dusk."]],"Active",[["09:30 AM","Adventure","Canoe shikara ride","Kumarakom","Narrow canals the big boats miss."],["02:00 PM","Nature","Kumarakom bird sanctuary","Kumarakom","Migratory birds along the lake."]]],["Ayurveda & departure","Unwind, then head home renewed.","Classic",[["09:00 AM","Leisure","Ayurvedic massage","Kochi","A traditional rejuvenation therapy."],["12:30 PM","Beach","Marari beach lunch","Mararikulam","Palm-lined fishing-village shore."],["04:00 PM","Transfer","Airport transfer","Kochi","Head off relaxed."]],"Easy",[["10:30 AM","Cafe","Slow morning","Fort Kochi","Last filter coffee by the water."],["01:30 PM","Transfer","Midday departure","Kochi","Comfortable timing to fly out."]]]]'::jsonb
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'rajasthan',
  'Jaipur',
  'Rajasthan, India',
  '{"range":"Oct–Mar","sub":"cool desert air","note":"Comfortable days for forts and palaces before the summer heat. 🏰"}'::jsonb,
  '[{"name":"Rambagh Palace","rating":"4.9","tag":"Palace · Jaipur","reviews":"3,510","price":26000,"phLabel":"hotel1","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Trident Udaipur","rating":"4.6","tag":"Premium · Udaipur","reviews":"2,120","price":9800,"phLabel":"hotel2","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Zostel Jaipur","rating":"4.3","tag":"Budget · Jaipur","reviews":"2,760","price":1400,"phLabel":"hotel3","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"LMB","rating":"4.5","cuisine":"Rajasthani","price":"₹₹","dish":"Try: dal baati churma","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=LMB%20Jaipur"},{"name":"Suvarna Mahal","rating":"4.7","cuisine":"Fine dining","price":"₹₹₹","dish":"Try: laal maas","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Suvarna%20Mahal%20Jaipur"},{"name":"Handi","rating":"4.5","cuisine":"Mughlai","price":"₹₹","dish":"Try: tandoori, handi meat","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Handi%20Jaipur"}]'::jsonb,
  '[{"icon":"🚕","mode":"Cab","note":"Best for city-to-city","cost":"₹2,000–4,000"},{"icon":"🚗","mode":"Auto","note":"Old-city hops","cost":"₹50–200"},{"icon":"🚌","mode":"RSRTC bus","note":"Budget intercity","cost":"₹50–300"},{"icon":"🚲","mode":"Cycle-rickshaw","note":"Bazaar crawls","cost":"₹30–80"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"All-India emergency","number":"112","tel":"tel:112"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"108","tel":"tel:108"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"1363","tel":"tel:1363"}]'::jsonb,
  '[["Jaipur Pink City","Palaces and observatories in the walled city.","Classic",[["09:00 AM","Culture","Hawa Mahal","Jaipur","The honeycomb Palace of Winds facade."],["11:00 AM","Culture","City Palace","Jaipur","Royal courtyards and museums."],["01:30 PM","Culture","Jantar Mantar","Jaipur","Giant 18th-century stone instruments."]],"Forts",[["09:00 AM","Culture","Amber Fort","Amer","Hilltop fort with mirror halls."],["12:00 PM","Nature","Jal Mahal photo stop","Jaipur","Water palace on Man Sagar Lake."]]],["Forts & bazaars","Sunset ramparts and buzzing markets.","Classic",[["09:30 AM","Culture","Nahargarh Fort","Jaipur","Ridge fort over the whole city."],["01:00 PM","Museum","Albert Hall Museum","Jaipur","Indo-Saracenic art and artefacts."],["05:00 PM","Shopping","Johari & Bapu Bazaar","Jaipur","Gems, textiles and juttis."]],"Culture",[["10:00 AM","Culture","Jaigarh Fort","Jaipur","Home of the giant Jaivana cannon."],["07:00 PM","Food","Chokhi Dhani","Jaipur","Village-themed folk dinner."]]],["Udaipur lakes","The romantic City of Lakes.","Classic",[["09:30 AM","Culture","City Palace Udaipur","Udaipur","Sprawling palace over Lake Pichola."],["12:30 PM","Nature","Lake Pichola boat","Udaipur","Glide past Jag Mandir island."],["04:00 PM","Culture","Jagdish Temple","Udaipur","Ornate Indo-Aryan temple."]],"Leisure",[["10:00 AM","Nature","Saheliyon ki Bari","Udaipur","Garden of fountains and lotus pools."],["05:30 PM","Nature","Monsoon Palace sunset","Udaipur","Hilltop palace golden hour."]]],["Jodhpur & departure","The Blue City, then homeward.","Classic",[["09:00 AM","Culture","Mehrangarh Fort","Jodhpur","Towering fort above the blue houses."],["12:00 PM","Culture","Blue City walk","Jodhpur","Indigo lanes below the fort."],["04:00 PM","Transfer","Airport transfer","Jodhpur","Head off with time to spare."]],"Easy",[["09:30 AM","Culture","Jaswant Thada","Jodhpur","Marble memorial by the lake."],["01:00 PM","Transfer","Midday departure","Jodhpur","Comfortable timing to fly out."]]]]'::jsonb
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'bali',
  'Bali',
  'Bali, Indonesia',
  '{"range":"Apr–Oct","sub":"dry season","note":"Sunny, low-humidity days ideal for temples, beaches and rice-terrace walks. 🌞"}'::jsonb,
  '[{"name":"The Mulia Nusa Dua","rating":"4.8","tag":"Premium · Nusa Dua","reviews":"5,240","price":24000,"phLabel":"hotel1","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Padma Resort Ubud","rating":"4.6","tag":"Comfort · Ubud","reviews":"3,120","price":12000,"phLabel":"hotel2","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Kayun Hostel","rating":"4.3","tag":"Budget · Ubud","reviews":"2,010","price":1800,"phLabel":"hotel3","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"Locavore","rating":"4.7","cuisine":"Modern","price":"₹₹₹","dish":"Try: tasting menu","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Locavore%20Ubud"},{"name":"Naughty Nuri’s","rating":"4.5","cuisine":"BBQ","price":"₹₹","dish":"Try: pork ribs","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Naughty%20Nuri%E2%80%99s%20Ubud"},{"name":"La Favela","rating":"4.4","cuisine":"Fusion","price":"₹₹","dish":"Try: cocktails & tapas","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=La%20Favela%20Seminyak"}]'::jsonb,
  '[{"icon":"🛵","mode":"Scooter rental","note":"Cheapest island transport","cost":"₹350/day"},{"icon":"🚗","mode":"Private driver","note":"Full-day tours","cost":"₹3,000/day"},{"icon":"📱","mode":"Grab / Gojek","note":"App ride-hailing","cost":"varies"},{"icon":"⛴️","mode":"Fast boat","note":"To the Nusa islands","cost":"₹1,200"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"Indonesia emergency","number":"112","tel":"tel:112"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"118","tel":"tel:118"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"112","tel":"tel:112"}]'::jsonb,
  '[["Seminyak & the south","Beach clubs and a cliff-top sunset.","Classic",[["11:00 AM","Beach","Seminyak Beach","Seminyak","Wide sands and surf-side loungers."],["04:00 PM","Culture","Tanah Lot temple","Tanah Lot","Sea temple on a tidal rock."],["07:00 PM","Leisure","Beach-club dinner","Seminyak","Sunset cocktails and dining."]],"Surf",[["10:00 AM","Adventure","Kuta surf lesson","Kuta","Gentle beginner breaks."],["05:30 PM","Beach","Double Six sunset","Seminyak","Golden-hour on the sand."]]],["Ubud culture","Rice terraces and temple green.","Classic",[["08:30 AM","Nature","Tegallalang terraces","Ubud","Emerald stepped rice paddies."],["11:30 AM","Nature","Sacred Monkey Forest","Ubud","Jungle temple full of macaques."],["03:00 PM","Culture","Ubud Palace","Ubud","Royal courtyards and carvings."]],"Serene",[["08:00 AM","Culture","Tirta Empul","Tampaksiring","Holy spring purification temple."],["04:00 PM","Nature","Campuhan Ridge walk","Ubud","Easy green-hill sunset stroll."]]],["Temples & waterfalls","Highland lake temple and falls.","Classic",[["09:00 AM","Culture","Ulun Danu Beratan","Bedugul","Iconic temple on a mountain lake."],["11:30 AM","Culture","Handara Gate","Bedugul","Famous Balinese photo gateway."],["02:30 PM","Nature","Git Git waterfall","Singaraja","Jungle cascade and cool pools."]],"Hidden",[["09:30 AM","Nature","Tegenungan waterfall","Gianyar","Popular lowland falls near Ubud."],["02:00 PM","Culture","Lempuyang gates","Karangasem","The Gates of Heaven view."]]],["Nusa islands & departure","A boat day, then home.","Classic",[["08:00 AM","Adventure","Nusa Penida day trip","Nusa Penida","Fast boat to dramatic cliffs."],["11:00 AM","Beach","Kelingking Beach","Nusa Penida","The T-Rex cliff and turquoise bay."],["05:00 PM","Transfer","Airport transfer","Denpasar","Head off with time to spare."]],"Easy",[["09:30 AM","Culture","Uluwatu temple","Uluwatu","Clifftop temple and Kecak dance."],["02:00 PM","Transfer","Midday departure","Denpasar","Comfortable timing to fly out."]]]]'::jsonb
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

insert into public.destinations (key, city, region, season, hotels, food, transport, sos, plan)
values (
  'dubai',
  'Dubai',
  'Dubai, UAE',
  '{"range":"Nov–Mar","sub":"cooler months","note":"Warm, dry and comfortable — the best window for desert and outdoor plans. 🌆"}'::jsonb,
  '[{"name":"Atlantis The Palm","rating":"4.7","tag":"Premium · Palm","reviews":"6,410","price":38000,"phLabel":"hotel1","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Rove Downtown","rating":"4.5","tag":"Comfort · Downtown","reviews":"4,020","price":9000,"phLabel":"hotel2","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"},{"name":"Premier Inn Barsha","rating":"4.3","tag":"Budget · Al Barsha","reviews":"3,110","price":5000,"phLabel":"hotel3","mmt":"https://www.makemytrip.com/hotels/","booking":"https://www.booking.com/","agoda":"https://www.agoda.com/"}]'::jsonb,
  '[{"name":"Ravi Restaurant","rating":"4.5","cuisine":"Pakistani","price":"₹₹","dish":"Try: mutton karahi","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Ravi%20Restaurant%20Dubai"},{"name":"Al Ustad Special Kabab","rating":"4.6","cuisine":"Persian","price":"₹₹","dish":"Try: chicken kabab","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Al%20Ustad%20Special%20Kabab%20Dubai"},{"name":"Pierchic","rating":"4.7","cuisine":"Seafood","price":"₹₹₹","dish":"Try: oysters, sea bass","phLabel":"food","mapUrl":"https://www.google.com/maps/search/?api=1&query=Pierchic%20Dubai"}]'::jsonb,
  '[{"icon":"🚇","mode":"Metro","note":"Fast, cheap and driverless","cost":"₹80–160"},{"icon":"🚕","mode":"Taxi","note":"Widely available","cost":"₹250–900"},{"icon":"📱","mode":"Careem","note":"App ride-hailing","cost":"varies"},{"icon":"🚋","mode":"Tram","note":"Marina & JBR area","cost":"₹80–120"}]'::jsonb,
  '[{"icon":"🚨","label":"Police","sub":"UAE Police","number":"999","tel":"tel:999"},{"icon":"🚑","label":"Ambulance","sub":"Medical emergency","number":"998","tel":"tel:998"},{"icon":"🏛️","label":"Tourist helpline","sub":"24×7 assistance","number":"901","tel":"tel:901"}]'::jsonb,
  '[["Downtown & Burj Khalifa","The record-breaking heart of the city.","Classic",[["10:00 AM","Culture","Burj Khalifa At the Top","Downtown Dubai","World’s tallest tower observation deck."],["01:00 PM","Shopping","The Dubai Mall","Downtown Dubai","Mega-mall with aquarium and souk."],["06:00 PM","Leisure","Dubai Fountain show","Downtown Dubai","Choreographed water and light."]],"Views",[["11:00 AM","Culture","Dubai Frame","Zabeel","Golden frame between old and new."],["05:00 PM","Leisure","City Walk","Jumeirah","Open-air dining and street art."]]],["Old Dubai & souks","Creek crossings and gold lanes.","Classic",[["09:30 AM","Culture","Al Fahidi district","Bur Dubai","Restored wind-tower old quarter."],["11:30 AM","Transfer","Abra creek crossing","Dubai Creek","Traditional boat across the water."],["12:30 PM","Shopping","Gold & Spice souks","Deira","Glittering lanes of gold and spice."]],"Heritage",[["10:00 AM","Museum","Dubai Museum","Bur Dubai","City history in Al Fahidi Fort."],["12:00 PM","Shopping","Textile souk","Bur Dubai","Fabrics and souvenirs."]]],["Desert & beach","Dunes by day, beach by evening.","Classic",[["03:00 PM","Adventure","Desert safari","Dubai Desert","Dune bashing and sandboarding."],["05:00 PM","Culture","Camel ride & falcons","Dubai Desert","Golden-hour in the dunes."],["07:30 PM","Food","Bedouin-camp dinner","Dubai Desert","BBQ buffet with live shows."]],"Coast",[["10:00 AM","Beach","Jumeirah Beach","Jumeirah","Soft sand with Burj Al Arab views."],["01:00 PM","Leisure","La Mer beachfront","Jumeirah","Cafes, murals and watersports."]]],["Palm Jumeirah & departure","Island icons before you fly.","Classic",[["10:00 AM","Culture","Palm & Atlantis","Palm Jumeirah","Monorail over the palm-shaped island."],["12:30 PM","Culture","The View at the Palm","Palm Jumeirah","Panorama of the whole island."],["04:00 PM","Transfer","Airport transfer","DXB","Head off with time to spare."]],"Easy",[["10:30 AM","Leisure","Marina walk","Dubai Marina","Waterfront towers and yachts."],["01:30 PM","Transfer","Midday departure","DXB","Comfortable timing to fly out."]]]]'::jsonb
)
on conflict (key) do update set
  city = excluded.city,
  region = excluded.region,
  season = excluded.season,
  hotels = excluded.hotels,
  food = excluded.food,
  transport = excluded.transport,
  sos = excluded.sos,
  plan = excluded.plan,
  updated_at = now();

