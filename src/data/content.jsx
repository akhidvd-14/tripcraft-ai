// Static landing/wizard copy + option lists, ported from the TripCraft.ai design.
import {
  IconSolo, IconCouples, IconHoneymoon, IconFamilies, IconGroups, IconBudget, IconReligious, IconPremium,
  IconDayWise, IconEditable, IconBookable, IconReminders, IconSafety,
  IconTravelerSolo, IconTravelerCouple, IconTravelerFamily, IconTravelerGroup,
  IconHoneymoonSm, IconAdventureSm, IconRelaxationSm, IconCultureSm, IconNatureSm, IconFoodSm, IconSpiritualSm, IconNightlifeSm,
  IconBackpacker, IconComfort, IconPremiumTier, IconLuxury,
  IconFlight, IconTrain, IconRoad,
} from '../icons.jsx';

export const SEGMENTS = [
  { icon: <IconSolo />, title: 'Solo', desc: 'Self-paced routes and safe, social stays.' },
  { icon: <IconCouples />, title: 'Couples', desc: 'Romantic viewpoints, quiet dinners, slow mornings.' },
  { icon: <IconHoneymoon />, title: 'Honeymoon', desc: 'Premium suites and once-in-a-lifetime moments.' },
  { icon: <IconFamilies />, title: 'Families', desc: 'Kid-friendly pace, easy transfers, room to breathe.' },
  { icon: <IconGroups />, title: 'Groups', desc: 'Coordinated plans everyone can edit together.' },
  { icon: <IconBudget />, title: 'Budget', desc: 'Maximum wonder, minimum spend.' },
  { icon: <IconReligious />, title: 'Religious', desc: 'Pilgrimage circuits and sacred sites, done right.' },
  { icon: <IconPremium />, title: 'Premium', desc: 'Concierge-grade luxury, handled end to end.' },
];

export const STEPS = [
  { n: '01', title: 'Tell us the basics', desc: "Destination, dates and who’s coming along." },
  { n: '02', title: 'Pick your style', desc: 'Traveler type and budget tune every suggestion.' },
  { n: '03', title: 'Get your plan', desc: 'A day-wise itinerary with multiple options per day.' },
  { n: '04', title: 'Edit, share & go', desc: 'Rearrange, invite others, book stays and travel.' },
];

export const FEATURES = [
  { icon: <IconDayWise />, title: 'Day-wise, never repetitive', desc: 'Each day is genuinely different, with 2+ options you can switch between.' },
  { icon: <IconEditable />, title: 'Fully editable', desc: 'Drag to reorder, swap any activity with the magic button, add your own.' },
  { icon: <IconBookable />, title: 'Book where you like', desc: 'Review-ranked hotels linking straight to MakeMyTrip, Booking & Agoda.' },
  { icon: <IconGroups />, title: 'Plan together', desc: 'Invite family or colleagues to read and edit the same itinerary live.' },
  { icon: <IconReminders />, title: 'Daily reminders', desc: 'Auto reminders for tomorrow’s plan — only while your trip is running.' },
  { icon: <IconSafety />, title: 'Travel with a safety net', desc: 'Local SOS numbers and Google Maps directions on every stop.' },
];

export const TESTIMONIALS = [
  { stars: '★★★★★', quote: 'Planned our entire Sikkim honeymoon in 20 minutes. The daily options meant no two days felt the same.', name: 'Ananya & Rohit', meta: 'Honeymoon · Mumbai', initials: 'AR', avatarBg: '#E8B77E' },
  { stars: '★★★★★', quote: 'Sharing the itinerary with my parents so they could edit it was a game-changer for our family trip.', name: 'Meera Nair', meta: 'Family of 5 · Bengaluru', initials: 'MN', avatarBg: '#A9C4A0' },
  { stars: '★★★★★', quote: 'As a solo traveler the SOS numbers and Maps links gave me real peace of mind up in the mountains.', name: 'Jonas Weber', meta: 'Solo · Berlin', initials: 'JW', avatarBg: '#8AB6D6' },
  { stars: '★★★★★', quote: 'The budget breakdown in both INR and USD helped our friends group split costs fairly. Brilliant.', name: 'Karan Malhotra', meta: 'Group of 6 · Delhi', initials: 'KM', avatarBg: '#C9A0DC' },
  { stars: '★★★★★', quote: 'Booked our stay on MakeMyTrip in two taps straight from the hotel card. Ratings were spot on.', name: 'Fatima Sheikh', meta: 'Couple · Hyderabad', initials: 'FS', avatarBg: '#E8A87C' },
  { stars: '★★★★★', quote: 'The pilgrimage route to Char Dham and Samdruptse was thoughtfully sequenced. Felt truly personalized.', name: 'Ramesh Iyer', meta: 'Religious · Chennai', initials: 'RI', avatarBg: '#A0C4A9' },
];

