import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: #00072d;
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
  padding: 2rem ${({ theme }) => theme.sizes.pad};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const SocialLink = styled(Box).attrs({ component: 'a' })`
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.98);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 1.25rem;
`;

const FooterCopy = styled(Box).attrs({ component: 'span' })`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.4);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterBottom>
          <FooterCopy>
            © {new Date().getFullYear()} FADZAI MUMBARIKI. ALL RIGHTS RESERVED.
          </FooterCopy>
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
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;