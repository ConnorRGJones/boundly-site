// Hero.jsx — tighter, Cal.com-style with recruiting shortlist mockup
const BoundlyHero = ({ onNavigate }) => {
  return (
    <section id="hero" style={{
      background: '#111111', padding: '0 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.028,
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '48px 48px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 140, paddingBottom: 0, position: 'relative' }}>
        {/* Eyebrow */}
        <Reveal delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            GTM Recruitment&nbsp;·&nbsp;UK B2B SaaS&nbsp;·&nbsp;Pre-Seed to Series B
          </span>
        </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={80}>
        <h1 style={{
          fontFamily: "'Recoleta', serif", fontWeight: 900,
          fontSize: 'clamp(40px, 5.5vw, 64px)',
          color: '#ffffff', lineHeight: 1.04, letterSpacing: '-1.5px',
          maxWidth: 680, marginBottom: 20,
        }}>
          We've built GTM teams from the{' '}
          <em style={{ color: '#C47D3F', fontStyle: 'italic' }}>inside out.</em>
        </h1>
        </Reveal>

        {/* Sub */}
        <Reveal delay={160}>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: 16,
          color: 'rgba(255,255,255,0.45)', lineHeight: 1.65,
          maxWidth: 480, marginBottom: 36,
        }}>
          Boutique GTM recruitment for UK SaaS companies from pre-seed through Series B. We specialise in commercial hiring at the stages where the right people define the trajectory of the business.
        </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={240}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 120 }}>
          <button onClick={() => onNavigate('contact')} style={{
            background: '#C47D3F', color: '#fff', border: 'none', borderRadius: 8,
            padding: '11px 22px', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
            cursor: 'pointer', boxShadow: 'rgba(255,255,255,0.18) 0 2px 0 inset', transition: 'opacity 200ms',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Start a conversation</button>
          <button onClick={() => onNavigate('how-we-work')} style={{
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
            padding: '11px 22px', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
            cursor: 'pointer', transition: 'background 200ms',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >How we work →</button>
        </div>
        </Reveal>

        {/* Abstract visual removed */}

      </div>
    </section>
  );
};

// Abstract hero visual — hiring funnel concept, no names or data
const HeroVisual = () => {
  const stages = [
    { label: 'Market mapped', width: '100%', color: 'rgba(255,255,255,0.07)', filled: 'rgba(255,255,255,0.13)' },
    { label: 'Approached', width: '72%', color: 'rgba(255,255,255,0.07)', filled: 'rgba(196,125,63,0.25)' },
    { label: 'Engaged', width: '44%', color: 'rgba(255,255,255,0.07)', filled: 'rgba(196,125,63,0.45)' },
    { label: 'Shortlisted', width: '18%', color: 'rgba(255,255,255,0.07)', filled: '#C47D3F' },
  ];

  return (
    <div style={{
      width: '100%', maxWidth: 680,
      background: '#191919',
      border: '1px solid rgba(255,255,255,0.08)',
      borderBottom: 'none',
      borderRadius: '14px 14px 0 0',
      overflow: 'hidden',
      padding: '32px 36px 36px',
    }}>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 28 }}>
        Search funnel
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {stages.map((s, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: i === stages.length - 1 ? '#C47D3F' : 'rgba(255,255,255,0.4)' }}>{s.label}</span>
            </div>
            <div style={{ height: 6, borderRadius: 9999, background: s.color, overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: s.width, background: s.filled,
                borderRadius: 9999,
                transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
              }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Every search built from scratch</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: '#C47D3F' }}>Active search</span>
      </div>
    </div>
  );
};

Object.assign(window, { BoundlyHero, HeroVisual });
