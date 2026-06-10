const shared = {
  fonts: {
    display: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  sizes: {
    navH: '64px',
    max: '1160px',
    pad: 'clamp(1.25rem, 5vw, 4rem)',
  },
};

export const lightTheme = {
  ...shared,
  mode: 'light',
  colors: {
    ink: '#0f0f10',
    ink2: '#3a3d46',
    ink3: '#6b7280',
    ink4: '#9ca3af',
    paper: '#ffffff',
    paper2: '#f7fafc',
    paper3: '#eef2ff',
    rule: 'rgba(15, 15, 16, 0.08)',
    ruleMd: 'rgba(15, 15, 16, 0.14)',
    ruleStrong: 'rgba(15, 15, 16, 0.2)',
  },
};

export const darkTheme = {
  ...shared,
  mode: 'dark',
  colors: {
    ink: '#f3f8ff',
    ink2: '#cad8f0',
    ink3: '#91aad9',
    ink4: '#657fb1',
    paper: '#06173a',
    paper2: '#0c244f',
    paper3: '#153568',
    rule: 'rgba(243, 248, 255, 0.1)',
    ruleMd: 'rgba(243, 248, 255, 0.15)',
    ruleStrong: 'rgba(243, 248, 255, 0.22)',
  },
};
