// Stats.jsx — tighter, Cal.com style
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      observer.disconnect();
      let startTime = null;
      const tick = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        setCount(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
};

const StatItem = ({ value, suffix, label, sub }) => {
  const [count, ref] = useCounter(value);
  return (
    <div ref={ref} style={{ padding: '32px 0', textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Recoleta', serif", fontWeight: 900,
        fontSize: 'clamp(40px, 5vw, 60px)', color: '#111111',
        letterSpacing: '-2px', lineHeight: 1,
      }}>{count}{suffix}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#242424', marginTop: 8 }}>{label}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#898989', marginTop: 4, lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
};

const BoundlyStats = () => (
  <section style={{ background: '#fff', borderBottom: '1px solid rgba(34,42,53,0.07)' }}>
    <div className="stats-grid" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {[
        { value: 130, suffix: '+', label: 'Hires made', sub: 'Across Series A to public scale' },
        { value: 92, suffix: '%', label: 'Offer acceptance', sub: 'Candidates who said yes and meant it' },
        { value: 7, suffix: '+', label: 'Years in GTM hiring', sub: 'Agency and in-house combined' },
      ].map((s, i) => (
        <div key={i} className={i < 2 ? 'stats-divider' : ''} style={{ borderRight: i < 2 ? '1px solid rgba(34,42,53,0.07)' : 'none', padding: '0 32px' }}>
          <Reveal delay={i * 120}><StatItem {...s} /></Reveal>
        </div>
      ))}
    </div>
  </section>
);

// Founder quote bar
const BoundlyQuote = () => (
  <section style={{ background: '#f8f7f5', padding: '56px 32px', borderBottom: '1px solid rgba(34,42,53,0.07)' }}>
    <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
      <Reveal>
        <p style={{
          fontFamily: "'Recoleta', serif", fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: 600, color: '#111111', lineHeight: 1.55, letterSpacing: '-0.3px',
          marginBottom: 20,
        }}>
          "I've sat on both sides of the desk — placing talent as an agency recruiter and owning the hiring as an in-house lead. Boundly is built on that experience."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#C47D3F22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Recoleta', serif", fontSize: 11, fontWeight: 700, color: '#C47D3F' }}>CJ</div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#898989', fontWeight: 500 }}>Connor Jones, Founder — Boundly</span>
        </div>
      </Reveal>
    </div>
  </section>
);

Object.assign(window, { BoundlyStats, BoundlyQuote });
