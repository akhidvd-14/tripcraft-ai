// Shared inline-SVG icons, ported 1:1 (same path data) from the TripCraft.ai design.

function Svg({ size = 24, strokeWidth = 1.6, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const LogoIcon = ({ size = 19, color = '#F6F1E9' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" />
  </svg>
);

export const PinIcon = ({ size = 16, color = 'var(--accent,#BC5A3C)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export const SunIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MoonIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

// ---- Segment icons (24px, from mkIcon/P/C helpers) ----
export const IconSolo = () => <Svg><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></Svg>;
export const IconCouples = () => <Svg><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" /></Svg>;
export const IconHoneymoon = () => <Svg><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M11 3 8 9l4 12 4-12-3-6" /><path d="M2 9h20" /></Svg>;
export const IconFamilies = () => <Svg><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.1a4 4 0 0 1 0 7.75" /></Svg>;
export const IconGroups = () => <Svg><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M19 3.1a4 4 0 0 1 0 7.75" /></Svg>;
export const IconBudget = () => <Svg><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></Svg>;
export const IconReligious = () => <Svg><path d="M3 22h18" /><path d="M6 18v-7" /><path d="M10 18v-7" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M4 11h16" /><path d="M12 2 20 7H4z" /></Svg>;
export const IconPremium = () => <Svg><path d="M2 20h20" /><path d="M4 20l-1-9 5 4 4-8 4 8 5-4-1 9" /></Svg>;

// ---- Feature icons (24px) ----
export const IconDayWise = () => <Svg><path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" /><path d="M9 3v15" /><path d="M15 6v15" /></Svg>;
export const IconEditable = () => <Svg><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></Svg>;
export const IconBookable = () => <Svg><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8V6" /></Svg>;
export const IconReminders = () => <Svg><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></Svg>;
export const IconSafety = () => <Svg><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Svg>;

// ---- Traveler-type icons (24px, wizard step 2) ----
export const IconTravelerSolo = () => <Svg><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></Svg>;
export const IconTravelerCouple = () => <Svg><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Svg>;
export const IconTravelerFamily = () => <Svg><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-3a3 3 0 0 0-2-2.83" /><circle cx="17.5" cy="8" r="2.5" /></Svg>;
export const IconTravelerGroup = () => <Svg><path d="M18 21a6 6 0 0 0-12 0" /><circle cx="12" cy="8" r="4" /><path d="M22 20a5 5 0 0 0-3.5-4.4" /><path d="M2 20a5 5 0 0 1 3.5-4.4" /></Svg>;

// ---- Interest icons (18px) ----
function SvgSm({ children }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
export const IconHoneymoonSm = () => <SvgSm><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" /></SvgSm>;
export const IconAdventureSm = () => <SvgSm><circle cx="12" cy="12" r="10" /><path d="M16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9z" /></SvgSm>;
export const IconRelaxationSm = () => <SvgSm><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.85-5.4 5.08-6" /></SvgSm>;
export const IconCultureSm = () => <SvgSm><path d="M3 22h18" /><path d="M6 18v-7" /><path d="M10 18v-7" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M4 11h16" /><path d="M12 2 20 7H4z" /></SvgSm>;
export const IconNatureSm = () => <SvgSm><path d="M12 2 7 9h10z" /><path d="M12 7 8 13h8z" /><path d="M12 11 9 16h6z" /><path d="M12 16v6" /></SvgSm>;
export const IconFoodSm = () => <SvgSm><path d="M4 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3" /><path d="M6 12v9" /><path d="M17 3a3 3 0 0 0-3 3v5a2 2 0 0 0 2 2h1" /><path d="M17 13v8" /></SvgSm>;
export const IconSpiritualSm = () => <SvgSm><path d="M12 3v3" /><path d="M12 18v3" /><path d="M3 12h3" /><path d="M18 12h3" /><path d="M5.6 5.6l2.1 2.1" /><path d="M16.3 16.3l2.1 2.1" /><path d="M16.3 7.7l2.1-2.1" /><path d="M5.6 18.4l2.1-2.1" /><circle cx="12" cy="12" r="3" /></SvgSm>;
export const IconNightlifeSm = () => <SvgSm><path d="M8 22h8" /><path d="M12 11v11" /><path d="M5 3h14l-7 8z" /></SvgSm>;

// ---- Budget-tier icons (24px) ----
export const IconBackpacker = () => <Svg><path d="M6 8a6 6 0 0 1 12 0v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /><path d="M9 14h6" /></Svg>;
export const IconComfort = () => <Svg><path d="M3 10 12 3l9 7" /><path d="M5 9v11h14V9" /></Svg>;
export const IconPremiumTier = () => <Svg><path d="M12 3l2.5 6 6.5.5-5 4.2 1.6 6.3L12 17l-5.6 3 1.6-6.3-5-4.2 6.5-.5z" /></Svg>;
export const IconLuxury = () => <Svg><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M11 3 8 9l4 12 4-12-3-6" /><path d="M2 9h20" /></Svg>;

// ---- Transport icons (24px) ----
export const IconFlight = () => <Svg><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></Svg>;
export const IconTrain = () => <Svg><path d="M6 15V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" /><path d="M6 11h12" /><path d="M9 17l-2 3" /><path d="M15 17l2 3" /><circle cx="9.5" cy="14" r="0.6" /><circle cx="14.5" cy="14" r="0.6" /></Svg>;
export const IconRoad = () => <Svg><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.4L19 13" /><path d="M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /><circle cx="7.5" cy="16" r="0.6" /><circle cx="16.5" cy="16" r="0.6" /></Svg>;

export const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3" /><path d="M12 18v3" /><path d="M5.6 5.6l2.1 2.1" /><path d="M16.3 16.3l2.1 2.1" /><path d="M3 12h3" /><path d="M18 12h3" /><path d="M5.6 18.4l2.1-2.1" /><path d="M16.3 7.7l2.1-2.1" />
  </svg>
);
