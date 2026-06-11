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
  return (
    <FooterWrapper>
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