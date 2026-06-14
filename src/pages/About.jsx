import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const SKILLS = {
  Languages: ['C#', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Python', 'SQL'],
  'Frameworks & Tools': ['React', 'ASP.NET Concepts', 'Windows Forms', 'REST APIs', 'Git & GitHub'],
  Databases: ['MySQL', 'SQL Server', 'Schema Design', 'Normalization', 'Query Optimization'],
  'Other Tools': ['pandas', 'matplotlib', 'reportlab', 'Fernet Encryption', 'MS Office', 'Linux'],
};

const EDUCATION = [
  {
    degree: 'BSc Computer Science Honours — Upper Second Class (NQF Level 8)',
    school: 'University of Namibia (UNAM)',
    location: 'Windhoek, Namibia',
    period: '2022 – 2025',
    note: 'Awarded: 29 April 2026',
    courses: 'Software Engineering, OOP (C#/Java), Web Development, Database Systems & Design, Data Structures & Algorithms, Systems Analysis, Information Security, Project Management',
  },
  {
    degree: 'Grade 8 – 12',
    school: 'St Boniface College',
    location: 'Namibia',
    period: '2017 – 2021',
    note: '',
    courses: 'Computer Science, Accounting & Mathematics',
  },
];

const ACHIEVEMENTS = [
  'Graduated with Upper Second Class Honours',
  'Successfully developed and delivered a licensed desktop application for a real paying client',
  'Completed an Honours research project involving the design and implementation of a web-based crime reporting platform',
];

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>

      {/* Header section with photo */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }} className="about-header">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -16, background: 'linear-gradient(135deg, #1d6feb30, #00c8ff15)', borderRadius: '50%', filter: 'blur(30px)' }} />
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '2px solid var(--border-bright)', aspectRatio: '1/1' }}>
            <img src="/profile.jpg" alt="Benjamin Hairungu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontSize: 13, color: '#2979ff', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 12 }}>
            ABOUT ME
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: 18, letterSpacing: '-0.02em' }}>
            Benjamin Intja Hairungu
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
            A high-achieving Computer Science Honours graduate with proven, hands-on software development experience across C#, JavaScript, PHP, HTML, CSS, and SQL. I've independently researched, designed, implemented, debugged, tested, and documented complete software applications — including a licensed desktop system delivered to a paying client and a full web-based platform built as my Honours research project. I'm a collaborative, proactive, fast-learning developer ready to contribute meaningfully from day one.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
              <MapPin size={15} color="var(--blue)" /> Rundu, Namibia
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
              <Briefcase size={15} color="var(--blue)" /> Available immediately
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={15} color="var(--blue)" /> Willing to relocate
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 760px) { .about-header { grid-template-columns: 1fr !important; } .about-header > div:first-child { max-width: 240px; margin: 0 auto; } }`}</style>

      {/* Skills */}
      <div style={{ marginBottom: 80 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display" style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: '-0.02em' }}>
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {Object.entries(SKILLS).map(([category, items], i) => (
            <motion.div key={category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} className="skill-tag" style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: 80 }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display" style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: '-0.02em' }}>
          <GraduationCap size={26} color="var(--blue)" style={{ display: 'inline', marginRight: 10, verticalAlign: -4 }} />
          Education
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {EDUCATION.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: 28, borderLeft: '3px solid var(--blue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>{edu.degree}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--blue)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  <Calendar size={14} /> {edu.period}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 10 }}>
                <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600 }}>{edu.school}</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{edu.location}</span>
                {edu.note && <span style={{ fontSize: 12, color: '#00c896', fontWeight: 600 }}>{edu.note}</span>}
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Key coursework:</strong> {edu.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display" style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: '-0.02em' }}>
          <Award size={26} color="var(--blue)" style={{ display: 'inline', marginRight: 10, verticalAlign: -4 }} />
          Achievements
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 14, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 22px' }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(0,200,150,0.12)', border: '1px solid rgba(0,200,150,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle2 size={16} color="#00c896" />
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, paddingTop: 4 }}>{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}