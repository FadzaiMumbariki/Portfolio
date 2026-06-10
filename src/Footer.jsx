import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: #00072d;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 0.3s ease;
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  padding: 3rem ${({ theme }) => theme.sizes.pad};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.98);
    transform: translateY(-3px);
    filter: drop-shadow(0 0 6px rgba(100, 180, 255, 0.4));
  }

  svg {
    font-size: 1.25rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCopy = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterLogo = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Footer = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const footer = canvas.parentElement;
    let W, H, particles;
    let mouse = { x: -999, y: -999 };
    let time = 0;

    const N = 110;
    const CONN = 160;

    const DOT_COLOR  = 'rgba(80, 160, 255,';
    const LINE_COLOR = 'rgba(60, 140, 255,';
    const GLOW_COLOR = 'rgba(120, 200, 255,';
    const BG_COLOR   = 'rgba(0, 7, 45, 0.3)';

    const resize = () => {
      W = canvas.width  = footer.offsetWidth;
      H = canvas.height = footer.offsetHeight;
    };

    const makeParticle = () => {
      const waveBias = 0.35 + Math.random() * 0.3;
      return {
        x: Math.random() * W,
        y: waveBias * H,
        baseY: waveBias * H,
        phase: Math.random() * Math.PI * 2,
        waveAmp: 8 + Math.random() * 28,
        waveFreq: 0.4 + Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.8,
        opacity: 0.25 + Math.random() * 0.65,
        glow: Math.random() > 0.78,
        bright: Math.random() > 0.9,
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: N }, makeParticle);
    };

    const draw = () => {
      time += 0.008;

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        p.y = p.baseY + Math.sin(time * p.waveFreq + p.phase) * p.waveAmp;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += (dx / dist) * 1.2;
          p.baseY += (dy / dist) * 1.2;
          p.baseY = Math.max(H * 0.1, Math.min(H * 0.9, p.baseY));
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const alpha = (1 - d / CONN) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = LINE_COLOR + alpha + ')';
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        if (p.glow || p.bright) {
          const haloR = p.bright ? p.r * 7 : p.r * 4.5;
          const glowOpacity = p.bright ? p.opacity * 0.9 : p.opacity * 0.55;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
          grad.addColorStop(0, GLOW_COLOR + glowOpacity + ')');
          grad.addColorStop(0.4, GLOW_COLOR + (glowOpacity * 0.3) + ')');
          grad.addColorStop(1, GLOW_COLOR + '0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        const coreColor = p.bright
          ? 'rgba(200, 230, 255,' + p.opacity + ')'
          : DOT_COLOR + p.opacity + ')';

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = coreColor;
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    init();
    draw();

    return () => {
      cancelAnimationFrame(requestRef.current);
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <FooterWrapper>
      <ParticleCanvas ref={canvasRef} />
      <FooterContent>
        <FooterSocials>
          <SocialLink
            href="https://github.com/FadzaiMumbariki"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/fadzai-mumbariki/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="mailto:fadzaimumbariki@gmail.com" aria-label="Email">
            <EmailIcon />
          </SocialLink>
        </FooterSocials>
        <FooterBottom>
          <FooterCopy>FADZAI MUMBARIKI 2026 © ALL RIGHTS RESERVED.</FooterCopy>
          <FooterLogo href="#">F.M</FooterLogo>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;