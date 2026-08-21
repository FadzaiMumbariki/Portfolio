import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  padding: calc(${({ theme }) => theme.sizes.navH} + 5rem) ${({ theme }) => theme.sizes.pad} 6rem;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.rule};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.max};
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const RevealClip = styled.span`
  overflow: hidden;
  display: block;
`;

const RevealText = styled.span`
  display: block;
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.ink3};
  margin-bottom: 0.75rem;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ink2};
  margin: 1rem 0 3rem;
  font-weight: 450;
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.ink3};
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.paper2};
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.ink};
  }

  svg {
    font-size: 1.15rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.paper2};
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.rule};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AnimatedField = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiInputLabel-root {
    font-family: ${({ theme }) => theme.fonts.mono} !important;
    font-size: 0.75rem !important;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.ink3};
    
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.ink} !important;
    }
  }

  & .MuiInputBase-root {
    font-family: ${({ theme }) => theme.fonts.display} !important;
    font-size: 0.85rem !important;
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.paper};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ theme }) => theme.colors.ruleStrong};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.ink2};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.ink} !important;
    }
  }

  & .MuiFilledInput-root {
    background: ${({ theme }) => theme.colors.paper};
    &:hover {
      background: ${({ theme }) => theme.colors.paper};
    }
    &:after {
      border-bottom-color: ${({ theme }) => theme.colors.ink};
    }
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.colors.ink};
  }
`;

const FormSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  animation: ${slideUp} 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.75s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.ink2};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 0.9rem;
  }
`;

const SuccessMsg = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #10b981;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const Contact = ({ data }) => {
  const [status, setStatus] = useState('');

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GitHubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'email':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', 'c05f3b42-aecc-4a0d-8dd0-d2ef45312618');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <Inner>
        <ContactGrid>
          <div>
            <RevealClip>
              <Eyebrow as={RevealText} delay="0.05s">{data.eyebrow}</Eyebrow>
            </RevealClip>

            <RevealClip>
              <Heading as={RevealText} delay="0.18s">{data.heading}</Heading>
            </RevealClip>

            <RevealClip>
              <Body as={RevealText} delay="0.30s">{data.body}</Body>
            </RevealClip>

            <RevealClip>
              <ContactIcons as={RevealText} delay="0.42s">
                {data.socials.map((s) => (
                  <IconLink
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    {getIcon(s.name)}
                  </IconLink>
                ))}
              </ContactIcons>
            </RevealClip>
          </div>

          <Form onSubmit={handleSubmit}>
            <AnimatedField delay="0.15s">
              <FormRow>
                <StyledTextField variant="standard" label="Username" name="username" required />
                <StyledTextField variant="outlined" label="Email" name="email" type="email" required />
              </FormRow>
            </AnimatedField>

            <AnimatedField delay="0.30s">
              <StyledTextField variant="filled" label="Password" name="password" type="password" required />
            </AnimatedField>

            <AnimatedField delay="0.45s">
              <StyledTextField
                variant="outlined"
                label="Message"
                name="message"
                multiline
                rows={4}
                required
              />
            </AnimatedField>

            <FormSubmit type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>
                  Send Message <SendIcon />
                </>
              )}
            </FormSubmit>

            {status === 'success' && (
              <SuccessMsg>
                <CheckCircleOutlineIcon /> Message sent successfully!
              </SuccessMsg>
            )}
            {status === 'error' && (
              <SuccessMsg style={{ color: '#ef4444' }}>
                Oops! Something went wrong. Please try again.
              </SuccessMsg>
            )}
          </Form>
        </ContactGrid>
      </Inner>
    </Section>
  );
};

export default Contact;
