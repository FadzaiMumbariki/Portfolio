import styled from 'styled-components';

const Page = styled.section`
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.sizes.navH} + 2.5rem) ${({ theme }) => theme.sizes.pad} 4rem;
  max-width: calc(${({ theme }) => theme.sizes.max} + ${({ theme }) => theme.sizes.pad} * 2);
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.ink};
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  letter-spacing: -0.04em;
  margin: 0;
`;

const BackButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.ruleStrong};
  background: ${({ theme }) => theme.colors.paper2};
  color: ${({ theme }) => theme.colors.ink};
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.paper};
    transform: translateY(-1px);
  }
`;

const ViewerWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.rule};
  border-radius: 18px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.paper};
  box-shadow: 0 24px 60px rgba(15, 17, 20, 0.08);
`;

const Viewer = styled.iframe`
  width: 100%;
  min-height: 78vh;
  border: 0;
  display: block;
  background: ${({ theme }) => theme.colors.paper};
`;

const CVPage = ({ onBack }) => {
  return (
    <Page>
      <Header>
        <Title>Curriculum Vitae</Title>
        <BackButton onClick={onBack} type="button">
          Back to portfolio
        </BackButton>
      </Header>

      <ViewerWrap>
        <Viewer
          src="./assets/CV.pdf"
          title="Fadzai Mumbariki CV"
          loading="lazy"
        />
      </ViewerWrap>
    </Page>
  );
};

export default CVPage;
