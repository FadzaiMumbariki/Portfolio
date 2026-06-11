import styled from 'styled-components';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <Section id="contact">
      <Inner>
        <Heading>{data.heading || 'Contact'}</Heading>
        <Body>{data.body || 'Get in touch via email or social links.'}</Body>
      </Inner>
    </Section>
  );
};

export default Contact;

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

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 1rem;
`;

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.ink2};
  line-height: 1.6;
`;
