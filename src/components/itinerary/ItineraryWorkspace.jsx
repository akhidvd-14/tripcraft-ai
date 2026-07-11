import ItineraryHeader from './ItineraryHeader.jsx';
import DayTabs from './DayTabs.jsx';
import ActivityCard from './ActivityCard.jsx';
import FoodSpots from './FoodSpots.jsx';
import Sidebar from './Sidebar.jsx';

export default function ItineraryWorkspace({ header, dayTabs, activities, onAddActivity, foodSpots, sidebar }) {
  return (
    <div style={{ animation: 'tcfade .4s ease both' }}>
      <ItineraryHeader {...header} />

      <div className="tc-itin-grid tc-pad-x" style={{ maxWidth: 1200, margin: '0 auto', padding: 28, alignItems: 'start' }}>
        <div>
          <DayTabs {...dayTabs} />

          <div style={{ fontSize: 12, color: 'var(--tc-muted-3)', marginBottom: 12 }}>
            ✎ Drag cards to reorder · tap ✨ to swap an activity you don't love · × to remove
          </div>

          <div>
            {activities.map((a) => <ActivityCard key={a.id} a={a} />)}
          </div>

          <button onClick={onAddActivity} style={{ width: '100%', border: `1.5px dashed rgba(var(--tc-border-rgb),.25)`, background: 'none', borderRadius: 14, padding: 14, fontSize: 14, fontWeight: 600, color: 'var(--tc-tag-fg)', cursor: 'pointer', marginTop: 4 }}>
            + Add your own stop
          </button>

          <FoodSpots foodSpots={foodSpots} />
        </div>

        <Sidebar {...sidebar} />
      </div>
    </div>
  );
}
