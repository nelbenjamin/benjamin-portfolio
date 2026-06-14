import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(2,4,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 11,
            background: 'linear-gradient(135deg, #1d6feb, #2979ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 18px #2979ff40',
          }}>
            <Code2 size={19} color="white" />
          </div>
          <div className="font-display" style={{ fontWeight: 800, fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Benjamin<span className="gradient-text">.dev</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'none', gap: 36 }} className="desktop-nav">
          {LINKS.map(link => (
            <Link key={link.path} to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ textDecoration: 'none', fontSize: 14, fontWeight: 500, paddingBottom: 4 }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary desktop-cta"
          style={{ display: 'none', padding: '10px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
          Hire Me
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle"
          style={{ display: 'flex', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 8 }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', marginTop: 16 }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1200, margin: '0 auto' }}>
              {LINKS.map(link => (
                <Link key={link.path} to={link.path}
                  style={{ textDecoration: 'none', fontSize: 16, fontWeight: 600, color: location.pathname === link.path ? 'var(--blue)' : 'var(--text-secondary)' }}>
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary" style={{ padding: '12px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}