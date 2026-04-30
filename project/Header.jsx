// Header.jsx — Boundly recruiting site
const BoundlyHeader = ({ onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'how-we-work', label: 'How we work' },
    { id: 'about', label: 'About' },
    { id: 'roles', label: 'Roles' },
  ];

  const nav = (id) => { onNavigate(id); setMobileOpen(false); };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || mobileOpen ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
      boxShadow: scrolled || mobileOpen ? '0 0 0 1px rgba(34,42,53,0.08)' : 'none',
      transition: 'all 300ms ease',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', gap: 32,
      }}>
        {/* Logo: text on dark (preserves copper), PNG image once scrolled */}
        <button onClick={() => nav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
          {scrolled || mobileOpen
            ? <img src="images/boundly-logo.png" alt="Boundly" style={{ height: 26, display: 'block' }} />
            : <span style={{ fontFamily: "'Recoleta', serif", fontWeight: 900, fontSize: 22, letterSpacing: '-0.3px', lineHeight: 1, color: '#fff' }}>
                Bound<span style={{ color: '#C47D3F' }}>ly.</span>
              </span>
          }
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 2, flex: 1 }} className="desktop-nav">
          {links.map(link => (
            <button key={link.id} onClick={() => nav(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500,
              color: scrolled ? '#898989' : 'rgba(255,255,255,0.6)',
              padding: '6px 12px', borderRadius: 6, transition: 'color 150ms',
            }}
              onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#111' : '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#898989' : 'rgba(255,255,255,0.6)'}
            >{link.label}</button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button onClick={() => nav('contact')} className="desktop-cta" style={{
          background: '#C47D3F', color: '#fff', border: 'none', borderRadius: 8,
          padding: '9px 18px', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
          cursor: 'pointer', boxShadow: 'rgba(255,255,255,0.2) 0 2px 0 inset',
          transition: 'opacity 200ms', flexShrink: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Start a conversation</button>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: 5, padding: 4, marginLeft: 'auto',
          }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 1,
              background: scrolled || mobileOpen ? '#111' : '#fff',
              transition: 'all 250ms',
              transform: mobileOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid rgba(34,42,53,0.08)',
          background: 'rgba(255,255,255,0.98)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(link => (
            <button key={link.id} onClick={() => nav(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500, color: '#242424',
              padding: '12px 0', borderBottom: '1px solid rgba(34,42,53,0.06)',
            }}>{link.label}</button>
          ))}
          <button onClick={() => nav('contact')} style={{
            background: '#C47D3F', color: '#fff', border: 'none', borderRadius: 8,
            padding: '13px 0', fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600,
            cursor: 'pointer', marginTop: 12, textAlign: 'center',
          }}>Start a conversation</button>
        </div>
      )}
    </header>
  );
};
Object.assign(window, { BoundlyHeader });
