// Process.jsx — Clean editorial cards, no ATS mockups

const BoundlyProcess = () => {
  const isMobile = useMobile();
  const steps = [
    {
      num: '01',
      label: 'Brief and market mapping',
      body: 'We spend time understanding your stage, your culture, and exactly what good looks like before we start searching. No assumptions, no shortcuts.',
      pull: 'The brief is where most agencies cut corners. We don\'t.',
    },
    {
      num: '02',
      label: 'Active search, not a database',
      body: 'Every search is curated from scratch. We go to market directly, find people who are perfectly suited to your brief, and approach them thoughtfully on your behalf.',
      pull: 'We build every longlist fresh. Your search is never recycled.',
    },
    {
      num: '03',
      label: 'Honest shortlists',
      body: "We'd rather send you three people we genuinely believe in than ten to hit a number. Every candidate comes with a clear view of fit — personally and professionally.",
      pull: 'Three names you\'ll want to meet. Not ten to fill a deck.',
    },
    {
      num: '04',
      label: 'End-to-end support',
      body: 'We stay closely connected through interview prep, offer stage, and managing notice periods. The role isn\'t complete when the shortlist lands. We want to feel like an extension of your team.',
      pull: 'Still here at offer. Still here at start date.',
    },
  ];

  return (
    <section id="how-we-work" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Process</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: "'Recoleta', serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: '#111111', lineHeight: 1.08, letterSpacing: '-0.8px', margin: 0 }}>
              How we work<span style={{ color: '#C47D3F' }}>.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#898989', lineHeight: 1.65, maxWidth: 380, margin: 0 }}>
              A small client list means every search gets proper attention. No juniors running your process.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <RevealGroup stagger={100} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 2 }} className="process-grid">
          {steps.map((step, i) => (
            <ProcessCard key={i} {...step} dark={isMobile ? i % 2 === 1 : (i === 1 || i === 2)} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

const ProcessCard = ({ num, label, body, pull, dark }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      className="process-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: dark ? '#111111' : '#f8f7f5',
        padding: '48px 44px',
        display: 'flex', flexDirection: 'column',
        minHeight: 280,
        transition: 'background 300ms',
        position: 'relative', overflow: 'hidden',
      }}>
      {/* Large background number */}
      <div style={{
        position: 'absolute', bottom: -16, right: 24,
        fontFamily: "'Recoleta', serif", fontWeight: 900,
        fontSize: 120, lineHeight: 1,
        color: dark ? 'rgba(255,255,255,0.03)' : 'rgba(34,42,53,0.04)',
        userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-4px',
      }}>{num}</div>

      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>{num}</div>

      <h3 style={{
        fontFamily: "'Recoleta', serif", fontWeight: 700,
        fontSize: 22, color: dark ? '#ffffff' : '#111111',
        lineHeight: 1.2, letterSpacing: '-0.2px', marginBottom: 14,
      }}>{label}</h3>

      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: 14,
        color: dark ? 'rgba(255,255,255,0.45)' : '#6b6b6b',
        lineHeight: 1.7, margin: 0, marginBottom: 28, flex: 1,
      }}>{body}</p>


    </div>
  );
};

Object.assign(window, { BoundlyProcess });
