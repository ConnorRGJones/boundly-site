// Features.jsx — Alternating full-width feature sections (Tipalti-style)

const CalendarMockup = () => (
  <div style={{
    background: '#fff', borderRadius: 16, padding: 28,
    boxShadow: '0 1px 5px -4px rgba(19,19,22,0.7), 0 0 0 1px rgba(34,42,53,0.08), 0 8px 32px rgba(34,42,53,0.08)',
  }}>
    <div style={{ fontFamily: "'Recoleta', serif", fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 16 }}>This week</div>
    {[
      { time: '9:00', title: '30 Min Chat — Sarah K.', color: '#C47D3F', duration: 2 },
      { time: '11:00', title: 'Product Demo — Acme Corp', color: '#6B8CFF', duration: 3 },
      { time: '14:30', title: 'Intro Call — Mike T.', color: '#4CAF7C', duration: 2 },
      { time: '16:00', title: 'Team Sync', color: '#242424', duration: 2 },
    ].map((ev, i) => (
      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#898989', width: 36, paddingTop: 2, flexShrink: 0 }}>{ev.time}</div>
        <div style={{
          flex: 1, borderRadius: 8, padding: '8px 12px',
          background: ev.color + '14',
          borderLeft: `3px solid ${ev.color}`,
        }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#242424' }}>{ev.title}</div>
        </div>
      </div>
    ))}
  </div>
);

const AutomationMockup = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    {[
      { icon: '✉', label: 'Confirmation sent', sub: 'Immediately on booking', active: true },
      { icon: '⏰', label: 'Reminder email', sub: '24 hours before', active: true },
      { icon: '📱', label: 'SMS reminder', sub: '1 hour before', active: true },
      { icon: '📝', label: 'Follow-up with notes', sub: '30 min after meeting', active: false },
    ].map((item, i) => (
      <div key={i} style={{
        background: '#fff', borderRadius: 12, padding: '16px 20px',
        boxShadow: '0 1px 5px -4px rgba(19,19,22,0.7), 0 0 0 1px rgba(34,42,53,0.08), 0 4px 8px rgba(34,42,53,0.05)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 9, background: '#f8f7f5',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0,
        }}>{item.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#242424' }}>{item.label}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#898989' }}>{item.sub}</div>
        </div>
        <div style={{
          width: 36, height: 20, borderRadius: 9999,
          background: item.active ? '#242424' : 'rgba(34,42,53,0.1)',
          position: 'relative', flexShrink: 0, cursor: 'pointer',
        }}>
          <div style={{
            position: 'absolute', top: 3, left: item.active ? 19 : 3,
            width: 14, height: 14, borderRadius: '50%', background: '#fff',
            transition: 'left 200ms',
          }} />
        </div>
      </div>
    ))}
  </div>
);

const TeamMockup = () => (
  <div style={{
    background: '#fff', borderRadius: 16, padding: 28,
    boxShadow: '0 1px 5px -4px rgba(19,19,22,0.7), 0 0 0 1px rgba(34,42,53,0.08), 0 8px 32px rgba(34,42,53,0.08)',
  }}>
    <div style={{ fontFamily: "'Recoleta', serif", fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 4 }}>Round-robin routing</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#898989', marginBottom: 20 }}>Next available teammate is assigned</div>
    {[
      { name: 'Connor J.', role: 'Sales', available: true, bookings: 12 },
      { name: 'Amelia R.', role: 'Sales', available: true, bookings: 9 },
      { name: 'Marcus T.', role: 'Sales', available: false, bookings: 14 },
    ].map((member, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
        borderBottom: i < 2 ? '1px solid rgba(34,42,53,0.06)' : 'none',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          background: ['#C47D3F20','#6B8CFF20','#4CAF7C20'][i],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Recoleta', serif", fontSize: 14, fontWeight: 700,
          color: ['#C47D3F','#6B8CFF','#4CAF7C'][i],
        }}>{member.name[0]}{member.name.split(' ')[1][0]}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#242424' }}>{member.name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#898989' }}>{member.role}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
            color: member.available ? '#4CAF7C' : '#898989',
            background: member.available ? '#4CAF7C18' : '#89898918',
            borderRadius: 9999, padding: '3px 8px',
          }}>{member.available ? 'Available' : 'Busy'}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#898989', marginTop: 3 }}>{member.bookings} this week</div>
        </div>
      </div>
    ))}
  </div>
);

const FeatureSection = ({ idx, label, heading, sub, bullets, mockup }) => {
  const isEven = idx % 2 === 0;
  return (
    <section style={{ background: idx % 2 === 0 ? '#fff' : '#f8f7f5', padding: '96px 32px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 72, alignItems: 'center',
      }}>
        <div style={{ order: isEven ? 1 : 2 }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
            color: '#C47D3F', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 14,
          }}>{label}</div>
          <h2 style={{
            fontFamily: "'Recoleta', serif", fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#111111',
            lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 18,
          }}>{heading}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#898989', lineHeight: 1.65, marginBottom: 28 }}>{sub}</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', background: '#C47D3F18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
                }}>
                  <span style={{ fontSize: 11, color: '#C47D3F', fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#242424', fontWeight: 500, lineHeight: 1.5 }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ order: isEven ? 2 : 1 }}>{mockup}</div>
      </div>
    </section>
  );
};

const BoundlyFeatures = () => {
  const sections = [
    {
      label: 'Smart availability',
      heading: 'Your calendar, finally under control.',
      sub: 'Set your working hours once. Boundly syncs across all your calendars and only shows times you\'re genuinely free — no double bookings, ever.',
      bullets: ['Sync Google, Outlook, and iCloud in one click', 'Buffer time between meetings, automatically', 'Block focus time and Boundly respects it'],
      mockup: <CalendarMockup />,
    },
    {
      label: 'Automations',
      heading: 'Set it once. Let it run.',
      sub: 'Every booking triggers the right workflow. Confirmations, reminders, follow-ups — sent at exactly the right time without you lifting a finger.',
      bullets: ['Confirmation emails sent instantly on booking', 'SMS and email reminders before every meeting', 'Post-meeting follow-ups with custom templates'],
      mockup: <AutomationMockup />,
    },
    {
      label: 'Team scheduling',
      heading: 'Coordinate your team without the chaos.',
      sub: 'Round-robin, collective, or fixed-host — route bookings to the right person automatically. No spreadsheets, no Slack messages, no manual juggling.',
      bullets: ['Round-robin routing based on availability', 'Collective scheduling for group sessions', 'Real-time team capacity at a glance'],
      mockup: <TeamMockup />,
    },
  ];

  return (
    <>
      {sections.map((s, i) => <FeatureSection key={i} idx={i} {...s} />)}
    </>
  );
};

Object.assign(window, { BoundlyFeatures });
