import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Monitor, Smartphone, Settings, Code2, ShieldCheck, Zap, Users, Headphones, Phone, MessageCircle } from 'lucide-react';

const BUILD_ITEMS = [
  { icon: Monitor, label: 'Websites', desc: 'Modern, responsive and fast websites that represent your brand perfectly.' },
  { icon: Smartphone, label: 'Mobile Apps', desc: 'Custom mobile applications for Android and iOS built for performance.' },
  { icon: Settings, label: 'Systems', desc: 'Powerful and scalable systems to streamline your business operations.' },
  { icon: Code2, label: 'Custom Solutions', desc: 'Have a unique idea? I bring it to life with solutions tailored just for you.' },
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'Reliable', desc: 'Secure, tested and built to last.' },
  { icon: Zap, label: 'Performance', desc: 'Fast, optimized and efficient solutions.' },
  { icon: Users, label: 'User Focused', desc: 'Designed with your users in mind.' },
  { icon: Headphones, label: 'Ongoing Support', desc: "I'm here even after delivery." },
];

export default function BusinessShowcase() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ borderRadius: 28, overflow: 'hidden', position: 'relative', background: 'linear-gradient(160deg, #0a1224 0%, #0f1b35 50%, #0a1628 100%)', boxShadow: '0 30px 70px rgba(10,22,40,0.25)' }}>

      {/* Animated ambient glow blobs */}
      <motion.div animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '-10%', right: '-5%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <motion.div animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(20px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)' }}>

        {/* "Motion poster" badge — signals this is the auto-playing showcase */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 30, padding: '6px 14px', marginBottom: 24 }}>
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#60a5fa' }} />
          <span style={{ fontSize: 12, color: '#93c5fd', fontWeight: 600, letterSpacing: '0.04em' }}>LIVE SHOWCASE</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 48 }} className="showcase-grid">

          {/* Left: animated text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: 12, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.14em', marginBottom: 10 }}>
              WE DESIGN · WE BUILD · WE DELIVER
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'white', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Digital Solutions<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built For You</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ fontSize: 14.5, color: '#a8b8d0', lineHeight: 1.75, marginBottom: 28, maxWidth: 380 }}>
              Custom websites, mobile apps and systems tailored to your needs and goals — this is my freelance services side project, where I build digital solutions for individuals and small businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:+264815631477" className="btn-primary" style={{ padding: '12px 22px', borderRadius: 12, fontSize: 13.5, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={15} /> 0815631477
              </a>
              <a href="mailto:benjaminintja@gmail.com" style={{ padding: '12px 22px', borderRadius: 12, fontSize: 13.5, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, color: 'white', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <MessageCircle size={15} /> Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right: animated device mockup scene */}
          <div style={{ position: 'relative', height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              animate={{ y: [0, -8, 0] }}
              style={{ position: 'relative', width: '78%', maxWidth: 340 }}
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <div style={{ background: '#111827', borderRadius: '10px 10px 0 0', padding: '8px 8px 0', border: '1px solid #1f2937' }}>
                  <div style={{ background: '#0a1020', borderRadius: '6px 6px 0 0', aspectRatio: '16/10', padding: 12, overflow: 'hidden', position: 'relative' }}>
                    {/* mini nav */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10, fontSize: 6, color: '#60a5fa' }}>
                      {['Home', 'About', 'Services', 'Projects', 'Contact'].map(n => <span key={n}>{n}</span>)}
                    </div>
                    {/* headline */}
                    <motion.div key={tick} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                      <div style={{ fontSize: 11, color: 'white', fontWeight: 800, lineHeight: 1.3 }}>Building Digital<br />Experiences That</div>
                      <div style={{ fontSize: 11, color: '#60a5fa', fontWeight: 800, marginBottom: 6 }}>Make an Impact</div>
                    </motion.div>
                    <div style={{ width: '70%', height: 3, background: '#1e293b', borderRadius: 2, marginBottom: 3 }} />
                    <div style={{ width: '50%', height: 3, background: '#1e293b', borderRadius: 2, marginBottom: 8 }} />
                    <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}
                      style={{ display: 'inline-block', fontSize: 6, color: 'white', background: 'linear-gradient(135deg,#2563eb,#3b82f6)', borderRadius: 4, padding: '4px 8px' }}>
                      Let's Work Together →
                    </motion.div>
                  </div>
                </div>
                <div style={{ height: 10, background: 'linear-gradient(180deg, #cbd5e1, #94a3b8)', borderRadius: '0 0 8px 8px', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '50%', top: -2, transform: 'translateX(-50%)', width: 50, height: 4, background: '#64748b', borderRadius: '0 0 4px 4px' }} />
                </div>
              </motion.div>
            </motion.div>

            {/* Phone overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              animate={{ y: [0, -10, 0] }}
              style={{ position: 'absolute', right: '2%', bottom: '-6%', width: 110 }}
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                style={{ background: '#0a0f1c', borderRadius: 18, padding: 6, border: '2px solid #1f2937', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <div style={{ background: '#070b14', borderRadius: 13, padding: 8, aspectRatio: '9/18' }}>
                  <div style={{ fontSize: 7, color: 'white', fontWeight: 700, marginBottom: 6 }}>Dashboard</div>
                  <div style={{ fontSize: 5.5, color: '#94a3b8', marginBottom: 3 }}>Analytics</div>
                  <motion.div animate={{ pathLength: [0, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <svg width="100%" height="20" viewBox="0 0 100 20">
                      <motion.path d="M0,15 Q15,5 30,12 T60,8 T100,10" stroke="#60a5fa" strokeWidth="1.5" fill="none"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop' }} />
                    </svg>
                  </motion.div>
                  <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                    <div style={{ flex: 1, background: '#111827', borderRadius: 4, padding: 4 }}>
                      <div style={{ fontSize: 7, color: 'white', fontWeight: 700 }}>1,428</div>
                      <div style={{ fontSize: 4.5, color: '#34d399' }}>Users +18%</div>
                    </div>
                    <div style={{ flex: 1, background: '#111827', borderRadius: 4, padding: 4 }}>
                      <div style={{ fontSize: 7, color: 'white', fontWeight: 700 }}>320</div>
                      <div style={{ fontSize: 4.5, color: '#34d399' }}>Orders +12%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* What We Build */}
        <div style={{ marginBottom: 36 }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: 12, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.16em', marginBottom: 20 }}>
            WHAT I BUILD
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {BUILD_ITEMS.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(96,165,250,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <item.icon size={20} color="#60a5fa" />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 11.5, color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 32, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 20 }}>
          {TRUST_ITEMS.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={15} color="#60a5fa" />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>{item.label}</div>
                <div style={{ fontSize: 10.5, color: '#94a3b8', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 4 }}>Let's bring your idea to life</div>
            <div style={{ fontSize: 12.5, color: '#94a3b8' }}>Tell me what you need and I'll build the perfect solution for you.</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: '#60a5fa', fontWeight: 600 }}>CONTACT</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>0815631477</div>
            <div style={{ fontSize: 10.5, color: '#94a3b8', marginTop: 2 }}>Prices negotiable, based on your requirements</div>
          </div>
        </motion.div>
      </div>

      <style>{`@media (max-width: 760px) { .showcase-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}