import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CVPage from './CVPage';
import { portfolioData } from './portfolioData';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        {!showCV ? (
          <>
            <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <Main>
              <Hero data={portfolioData.hero} onViewCV={() => setShowCV(true)} />
              <About data={portfolioData.about} />
              <Projects data={portfolioData.projects} />
              <Contact data={portfolioData.contact} />
            </Main>
            <Footer />
          </>
        ) : (
          <CVPage onBack={() => setShowCV(false)} />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.paper};
  transition: background 0.3s ease;
`;

const Main = styled.main`
  flex: 1;
`;
