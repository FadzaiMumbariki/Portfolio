import styled, { keyframes } from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const orbFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
`;

const spinCw = keyframes`
  to { transform: rotate(360deg); }
`;

const spinCcw = keyframes`
  to { transform: rotate(-360deg); }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(${({ theme }) => theme.sizes.navH} + 5rem) ${({ theme }) => theme.sizes.pad} 6rem;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const HeroGrid = styled.div`
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 460px;
  gap: 3rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    align-items: center;
  }
`;

const HeroTag = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.ink3};
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;

  &::before {
    content: '';
    display: block;
    width: 1.75rem;
    height: 1px;
    background: currentColor;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.5rem, 7vw, 5rem);
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  span {
    display: block;
  }
`;

const HeroName = styled.span`
  color: ${({ theme }) => theme.colors.ink3};
  font-style: italic;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const HeroDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  max-width: 480px;
  margin-bottom: 3rem;
  font-weight: 450;
  letter-spacing: -0.01em;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ $variant, theme }) =>
    $variant === 'fill'
      ? `
    background: ${theme.colors.ink};
    color: ${theme.colors.paper};
    border-color: ${theme.colors.ink};
    &:hover {
      background: ${theme.colors.ink2};
      border-color: ${theme.colors.ink2};
      transform: translateY(-2px);
    }
  `
      : `
    background: transparent;
    color: ${theme.colors.ink};
    border-color: ${theme.colors.ruleStrong};
    &:hover {
      background: ${theme.colors.paper2};
      border-color: ${theme.colors.ink};
      transform: translateY(-2px);
    }
  `}

  svg {
    font-size: 1.1rem;
  }
`;

const HeroRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 460px;

  @media (max-width: 960px) {
    height: auto;
    margin-top: 2rem;
  }
`;

const HeroImageWrap = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? '#06173a' : '#eaf2ff'};

  @media (max-width: 960px) {
    width: min(280px, 100%);
    height: min(280px, 100%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2), transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(15, 42, 93, 0.35), transparent 45%);
    mix-blend-mode: screen;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
`;

const OrbBadge = styled.div`
  position: absolute;
  bottom: 10%;
  left: -5%;
  background: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const OrbBadgeText = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.ink2};
  white-space: nowrap;
`;

const Hero = ({ data }) => {
  return (
    <HeroSection id="hero">
      <HeroGrid>
        <HeroLeft>
          <HeroTag className="fu d1">{data.tagline}</HeroTag>
          <HeroTitle className="fu d2">
            <span>{data.name.split(' ')[0]}</span>
            <HeroName>{data.name.split(' ')[1]}</HeroName>
          </HeroTitle>
          <HeroDesc className="fu d3">{data.description}</HeroDesc>
          <HeroBtns className="fu d4">
            <Button href="#contact" $variant="fill">
              Get in touch <EmailIcon />
            </Button>
            <Button href={data.cvLink} target="_blank" rel="noopener">
              View CV <DescriptionIcon />
            </Button>
          </HeroBtns>
        </HeroLeft>
        <HeroRight className="fu d5">
          <HeroImageWrap>
            <HeroImage
              src={data.image || './assets/hero.png'}
              alt={data.imageAlt || 'Hero image'}
            />
          </HeroImageWrap>
        </HeroRight>
      </HeroGrid>
    </HeroSection>
  );
};

export default Hero;