const uphoto = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 1000}&q=70`;

export const PACKAGES = [
  { key: 'goa', destKey: 'goa', img: uphoto('1582972236019-ea4af5ffe587'), credit: 'Photo by Ishvani Hans on Unsplash', creditHref: 'https://unsplash.com/@ishvanihans', badge: 'Beach · India', title: 'Goa Beach Escape', nights: '4N · 5D', desc: "Golden sands, sunset shacks and easy island time on India’s favourite coast.", rating: '4.7', price: '₹18,500', highlights: ['Palolem', 'Sunset cruise', 'Beach cafes'] },
  { key: 'kerala', destKey: 'kerala', img: uphoto('1602216056096-3b40cc0c9944'), credit: 'Photo by Nature Photographer on Unsplash', creditHref: 'https://unsplash.com/@pavi_thra_', badge: 'Backwaters · India', title: 'Kerala Backwaters', nights: '5N · 6D', desc: 'Glide through palm-lined canals on a private houseboat; slow, green and serene.', rating: '4.8', price: '₹24,900', highlights: ['Houseboat', 'Munnar tea', 'Ayurveda'] },
  { key: 'sikkim', destKey: 'sikkim', img: uphoto('1585914285280-72bae40d4b3a'), credit: 'Photo by Gaurav Bagdi on Unsplash', creditHref: 'https://unsplash.com/@dfyngrvty', badge: 'Mountains · India', title: 'Sikkim Himalaya', nights: '4N · 5D', desc: 'Glacial lakes, monasteries and Kanchenjunga views high in the Eastern Himalaya.', rating: '4.9', price: '₹22,800', highlights: ['Tsomgo Lake', 'Gangtok', 'Ravangla'] },
  { key: 'rajasthan', destKey: 'rajasthan', img: uphoto('1524230507669-5ff97982bb5e'), credit: 'Photo by Annie Spratt on Unsplash', creditHref: 'https://unsplash.com/@anniespratt', badge: 'Heritage · India', title: 'Rajasthan Royale', nights: '6N · 7D', desc: 'Pink-city palaces, desert forts and heritage havelis across regal Rajasthan.', rating: '4.8', price: '₹31,500', highlights: ['Jaipur', 'Udaipur', 'Amber Fort'] },
  { key: 'bali', destKey: 'bali', img: uphoto('1604999333679-b86d54738315'), credit: 'Photo by Guillaume Marques on Unsplash', creditHref: 'https://unsplash.com/@mrqs_g', badge: 'Islands · International', title: 'Bali Getaway', nights: '6N · 7D', desc: "Rice-terrace temples, surf beaches and villa living on Indonesia’s island of the gods.", rating: '4.9', price: '₹68,000', highlights: ['Ubud', 'Temples', 'Beach club'] },
  { key: 'dubai', destKey: 'dubai', img: uphoto('1512453979798-5ea266f8880c'), credit: 'Photo by David Rodrigo on Unsplash', creditHref: 'https://unsplash.com/@david__r', badge: 'City · International', title: 'Dubai Luxe', nights: '5N · 6D', desc: "Sky-high views, desert safaris and gold-standard shopping in the Gulf’s glittering city.", rating: '5.0', price: '₹85,000', highlights: ['Burj Khalifa', 'Desert safari', 'Marina'] },
];

export const POPULAR_DESTINATIONS = ['Sikkim, India', 'Bali, Indonesia', 'Kyoto, Japan', 'Paris, France', 'Dubai, UAE'];

export const TRAVELER_CHOICES = [
  { icon: <IconTravelerSolo />, title: 'Solo' },
  { icon: <IconTravelerCouple />, title: 'Couple' },
  { icon: <IconTravelerFamily />, title: 'Family' },
  { icon: <IconTravelerGroup />, title: 'Group' },
];

export const INTEREST_CHOICES = [
  { icon: <IconHoneymoonSm />, title: 'Honeymoon' },
  { icon: <IconAdventureSm />, title: 'Adventure' },
  { icon: <IconRelaxationSm />, title: 'Relaxation' },
  { icon: <IconCultureSm />, title: 'Culture' },
  { icon: <IconNatureSm />, title: 'Nature' },
  { icon: <IconFoodSm />, title: 'Food' },
  { icon: <IconSpiritualSm />, title: 'Spiritual' },
  { icon: <IconNightlifeSm />, title: 'Nightlife' },
];

export const BUDGET_CHOICES = [
  { icon: <IconBackpacker />, title: 'Backpacker', desc: 'Hostels, shared cabs, street food', range: '₹10–16k pp' },
  { icon: <IconComfort />, title: 'Comfort', desc: '3★ stays, private cabs, good restaurants', range: '₹20–30k pp' },
  { icon: <IconPremiumTier />, title: 'Premium', desc: '4★ resorts, guided tours, fine dining', range: '₹40–55k pp' },
  { icon: <IconLuxury />, title: 'Luxury', desc: '5★ & boutique, private guide, curated', range: '₹70k+ pp' },
];

export const TRANSPORT_OPTIONS = [
  { icon: <IconFlight />, title: 'Flight', detail: 'Nearest airport + cab transfer', tag: 'Fastest', duration: '~5h total', price: '₹6,200' },
  { icon: <IconTrain />, title: 'Train', detail: 'Nearest railhead + scenic drive', tag: 'Best value', duration: '~30h + drive', price: '₹1,900' },
  { icon: <IconRoad />, title: 'Road', detail: 'Self-drive or cab by highway', tag: 'Most flexible', duration: '~34h drive', price: '₹8,500 fuel' },
];

export const KIND_COLORS = {
  Transfer: ['#E7EDF3', '#3A6A8A'], Walk: ['#E4EAE0', '#3F6B4A'], Food: ['#F6E3D6', '#A65A2E'],
  Nature: ['#E4EAE0', '#3F6B4A'], Culture: ['#EFE3D2', '#8A5A3A'], Cable: ['#E7EDF3', '#3A6A8A'],
  Museum: ['#EAE0F0', '#5B3A8A'], Shopping: ['#F6E6EE', '#9A3A6A'], Cafe: ['#F6E3D6', '#A65A2E'],
  Leisure: ['#ECE7DE', '#6E6559'], Custom: ['#EFE3D2', '#8A5A3A'],
};

export const HOTEL_PHOTO_POOL = ['1611892440504-42a792e24d32', '1618773928121-c32242e63f39', '1631049307264-da0ec9d70304', '1629140727571-9b5c6f6267b4', '1566665797739-1674de7a421a', '1582719478250-c89cae4dc85b'];
export const FOOD_PHOTO_POOL = ['1585937421612-70a008356fbe', '1589302168068-964664d93dc0', '1567337710282-00832b415979', '1606471191009-63994c53433b', '1542367592-8849eb950fd8', '1631452180539-96aca7d48617'];
export const DEST_PHOTO = { sikkim: '1585914285280-72bae40d4b3a', goa: '1582972236019-ea4af5ffe587', kerala: '1602216056096-3b40cc0c9944', rajasthan: '1524230507669-5ff97982bb5e', bali: '1604999333679-b86d54738315', dubai: '1512453979798-5ea266f8880c' };

export const uimg = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 700}&q=70`;
