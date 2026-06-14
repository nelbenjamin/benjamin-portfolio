import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon, Code2, Database, ShieldCheck, BarChart3, Bell } from 'lucide-react';

const SCHOOL_PROJECT = {
  title: 'EduManage — School Management System',
  type: 'Full-Stack Web Application · Client/Educational Project',
  description: 'A complete, role-based school management platform built for teachers, administrators and principals. Features real-time notifications, AI-powered grade analytics and feedback, custom CA & final mark calculators, and professional Excel/PDF/Word report generation — all wrapped in a polished black-and-blue interface.',
  stack: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'JWT Auth', 'Framer Motion', 'Recharts'],
  features: [
    { icon: ShieldCheck, text: 'Role-based access control for Teachers, Admins & Principals with JWT authentication and bcrypt password hashing' },
    { icon: Database, text: 'Persistent account memory — users continue exactly where they left off after logging back in' },
    { icon: BarChart3, text: 'Automated grade analytics with AI-generated feedback on each learner\'s performance and areas for improvement' },
    { icon: Code2, text: 'Custom CA & final mark formula builder — teachers define their own weighted assessment components' },
    { icon: Bell, text: 'Real-time notifications via Socket.io — principals broadcast announcements instantly to all staff' },
    { icon: Database, text: 'One-click export to professionally branded Excel, PDF, and Word grade reports' },
  ],
  screenshots: ['Login Page', 'Dashboard', 'Subject & Grades View', 'Analytics & CA Calculator', 'Admin Panel'],
};

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>

      {/* Header */}
      <div style={{ marginBottom: 56, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 13, color: '#2979ff', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 12 }}>
          MY WORK
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
          A selection of projects demonstrating full-stack development, database design, and end-to-end software delivery. More projects coming soon.
        </motion.p>
      </div>

      {/* Project Card */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 24, overflow: 'hidden', marginBottom: 40 }}>

        {/* Screenshot gallery placeholder */}
        <div style={{ padding: 24, borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {SCHOOL_PROJECT.screenshots.map((label, i) => (
              <div key={i} style={{
                aspectRatio: '16/10', borderRadius: 12, border: '1px dashed var(--border-bright)',
                background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16, textAlign: 'center'
              }}>
                <ImageIcon size={28} color="var(--text-muted)" />
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</span>
                <span style={{ fontSize: 10, color: 'var(--text-muted)', opacity: 0.6 }}>Screenshot coming soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '32px 36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 6, textTransform: 'uppercase' }}>{SCHOOL_PROJECT.type}</div>
              <h2 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{SCHOOL_PROJECT.title}</h2>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://github.com/nelbenjamin" target="_blank" rel="noopener noreferrer" className="btn-outline"
                style={{ padding: '10px 18px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <ExternalLink size={15} /> Code
              </a>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{SCHOOL_PROJECT.description}</p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {SCHOOL_PROJECT.stack.map(tech => (
              <span key={tech} className="skill-tag" style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: '#2979ff' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Features grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {SCHOOL_PROJECT.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(41,121,255,0.12)', border: '1px solid rgba(41,121,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <f.icon size={15} color="var(--blue)" />
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* More coming soon */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ textAlign: 'center', padding: '48px 24px', border: '1px dashed var(--border-bright)', borderRadius: 20, background: 'var(--bg-card)' }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Code2 size={26} color="var(--blue)" />
        </div>
        <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>More Projects Coming Soon</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto', lineHeight: 1.7 }}>
          Including the MonaGraph clinical desktop application and the web-based crime reporting platform — check back soon for updates.
        </p>
      </motion.div>
    </motion.div>
  );
}