import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/landing/LandingPage.jsx';
import PlanWizard from './components/wizard/PlanWizard.jsx';
import ItineraryWorkspace from './components/itinerary/ItineraryWorkspace.jsx';
import AuthModal from './components/modals/AuthModal.jsx';
import ShareModal from './components/modals/ShareModal.jsx';
import CollabModal from './components/modals/CollabModal.jsx';
import SosModal from './components/modals/SosModal.jsx';
import Toast from './components/modals/Toast.jsx';
import Chatbot from './components/Chatbot.jsx';
import { matchDest, formatRange, suggestList, depCities, surprisePool } from './data/destinations.js';
import { codeItinerary, dbItinerary } from './services/destinations.js';
import { KIND_COLORS, HOTEL_PHOTO_POOL, FOOD_PHOTO_POOL, DEST_PHOTO, uimg } from './data/content.jsx';
import { useAuth } from './context/AuthContext.jsx';

// Design-tool "props" defaults (accentColor / defaultCurrency / showChatbot / remindersDefaultOn).
const ACCENT_COLOR = '#BC5A3C';
const DEFAULT_CURRENCY = 'INR';
const SHOW_CHATBOT = true;
const REMINDERS_DEFAULT_ON = true;

const INITIAL_FORM = {
  destination: 'Sikkim, India', start: '2026-10-12', end: '2026-10-15',
  travelerType: 'Couple', adults: 2, kids: 0, budget: 'Comfort',
  departure: 'Mumbai', transport: 'Flight', interests: ['Honeymoon'],
};

