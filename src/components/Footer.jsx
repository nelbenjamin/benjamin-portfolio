import { Link } from 'react-router-dom';
import { Link as LinkIcon, Mail, Phone, MapPin, Code2, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #1d6feb, #2979ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={18} color="white" />
              </div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 17, color: 'var(--text-primary)' }}>Benjamin<span className="gradient-text">.dev</span></div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 280 }}>
              Graduate Software Developer building reliable, full-stack applications with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Me' }, { to: '/projects', label: 'Projects' }, { to: '/contact', label: 'Contact' }].map(l => (
                <Link key={l.to} to={l.to} style={{ fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--blue)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:benjaminintja@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none' }}>
                <Mail size={14} color="var(--blue)" /> benjaminintja@gmail.com
              </a>
              <a href="tel:+264815631477" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none' }}>
                <Phone size={14} color="var(--blue)" /> +264 81 563 1477
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                <MapPin size={14} color="var(--blue)" /> Rundu, Namibia
              </div>
              <a href="https://github.com/nelbenjamin" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none' }}>
                <LinkIcon size={14} color="var(--blue)" /> github.com/nelbenjamin <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Benjamin Intja Hairungu. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}