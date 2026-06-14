import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Mail, Download, Code2, Database, Globe, Terminal, GitBranch, ShieldCheck } from 'lucide-react';

const TECH = [
  { name: 'C#', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'PHP', icon: Terminal },
  { name: 'SQL', icon: Database },
  { name: 'React', icon: Globe },
  { name: 'Git', icon: GitBranch },
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: 'Full SDLC Experience', desc: 'From requirements gathering to deployment — proven across delivered client projects.' },
  { icon: Database, title: 'Database Design', desc: 'Schema design, normalization, and high-performance SQL across MySQL and SQL Server.' },
  { icon: Code2, title: 'Full-Stack Development', desc: 'C#, PHP, JavaScript, React — building both desktop and web applications end-to-end.' },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px 80px' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, #2979ff20 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, #1d6feb15 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">

            {/* Left - Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.25)', borderRadius: 30, padding: '6px 16px', marginBottom: 24 }}>
                <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: '#00c896' }} />
                <span style={{ fontSize: 13, color: '#2979ff', fontWeight: 600 }}>Available for opportunities</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-display" style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 20 }}>
                Hi, I'm <span className="gradient-text">Benjamin</span><br />
                Graduate Software<br />Developer
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
                A high-achieving Computer Science Honours graduate from the University of Namibia, with hands-on experience delivering complete software solutions — from a licensed desktop application for a paying client to a full-stack web platform.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                <Link to="/projects" className="btn-primary" style={{ padding: '15px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  View My Work <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline" style={{ padding: '15px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Mail size={17} /> Get In Touch
                </Link>
              </motion.div>

              {/* Tech stack pills */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 12 }}>TECH STACK</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {TECH.map((t, i) => (
                    <motion.div key={t.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.06 }}
                      className="skill-tag" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>
                      <t.icon size={14} color="var(--blue)" /> {t.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Photo / Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="animate-float" style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
                <div style={{ position: 'absolute', inset: -20, background: 'linear-gradient(135deg, #1d6feb40, #00c8ff20)', borderRadius: 32, filter: 'blur(40px)', opacity: 0.6 }} />
                <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', border: '2px solid var(--border-bright)', aspectRatio: '1/1' }}>
                  <img src="/profile.jpg" alt="Benjamin Hairungu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, #020408cc 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                    <div style={{ fontSize: 13, color: '#2979ff', fontWeight: 700, marginBottom: 4 }}>BSc COMPUTER SCIENCE HONOURS</div>
                    <div style={{ fontSize: 16, color: 'white', fontWeight: 700 }}>University of Namibia</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 28 }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(41,121,255,0.12)', border: '1px solid rgba(41,121,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <h.icon size={24} color="var(--blue)" />
                </div>
                <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{h.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #0d2444, #0a1525)', border: '1px solid var(--border-bright)',
              borderRadius: 24, padding: '56px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'radial-gradient(circle, #2979ff30 0%, transparent 70%)', borderRadius: '50%' }} />
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: 16, position: 'relative' }}>
              Ready to build something <span className="gradient-text">great</span>?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 28px', position: 'relative' }}>
              I'm currently available and open to new opportunities. Let's talk about how I can contribute to your team.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={16} /> Contact Me
              </Link>
              <a href="https://github.com/nelbenjamin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                 <ExternalLink size={16} /> View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}