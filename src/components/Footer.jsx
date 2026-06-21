import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Phone, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', marginTop: 80, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}>
                <GraduationCap size={18} color="white" />
              </div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-primary)' }}>Benjamin Hairungu <span className="gradient-text">Portfolio</span></div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 280 }}>
              Computer Science Honours graduate building reliable, full-stack applications with clean code and thoughtful design.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Me' }, { to: '/projects', label: 'Projects' }, { to: '/contact', label: 'Contact' }].map(l => (
                <Link key={l.to} to={l.to} style={{ fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => { e.target.style.color = 'var(--blue)'; e.target.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.transform = 'translateX(0)'; }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:benjaminintja@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={14} color="var(--blue)" /> benjaminintja@gmail.com
              </a>
              <a href="tel:+264815631477" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Phone size={14} color="var(--blue)" /> +264 81 563 1477
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                <MapPin size={14} color="var(--blue)" /> Rundu, Namibia
              </div>
              <a href="https://github.com/nelbenjamin" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <ExternalLink size={14} color="var(--blue)" /> github.com/nelbenjamin
              </a>
            </div>
          </motion.div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Benjamin Intja Hairungu. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}