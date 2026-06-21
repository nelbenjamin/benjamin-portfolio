import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>

      {/* Dark base so the image's own near-black background blends seamlessly */}
      <div style={{ position: 'absolute', inset: 0, background: '#0a0e16' }} />

      {/* The actual background image, slowly panning and zooming — fully visible */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1.03, 1],
          x: ['0%', '-2%', '1%', '0%'],
          y: ['0%', '1.5%', '-1%', '0%'],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', inset: -20,
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Very light readability wash — just enough to keep white cards/text crisp, image stays clearly visible */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,14,22,0.35) 0%, rgba(10,14,22,0.5) 50%, rgba(10,14,22,0.65) 100%)',
      }} />

      {/* Soft top light tie-in to the blue tones in the artwork */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '60vh',
        background: 'radial-gradient(ellipse 90% 100% at 50% -10%, rgba(59,90,246,0.12) 0%, transparent 70%)',
      }} />

      {/* Bottom vignette grounding the footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '35vh',
        background: 'linear-gradient(0deg, rgba(10,14,22,0.55) 0%, transparent 100%)',
      }} />
    </div>
  );
}