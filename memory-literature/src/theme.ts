import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF',
      light: '#8F88FF',
      dark: '#4B44B2',
    },
    secondary: {
      main: '#FF6584',
      light: '#FF8FA3',
      dark: '#B2475D',
    },
    background: {
      default: '#F8F9FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3142',
      secondary: '#4C5270',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.01562em',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '0.9rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '1rem',
          paddingBottom: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width:600px)': {
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width:900px)': {
            paddingTop: '2rem',
            paddingBottom: '2rem',
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(108, 99, 255, 0.08)',
          transition: 'all 0.3s ease-in-out',
          '@media (min-width:600px)': {
            borderRadius: '16px',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 30px rgba(108, 99, 255, 0.12)',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 16px',
          fontSize: '0.875rem',
          transition: 'all 0.3s ease-in-out',
          '@media (min-width:600px)': {
            borderRadius: '12px',
            padding: '10px 24px',
            fontSize: '1rem',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(108, 99, 255, 0.2)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(108, 99, 255, 0.1)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme; 