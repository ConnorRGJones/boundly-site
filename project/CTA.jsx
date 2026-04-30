// About + Roles + CTA + Footer

const BoundlyAbout = () => (
  <section id="about" style={{ background: '#fff', padding: '80px 32px' }}>
    <div className="about-grid" style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

      {/* Left: label + heading + timeline */}
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>About</div>
        <Reveal delay={0}>
          <h2 style={{ fontFamily: "'Recoleta', serif", fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#111111', lineHeight: 1.08, letterSpacing: '-0.8px', marginBottom: 28 }}>
            The person behind Boundly<span style={{ color: '#C47D3F' }}>.</span>
          </h2>
        </Reveal>
        <RevealGroup stagger={80} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { co: 'Saleslogic', role: 'GTM Recruiter (Agency)', note: 'Placed GTM talent into UK SaaS businesses.', color: '#C47D3F', years: '2019–2021' },
            { co: 'Red Sift', role: 'Sole In-House Recruiter', note: '130+ hires across all departments, joined at Series A.', color: '#4CAF7C', years: '2021–2024' },
            { co: 'Cellebrite', role: 'GTM & Specialist Hiring', note: '48 hires across GTM at public scale.', color: '#6B7FFF', years: '2024–2025' },
            { co: 'Boundly', role: 'Founder', note: 'Boutique GTM recruitment. Built on both sides.', color: '#C47D3F', years: 'Current' },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i < arr.length - 1 ? 20 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, marginTop: 4, flexShrink: 0 }} />
                {i < arr.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(34,42,53,0.1)', marginTop: 4 }} />}
              </div>
              <div style={{ paddingBottom: i < arr.length - 1 ? 4 : 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 2 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#111111' }}>{item.co}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#898989' }}>{item.years}</span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: '#242424', marginBottom: 3 }}>{item.role}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#898989', lineHeight: 1.5 }}>{item.note}</div>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>

      {/* Right: photo + bio */}
      <Reveal delay={120}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{
            width: '100%', aspectRatio: '4/3',
            borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 1px 5px -4px rgba(19,19,22,0.7), 0 0 0 1px rgba(34,42,53,0.08)',
          }}>
            <img src="images/connor.jpg" alt="Connor Jones" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#555', lineHeight: 1.8, margin: 0 }}>
              I started Boundly because placing GTM talent and understanding GTM teams are two different things. Most agencies know how to fill a role. Far fewer understand how that role sits within the org, or what the person next to them actually needs.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#555', lineHeight: 1.8, margin: 0 }}>
              That combination of knowing how agencies work and knowing what it actually feels like to be responsible for the hire is what Boundly is built on. I work with a small number of clients at a time so no one gets lost in the shuffle. No juniors, no one cut out of the loop.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#111', lineHeight: 1.7, margin: 0 }}>
              If you're building a GTM team at Series A or B and want to work with someone who's been on both sides of the table, I'd like to talk.
            </p>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);

const BoundlyRoles = () => {
  const roles = [
    'Account Executives', 'SDRs & BDRs', 'VP Sales', 'Head of CS',
    'Customer Success Manager', 'RevOps', 'Sales Enablement', 'CMO',
    'Demand Generation', 'Marketing Manager', 'Product Marketing', 'Technical Writer',
    'Channel Director', 'Partnership Managers', 'Sales / Solutions Engineer', 'Professional Services',
  ];

  return (
    <section id="roles" style={{ background: '#f8f7f5', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Scope</div>
            <h2 style={{ fontFamily: "'Recoleta', serif", fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#111111', lineHeight: 1.08, letterSpacing: '-0.8px', margin: 0 }}>
              Roles we fill<span style={{ color: '#C47D3F' }}>.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#898989', lineHeight: 1.65, maxWidth: 340, margin: 0 }}>
            Open to other roles where we can genuinely add value.
          </p>
        </div>
        <div className="roles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {roles.map((role, i) => (
            <RoleChip key={i} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RoleChip = ({ role }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#111111' : '#fff',
        borderRadius: 10, padding: '14px 16px',
        fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
        color: hov ? '#fff' : '#242424',
        cursor: 'default', transition: 'all 200ms',
        boxShadow: '0 0 0 1px rgba(34,42,53,0.08)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: hov ? '#C47D3F' : 'rgba(34,42,53,0.18)', flexShrink: 0, transition: 'background 200ms' }} />
      {role}
    </div>
  );
};

const BoundlyCTA = () => {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('form-name', 'contact');
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('company', form.company);
    data.append('message', form.message);
    fetch('/', { method: 'POST', body: data })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  return (
    <section id="contact" style={{ background: '#111111', padding: '80px 32px' }}>
      <div className="contact-grid" style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#C47D3F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Get in touch</div>
          <h2 style={{ fontFamily: "'Recoleta', serif", fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#ffffff', lineHeight: 1.08, letterSpacing: '-0.8px', marginBottom: 20 }}>
            Ready to build your GTM team<span style={{ color: '#C47D3F' }}>?</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 40 }}>
            Work with someone who's been on both sides. Small client list, total focus.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Response within 24 hours', 'No obligation initial call', 'Boutique — not a volume business'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#C47D3F18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, color: '#C47D3F' }}>✓</span>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#1a1a1a', borderRadius: 16, padding: '36px 32px', border: '1px solid rgba(255,255,255,0.07)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontFamily: "'Recoleta', serif", fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 10 }}>Thank you<span style={{ color: '#C47D3F' }}>.</span></div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>I'll be in touch within 24 hours.</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontFamily: "'Recoleta', serif", fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 10 }}>Something went wrong<span style={{ color: '#C47D3F' }}>.</span></div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Please email me directly at <a href="mailto:connor@boundly.io" style={{ color: '#C47D3F' }}>connor@boundly.io</a></p>
            </div>
          ) : (
            <form name="contact" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              {[
                { key: 'name', label: 'Name *', placeholder: 'Your name', type: 'text' },
                { key: 'email', label: 'Email *', placeholder: 'your@company.com', type: 'email' },
                { key: 'company', label: 'Company *', placeholder: 'Company name', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{f.label}</label>
                  <input required type={f.type} placeholder={f.placeholder}
                    value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{
                      width: '100%', padding: '10px 14px', borderRadius: 8, border: 'none',
                      background: 'rgba(255,255,255,0.05)', color: '#fff',
                      fontFamily: "'Inter', sans-serif", fontSize: 13,
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.08)', outline: 'none',
                    }}
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(196,125,63,0.45)'}
                    onBlur={e => e.target.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.08)'}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message</label>
                <textarea placeholder="Tell me about the role you're trying to fill..."
                  value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  rows={3}
                  style={{
                    width: '100%', padding: '10px 14px', borderRadius: 8, border: 'none',
                    background: 'rgba(255,255,255,0.05)', color: '#fff',
                    fontFamily: "'Inter', sans-serif", fontSize: 13, resize: 'vertical',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.08)', outline: 'none',
                  }}
                  onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(196,125,63,0.45)'}
                  onBlur={e => e.target.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.08)'}
                />
              </div>
              <button type="submit" style={{
                background: '#C47D3F', color: '#fff', border: 'none', borderRadius: 8,
                padding: '12px 0', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
                cursor: 'pointer', boxShadow: 'rgba(255,255,255,0.18) 0 2px 0 inset',
                transition: 'opacity 200ms', marginTop: 4,
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Submit →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const BoundlyFooter = () => (
  <footer style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 32px' }}>
    <div className="footer-inner" style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <div style={{ fontFamily: "'Recoleta', serif", fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.3px' }}>
        Bound<span style={{ color: '#C47D3F' }}>ly.</span>
      </div>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>
        © 2026 Boundly · GTM Recruitment · UK B2B SaaS
      </span>
      <a href="https://www.linkedin.com/company/boundlyio/" target="_blank" rel="noopener noreferrer" style={{
        fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
        color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 150ms',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
      >LinkedIn →</a>
    </div>
  </footer>
);

Object.assign(window, { BoundlyAbout, BoundlyRoles, BoundlyCTA, BoundlyFooter });