export default function App() {
  const { user, signOut } = useAuth();
  const [screen, setScreen] = useState('landing');
  const [theme, setTheme] = useState(() => (typeof localStorage !== 'undefined' && localStorage.getItem('tc_theme')) || 'light');
  const [planStep, setPlanStep] = useState(1);
  const [destKey, setDestKey] = useState('sikkim');
  const [showSuggest, setShowSuggest] = useState(false);
  const [showDepSuggest, setShowDepSuggest] = useState(false);
  const [aiEditId, setAiEditId] = useState(null);
  const [aiText, setAiText] = useState('');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [shareOpen, setShareOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [reminderOn, setReminderOn] = useState(REMINDERS_DEFAULT_ON);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState('');
  const [form, setForm] = useState(INITIAL_FORM);
  const [activeDay, setActiveDay] = useState(0);
  const [activeOpt, setActiveOpt] = useState([0, 0, 0, 0]);
  const [days, setDays] = useState(null);
  const [bundle, setBundle] = useState(() => codeItinerary('sikkim', INITIAL_FORM.start, INITIAL_FORM.destination).bundle);
  const [dragFrom, setDragFrom] = useState(null);
  const [collabInput, setCollabInputState] = useState('');
  const [collabRole, setCollabRoleState] = useState('Can edit');
  const [collaborators, setCollaborators] = useState([
    { name: 'You', email: 'you@email.com', initials: 'YO', role: 'Owner', bg: '#E8B77E' },
    { name: 'Priya Sharma', email: 'priya@email.com', initials: 'PS', role: 'Can edit', bg: '#A9C4A0' },
  ]);
  const [chatInput, setChatInputState] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: "Hi! I'm your TripCraft companion. Ask me anything about your Sikkim trip — places, food, timing or weather. 🏔️" },
  ]);

  const toastTimer = useRef(null);
  const genTokenRef = useRef(0);   // guards against stale destination switches
  const daysDirtyRef = useRef(false); // true once the user edits the current itinerary

  // Load a destination's bundle + day plan: instant from bundled code data, then
  // refreshed from the DB (authoritative) when Supabase is configured. The token
  // + dirty guards prevent a slow DB response from clobbering a newer selection
  // or the user's in-progress edits.
  const applyItinerary = (key, startDate, formDestination) => {
    daysDirtyRef.current = false;
    const token = ++genTokenRef.current;
    const code = codeItinerary(key, startDate, formDestination);
    setBundle(code.bundle);
    setDays(code.days);
    setActiveDay(0);
    setActiveOpt([0, 0, 0, 0]);
    dbItinerary(key, startDate, formDestination).then((res) => {
      if (!res || genTokenRef.current !== token) return;
      setBundle(res.bundle); // sidebar content always refreshes to DB
      if (!daysDirtyRef.current) setDays(res.days); // days only if untouched
    });
  };

  useEffect(() => {
    applyItinerary(destKey, form.start, form.destination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme CSS variables are scoped to [data-tc-theme] — mirror the attribute onto
  // <html> too so `body`'s background (a parent of the themed div) can inherit them.
  // body's own background/color are also set directly: on `body`/`html`, the
  // `background: var(--tc-bg)` shorthand doesn't reliably resolve through the
  // stylesheet cascade in every engine, so this covers the overscroll-bounce area
  // without depending on that.
  useEffect(() => {
    document.documentElement.setAttribute('data-tc-theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? '#16130F' : '#F6F1E9';
    document.body.style.color = theme === 'dark' ? '#EFE8DB' : '#2A2622';
  }, [theme]);

  const showToast = (t) => {
    setToast(t);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  };

  const toggleTheme = () => {
    const t = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('tc_theme', t); } catch (e) { /* storage unavailable */ }
    setTheme(t);
  };

  // ---------- navigation ----------
  const goHome = () => setScreen('landing');
  const goPlan = () => { setScreen('plan'); setPlanStep(1); };
  const goItinerary = () => setScreen('itinerary');
  const scrollTestimonials = () => {
    const el = document.getElementById('tc-testimonials');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  };
  const selectPackage = (key) => {
    setDestKey(key);
    applyItinerary(key, form.start, form.destination);
    setScreen('itinerary');
  };

  // ---------- auth ----------
  const openLogin = () => { setAuthOpen(true); setAuthMode('login'); };
  const openRegister = () => { setAuthOpen(true); setAuthMode('register'); };
  const closeAuth = () => setAuthOpen(false);
  const toggleAuthMode = () => setAuthMode((m) => (m === 'login' ? 'register' : 'login'));
  const authSuccess = (mode) => {
    setAuthOpen(false);
    showToast(mode === 'login' ? 'Welcome back!' : 'Account created — happy travels!');
  };
  const handleSignOut = async () => {
    await signOut();
    showToast('Signed out');
  };

  // ---------- wizard ----------
  const setDestination = (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, destination: v }));
    setShowSuggest(v.trim().length > 0);
  };
  const focusDest = () => setShowSuggest(form.destination.trim().length > 0);
  const selectDest = (name) => { setForm((f) => ({ ...f, destination: name })); setShowSuggest(false); };
  const setStart = (e) => setForm((f) => ({ ...f, start: e.target.value }));
  const setEnd = (e) => setForm((f) => ({ ...f, end: e.target.value }));
  const setDeparture = (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, departure: v }));
    setShowDepSuggest(v.trim().length > 0);
  };
  const focusDep = () => setShowDepSuggest(form.departure.trim().length > 0);
  const selectDep = (name) => { setForm((f) => ({ ...f, departure: name })); setShowDepSuggest(false); };
  const incAdults = () => setForm((f) => ({ ...f, adults: f.adults + 1 }));
  const decAdults = () => setForm((f) => ({ ...f, adults: Math.max(1, f.adults - 1) }));
  const incKids = () => setForm((f) => ({ ...f, kids: f.kids + 1 }));
  const decKids = () => setForm((f) => ({ ...f, kids: Math.max(0, f.kids - 1) }));
  const selectTraveler = (title) => setForm((f) => ({ ...f, travelerType: title }));
  const selectInterest = (title) => setForm((f) => ({ ...f, interests: [title] }));
  const selectBudget = (title) => setForm((f) => ({ ...f, budget: title }));
  const selectTransport = (title) => setForm((f) => ({ ...f, transport: title }));

  const wizardBack = () => setPlanStep((s) => Math.max(1, s - 1));
  const wizardNext = () => {
    if (planStep >= 4) {
      const key = matchDest(form.destination);
      setDestKey(key);
      applyItinerary(key, form.start, form.destination);
      setShowSuggest(false);
      setScreen('itinerary');
      showToast('Your ' + form.destination.split(',')[0] + ' itinerary is ready! ✨');
    } else {
      setPlanStep((s) => s + 1);
    }
  };

  // ---------- itinerary interactions ----------
  const setDay = (i) => setActiveDay(i);
  const setOpt = (i) => setActiveOpt((a) => { const next = [...a]; next[activeDay] = i; return next; });

  const mutateItems = (fn) => {
    daysDirtyRef.current = true;
    setDays((prevDays) => {
      const newDays = prevDays.map((d) => ({ ...d, options: d.options.map((o) => ({ ...o, items: [...o.items] })) }));
      const items = newDays[activeDay].options[activeOpt[activeDay]].items;
      fn(items);
      return newDays;
    });
  };
  const removeItem = (idx) => mutateItems((items) => items.splice(idx, 1));
  const addActivity = () => {
    mutateItems((items) => items.push({
      id: 'u' + Date.now(), time: 'Flexible', kind: 'Custom', title: 'New stop',
      desc: 'Tap to describe your own activity.', place: bundle.city,
      ph: 'your_stop', altIdx: -1, alts: [],
    }));
    showToast('Added — drag it into place');
  };

  const toggleReminder = () => setReminderOn((v) => !v);
  const toggleCurrency = () => setCurrency((c) => (c === 'INR' ? 'USD' : 'INR'));

  // ---------- share / collab / sos ----------
  const openShare = () => { setShareOpen(true); setCopied(false); };
  const closeShare = () => setShareOpen(false);
  const copyLink = () => {
    setCopied(true);
    try { navigator.clipboard && navigator.clipboard.writeText('tripcraft.ai/t/sikkim-oct-2026-x8f2'); } catch (e) { /* clipboard unavailable */ }
  };

  const openCollab = () => setCollabOpen(true);
  const closeCollab = () => setCollabOpen(false);
  const setCollabInput = (e) => setCollabInputState(e.target.value);
  const setCollabRole = (e) => setCollabRoleState(e.target.value);
  const addCollab = () => {
    const v = collabInput.trim();
    if (!v) return;
    const name = v.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
    const bgs = ['#C9A0DC', '#8AB6D6', '#E8A87C', '#A0C4A9'];
    setCollaborators((cs) => [...cs, { name, email: v, initials, role: collabRole, bg: bgs[cs.length % bgs.length] }]);
    setCollabInputState('');
    showToast('Invite sent to ' + v);
  };

  const openSos = () => setSosOpen(true);
  const closeSos = () => setSosOpen(false);

  // ---------- AI edit ----------
  const openAiEdit = (id) => { setAiEditId(id); setAiText(''); };
  const cancelAi = () => { setAiEditId(null); setAiText(''); };
  const setAiTextInput = (e) => setAiText(e.target.value);
  const aiReplace = (idx) => {
    const t = (aiText || '').trim();
    mutateItems((items) => {
      const it = items[idx];
      if (t) {
        items[idx] = { ...it, title: t, desc: 'Swapped in by TripCraft AI at your request.', altIdx: -1 };
      } else if (it.alts && it.alts.length) {
        const n = it.altIdx + 1;
        it.altIdx = n >= it.alts.length ? -1 : n;
        items[idx] = { ...it };
      }
    });
    setAiEditId(null);
    setAiText('');
    showToast('Activity updated ✨');
  };
  const aiSurprise = (idx) => {
    const pool = surprisePool(destKey);
    mutateItems((items) => {
      const it = items[idx];
      const used = items.map((x) => x.title);
      const fresh = pool.filter((p) => !used.includes(p[0]));
      const src = fresh.length ? fresh : pool;
      const pick = src[Math.floor(Math.random() * src.length)];
      items[idx] = { ...it, title: pick[0], desc: pick[1] + ' — found nearby by TripCraft AI.', kind: pick[2] || it.kind, place: pick[0], ph: pick[0].toLowerCase().replace(/[^a-z]+/g, '_'), altIdx: -1, alts: [] };
    });
    setAiEditId(null);
    showToast('Found a local gem nearby ✨');
  };
  const aiKey = (idx) => (e) => { if (e.key === 'Enter') aiReplace(idx); };
  const imgErr = (e) => { if (e && e.target) e.target.style.display = 'none'; };

  // ---------- chat ----------
  const toggleChat = () => setChatOpen((v) => !v);
  const setChatInput = (e) => setChatInputState(e.target.value);
  const chatKey = (e) => { if (e.key === 'Enter') sendChat(); };
  const botReply = (q) => {
    const t = q.toLowerCase();
    if (t.includes('food') || t.includes('eat') || t.includes('restaurant')) return 'For Sikkim, don’t miss momos and thukpa at Taste of Tibet, gundruk soup, and yak-cheese. Temi tea is a lovely buy. Want restaurant picks for a specific day?';
    if (t.includes('weather') || t.includes('season') || t.includes('time')) return 'You’re going in October — peak season with clear Kanchenjunga views, ~14°C days and cold nights. Pack layers and a light down jacket. 🧥';
    if (t.includes('permit') || t.includes('nathula') || t.includes('tsomgo')) return 'Tsomgo Lake and Nathula need permits arranged via a registered agency — TripCraft pre-fills these for Day 2. Nathula is open Wed–Sun and needs an extra permit.';
    if (t.includes('budget') || t.includes('cost') || t.includes('cheap')) return 'Your current Comfort plan is about ₹24,800pp. Switching to Backpacker drops stays/transport by ~40%. Want me to rebalance a day to save money?';
    if (t.includes('hotel') || t.includes('stay')) return 'Top-rated Gangtok stays: Mayfair Spa Resort (4.8★, premium), Summit Namnang (4.6★, comfort), Zostel (4.3★, budget). Tap any in the sidebar to book on MakeMyTrip, Booking or Agoda.';
    return 'Great question! I can help with attractions, food, permits, weather, budgets and re-arranging days for your Sikkim trip. What would you like to dig into?';
  };
  const pushChat = (text) => {
    if (!text || !text.trim()) return;
    setChatMessages((m) => [...m, { from: 'user', text }]);
    setChatInputState('');
    setTimeout(() => setChatMessages((m) => [...m, { from: 'bot', text: botReply(text) }]), 500);
  };
  const sendChat = (text) => pushChat(text !== undefined ? text : chatInput);

  // ---------- budget ----------
  const rate = () => 83;
  const fmt = (inr) => (currency === 'INR' ? '₹' + inr.toLocaleString('en-IN') : '$' + Math.round(inr / rate()).toLocaleString('en-US'));
  const budgetData = () => {
    const tier = form.budget;
    const base = tier === 'Backpacker' ? 14000 : tier === 'Comfort' ? 24800 : tier === 'Premium' ? 46000 : 78000;
    const lines = [
      { label: 'Stays (3 nights)', frac: 0.34 },
      { label: 'Transport & permits', frac: 0.24 },
      { label: 'Food & dining', frac: 0.18 },
      { label: 'Activities & entry', frac: 0.14 },
      { label: 'Local commute', frac: 0.10 },
    ];
    return { total: base, lines: lines.map((l) => ({ label: l.label, amount: fmt(Math.round(base * l.frac)), pct: Math.round(l.frac * 100) + '%' })) };
  };

  const daysBetween = () => {
    try {
      const a = new Date(form.start), b = new Date(form.end);
      const n = Math.round((b - a) / 86400000) + 1;
      return n > 0 ? n : 1;
    } catch (e) { return 4; }
  };

  // ================= DERIVED VIEW MODEL =================
  // `bundle` and `days` are state, populated by applyItinerary (code-instant then
  // DB-authoritative). effectiveDays guards the first render before load completes.
  const effectiveDays = days || [];
  const day = effectiveDays[activeDay];
  const optIdx = activeOpt[activeDay];
  const rawItems = day ? day.options[optIdx].items : [];
  const destPhoto = DEST_PHOTO[destKey] || '1600402808924-9c591a6dace8';

  const destQ = (form.destination || '').trim().toLowerCase();
  const destSuggestions = suggestList()
    .filter((d) => !destQ || d.city.toLowerCase().includes(destQ) || d.region.toLowerCase().includes(destQ) || d.value.toLowerCase().includes(destQ))
    .slice(0, 6);

  const depQ = (form.departure || '').trim().toLowerCase();
  const depSuggestions = depCities()
    .filter((c) => !depQ || c.city.toLowerCase().includes(depQ) || c.region.toLowerCase().includes(depQ))
    .slice(0, 6);

  const activities = rawItems.map((it, idx) => {
    const view = it.altIdx >= 0 && it.alts[it.altIdx] ? { ...it, ...it.alts[it.altIdx] } : it;
    const kc = KIND_COLORS[view.kind] || ['#EFE3D2', '#8A5A3A'];
    return {
      id: view.id, time: view.time, kind: view.kind, kindBg: kc[0], kindFg: kc[1],
      title: view.title, desc: view.desc, place: view.place,
      imgUrl: (view.kind === 'Food' || view.kind === 'Cafe') ? uimg(FOOD_PHOTO_POOL[idx % FOOD_PHOTO_POOL.length]) : uimg(destPhoto),
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(view.place + ' ' + bundle.city),
      reviewUrl: 'https://www.google.com/maps/search/' + encodeURIComponent(view.place + ' ' + bundle.city + ' reviews'),
      borderColor: dragFrom === idx ? 'rgba(188,90,60,.6)' : 'rgba(var(--tc-border-rgb),.1)',
      opacity: dragFrom === idx ? '.5' : '1',
      aiOpen: aiEditId === view.id, aiText,
      onAiOpen: () => openAiEdit(view.id), onAiReplace: () => aiReplace(idx), onAiSurprise: () => aiSurprise(idx),
      onAiCancel: cancelAi, onAiInput: setAiTextInput, onAiKey: aiKey(idx),
      onRemove: () => removeItem(idx),
      onDragStart: () => setDragFrom(idx),
      onDragOver: (e) => e.preventDefault(),
      onDrop: (e) => {
        e.preventDefault();
        if (dragFrom === null || dragFrom === idx) return;
        mutateItems((items) => { const [m] = items.splice(dragFrom, 1); items.splice(idx, 0, m); });
        setDragFrom(null);
      },
      onDragEnd: () => setDragFrom(null),
      onImgErr: imgErr,
    };
  });

  const bud = budgetData();
  const partySize = form.adults + form.kids;

  const hotels = bundle.hotels.map((h, hi) => {
    const q = encodeURIComponent(h.name + ' ' + bundle.city);
    const rr = Math.max(0, Math.min(5, Math.round(parseFloat(h.rating) || 0)));
    return {
      ...h, price: fmt(h.price), imgUrl: uimg(HOTEL_PHOTO_POOL[hi % HOTEL_PHOTO_POOL.length], 800),
      starStr: '★★★★★'.slice(0, rr) + '☆☆☆☆☆'.slice(0, 5 - rr),
      mapUrl: 'https://www.google.com/maps/search/' + q,
      mmt: 'https://www.makemytrip.com/hotels/hotel-listing/?searchText=' + q,
      booking: 'https://www.booking.com/searchresults.html?ss=' + q,
      agoda: 'https://www.agoda.com/search?q=' + q,
    };
  });
  const localTransport = bundle.transport.map((t) => {
    const isTaxi = /taxi|cab|ride/i.test(t.mode);
    return { ...t, link: isTaxi ? 'https://m.uber.com/' : '', linkLabel: isTaxi ? 'Open Uber ↗' : '' };
  });
  const foodSpots = bundle.food.map((f, fi) => ({
    ...f, imgUrl: uimg(FOOD_PHOTO_POOL[fi % FOOD_PHOTO_POOL.length]),
    mapUrl: 'https://www.google.com/maps/search/' + encodeURIComponent(f.name + ' ' + bundle.city),
  }));

  const CHAT_CHIPS = [
    { label: 'Best food in Sikkim?', message: 'Best food in Sikkim?' },
    { label: 'What’s the weather like?', message: 'What is the weather like in October?' },
    { label: 'Do I need permits?', message: 'Do I need permits for Tsomgo and Nathula?' },
  ];
  const chatMessagesView = chatMessages.map((m) => ({
    text: m.text,
    align: m.from === 'bot' ? 'flex-start' : 'flex-end',
    bg: m.from === 'bot' ? 'var(--tc-surface)' : 'var(--accent,#BC5A3C)',
    fg: m.from === 'bot' ? 'var(--tc-text)' : '#fff',
    radius: m.from === 'bot' ? '4px 14px 14px 14px' : '14px 14px 4px 14px',
  }));

  const travelerLabel = partySize + ' ' + (partySize === 1 ? 'traveler' : 'travelers') + ' · ' + form.travelerType
    + ((form.interests && form.interests.length) ? ' · ' + form.interests[0] + (form.interests.length > 1 ? ' +' + (form.interests.length - 1) : '') : '');

  return (
    <div data-tc-theme={theme} style={{ '--accent': ACCENT_COLOR, minHeight: '100vh' }}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onGoHome={goHome}
        onGoPlan={goPlan}
        onScrollTestimonials={scrollTestimonials}
        onOpenLogin={openLogin}
        onOpenRegister={openRegister}
        user={user}
        onSignOut={handleSignOut}
      />

      {screen === 'landing' && (
        <LandingPage onGoPlan={goPlan} onGoItinerary={goItinerary} onSelectPackage={selectPackage} />
      )}

      {screen === 'plan' && (
        <PlanWizard
          planStep={planStep}
          onBack={wizardBack}
          onNext={wizardNext}
          form={form}
          onSetDestination={setDestination}
          onFocusDest={focusDest}
          showSuggest={showSuggest && destSuggestions.length > 0}
          destSuggestions={destSuggestions}
          onSelectDest={selectDest}
          onSetStart={setStart}
          onSetEnd={setEnd}
          tripLength={daysBetween() + '-day trip · ' + form.destination}
          onSelectTraveler={selectTraveler}
          onIncAdults={incAdults}
          onDecAdults={decAdults}
          onIncKids={incKids}
          onDecKids={decKids}
          onSelectInterest={selectInterest}
          onSelectBudget={selectBudget}
          onSetDeparture={setDeparture}
          onFocusDep={focusDep}
          showDepSuggest={showDepSuggest && depSuggestions.length > 0}
          depSuggestions={depSuggestions}
          onSelectDep={selectDep}
          onSelectTransport={selectTransport}
        />
      )}

      {screen === 'itinerary' && day && (
        <ItineraryWorkspace
          header={{
            tripTitle: form.destination.split(',')[0] + ' · ' + daysBetween() + ' days',
            tripDates: formatRange(form.start, form.end),
            tripTravelerLabel: travelerLabel,
            tripBudgetLabel: '💰 ' + form.budget,
            tripFromLabel: 'from ' + form.departure + ' by ' + form.transport,
            collaborators,
            reminderOn,
            onToggleReminder: toggleReminder,
            reminderText: 'Reminders scheduled — the night before each travel day (' + formatRange(form.start, form.end) + ') you get the next day’s plan. Auto-stops after the trip ends.',
            onOpenCollab: openCollab,
            onOpenShare: openShare,
            onOpenSos: openSos,
          }}
          dayTabs={{
            days: effectiveDays,
            activeDay,
            onSetDay: setDay,
            activeDayTitle: day.title,
            activeDaySummary: day.summary,
            dayOptionTabs: day.options.map((o, i) => ({ label: o.label, active: i === optIdx })),
            onSetOpt: setOpt,
          }}
          activities={activities}
          onAddActivity={addActivity}
          foodSpots={foodSpots}
          sidebar={{
            currencyLabel: currency,
            onToggleCurrency: toggleCurrency,
            budgetTotal: fmt(bud.total) + ' pp',
            budgetPerHead: fmt(bud.total * partySize) + ' total',
            budgetTier: form.budget + ' tier',
            budgetLines: bud.lines,
            seasonRange: bundle.season.range,
            seasonSub: bundle.season.sub,
            seasonNote: bundle.season.note,
            hotels,
            localTransport,
            feedbackMapUrl: 'https://www.google.com/maps/search/' + encodeURIComponent(bundle.city + ' ' + bundle.region),
          }}
        />
      )}

      <AuthModal
        open={authOpen}
        isRegister={authMode === 'register'}
        authTitle={authMode === 'login' ? 'Welcome back' : 'Create your account'}
        authSubtitle={authMode === 'login' ? 'Sign in to access your saved trips.' : 'Start crafting personalized itineraries in minutes.'}
        authCta={authMode === 'login' ? 'Sign in' : 'Create account'}
        authSwitchText={authMode === 'login' ? 'New here?' : 'Already have an account?'}
        authSwitchCta={authMode === 'login' ? 'Create an account' : 'Sign in'}
        onClose={closeAuth}
        onToggleMode={toggleAuthMode}
        onSuccess={authSuccess}
      />
      <ShareModal open={shareOpen} onClose={closeShare} onCopyLink={copyLink} copyLabel={copied ? 'Copied ✓' : 'Copy'} />
      <CollabModal
        open={collabOpen}
        onClose={closeCollab}
        collabInput={collabInput}
        onSetCollabInput={setCollabInput}
        collabRole={collabRole}
        onSetCollabRole={setCollabRole}
        onAddCollab={addCollab}
        collaborators={collaborators}
      />
      <SosModal open={sosOpen} onClose={closeSos} sosSubtitle={bundle.region + ' · save these before you travel.'} sosNumbers={bundle.sos} />
      <Toast toast={toast} />
      <Chatbot
        visible={SHOW_CHATBOT}
        chatOpen={chatOpen}
        onToggleChat={toggleChat}
        chatMessages={chatMessagesView}
        chatChips={CHAT_CHIPS}
        chatInput={chatInput}
        onSetChatInput={setChatInput}
        onChatKey={chatKey}
        onSendChat={sendChat}
      />
    </div>
  );
}
