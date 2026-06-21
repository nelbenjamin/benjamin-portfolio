import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Send, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import BusinessShowcase from '../components/BusinessShowcase';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojoaerq';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const CONTACT_INFO = [
    { icon: Mail, label: 'Email', value: 'benjaminintja@gmail.com', href: 'mailto:benjaminintja@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+264 81 563 1477', href: 'tel:+264815631477' },
    { icon: MapPin, label: 'Location', value: 'Rundu, Namibia', href: null },
    { icon: ExternalLink, label: 'GitHub', value: 'github.com/nelbenjamin', href: 'https://github.com/nelbenjamin' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>

      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 12 }}>
          GET IN TOUCH
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em', color: '#ffffff' }}>
          Let's Build Something <span className="gradient-text">Together</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          I'm currently available and open to new opportunities. Whether you have a question, a project in mind, or just want to connect — reach out below.
        </motion.p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 32 }} className="contact-grid">

        {/* Contact info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CONTACT_INFO.map((info, i) => {
            const content = (
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 22, display: 'flex', alignItems: 'center', gap: 16, cursor: info.href ? 'pointer' : 'default', boxShadow: '0 2px 12px rgba(15,27,45,0.04)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--blue-subtle)', border: '1px solid rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <info.icon size={20} color="var(--blue)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{info.label}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600 }}>{info.value}</div>
                </div>
              </motion.div>
            );
            return info.href ? (
              <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {content}
              </a>
            ) : <div key={info.label}>{content}</div>;
          })}

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ background: 'linear-gradient(135deg, #0f1b2d, #15233a)', border: '1px solid var(--border-bright)', borderRadius: 16, padding: 22, marginTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#34d399' }}>Currently Available</span>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>
              Open to full-time roles, freelance projects, and collaboration opportunities. Willing to relocate.
            </p>
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20, padding: 36, boxShadow: '0 4px 20px rgba(15,27,45,0.05)' }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>Send a Message</h2>

          {status === 'sent' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={26} color="#10b981" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>Message Sent!</h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Thanks for reaching out — I'll get back to you as soon as possible.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: 20, padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 600 }}>
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="input-field" placeholder="Your name" style={{ width: '100%', padding: '13px 14px 13px 42px', borderRadius: 12, fontSize: 14 }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="input-field" placeholder="you@example.com" style={{ width: '100%', padding: '13px 14px 13px 42px', borderRadius: 12, fontSize: 14 }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={16} style={{ position: 'absolute', left: 14, top: 16, color: 'var(--text-muted)' }} />
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="input-field" placeholder="Tell me about your project or opportunity..." style={{ width: '100%', padding: '13px 14px 13px 42px', borderRadius: 12, fontSize: 14, resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
              </div>
              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#ef4444' }}>Something went wrong. Please try again or email me directly.</p>
              )}
              <motion.button type="submit" disabled={status === 'sending'} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="btn-primary"
                style={{ padding: '15px', borderRadius: 12, fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                {status === 'sending' ? (
                  <div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                ) : (
                  <>Send Message <Send size={17} /></>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`@media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>

      {/* Business Showcase */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: 64 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 10 }}>SIDE PROJECT</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
            My Freelance <span className="gradient-text">Services</span>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 480, margin: '12px auto 0', lineHeight: 1.7 }}>
            Outside of my main work, I run a small freelance services business building websites, apps and systems for individuals and small businesses.
          </p>
        </div>
        <BusinessShowcase />
      </motion.div>
    </motion.div>
  );
}