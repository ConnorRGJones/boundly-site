// Testimonials.jsx
const BoundlyTestimonials = () => {
  const isMobile = useMobile();
  const [current, setCurrent] = React.useState(0);
  const touchStartX = React.useRef(null);

  const testimonials = [
    {
      quote: "Connor possesses an exceptional ability to advise on job roles and identify the perfect candidates. His skills go beyond matching resumes — he's a master recruiter who can effectively sell in a role, and his negotiation skills are top-notch.",
      name: "Claudia Belardo",
      title: "VP Customer Success & Experience",
      company: "Red Sift",
      initials: "CB",
      color: "#C47D3F",
    },
    {
      quote: "Connor truly stands out with his unique blend of expertise, creativity, and business acumen. He has a special ability to combine professionalism with a sense of fun — creating an engaging experience for candidates and business leaders alike.",
      name: "Hamutal Alon",
      title: "HR Leader · Talent Strategy",
      company: "Cellebrite",
      initials: "HA",
      color: "#6B7FFF",
    },
    {
      quote: "Highly professional and an excellent recruiter. I was very impressed by Connor's detailed market knowledge and knowledge of his clients. I would highly recommend Connor to any consultant looking for their next step.",
      name: "Omar K.",
      title: "Sales Development Leader",
      company: "Saleslogic",
      initials: "OK",
      color: "#4CAF7C",
    },
  ];

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  const Card = ({ t }) => (
    <div style={{
      background: '#1a1a1a', borderRadius: 14, padding: '28px 24px',
      border: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column', gap: 20,
      height: '100%',
    }}>
      <div style={{ fontFamily: "'Recoleta', serif", fontSize: 36, color: '#C47D3F', lineHeight: 0.8, opacity: 0.35, userSelect: 'none' }}>"</div>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7,
        color: 'rgba(255,255,255,0.6)', flex: 1, margin: 0,
      }}>{t.quote}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          background: t.color + '20',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: t.color,
        }}>{t.initials}</div>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#fff' }}>{t.name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{t.title} · {t.company}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" style={{ background: '#111111', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 10 }}>
                What people say
              </div>
              <h2 style={{
                fontFamily: "'Recoleta', serif", fontWeight: 900,
                fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#ffffff',
                lineHeight: 1.08, letterSpacing: '-0.8px', margin: 0,
              }}>Heard from both sides<span style={{ color: '#C47D3F' }}>.</span></h2>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.2)', maxWidth: 260, lineHeight: 1.6, margin: 0 }}>
              All recommendations taken from LinkedIn — publicly visible on Connor Jones' profile.
            </p>
          </div>
        </Reveal>

        {isMobile ? (
          <Reveal>
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{ position: 'relative', userSelect: 'none' }}
            >
              <Card t={testimonials[current]} />

              {/* Dot indicators */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? 20 : 8,
                      height: 8, borderRadius: 4,
                      background: i === current ? '#C47D3F' : 'rgba(255,255,255,0.15)',
                      border: 'none', cursor: 'pointer', padding: 0,
                      transition: 'all 300ms',
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                <button onClick={prev} style={{
                  background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 8,
                  color: '#fff', padding: '8px 20px', cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1,
                }}>←</button>
                <button onClick={next} style={{
                  background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 8,
                  color: '#fff', padding: '8px 20px', cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1,
                }}>→</button>
              </div>
            </div>
          </Reveal>
        ) : (
          <RevealGroup stagger={100} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, alignItems: 'stretch' }} className="test-grid">
            {testimonials.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </RevealGroup>
        )}

      </div>
    </section>
  );
};
Object.assign(window, { BoundlyTestimonials });
