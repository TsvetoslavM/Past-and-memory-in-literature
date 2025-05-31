import { ThemeProvider, CssBaseline, Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import Origin from './pages/Origin';
import MemoryTypes from './pages/MemoryTypes';
import Literature from './pages/Literature';
import ModernMemory from './pages/ModernMemory';
import Conclusion from './pages/Conclusion';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Начало' },
    { path: '/origin', label: 'Произход' },
    { path: '/memory-types', label: 'Видове памет' },
    { path: '/literature', label: 'Литература' },
    { path: '/modern-memory', label: 'Съвременна памет' },
    { path: '/conclusion', label: 'Заключение' }
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(108, 99, 255, 0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
            onClick={() => navigate('/')}
          >
            Да помниш значи да живееш
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? theme.palette.primary.main : 'text.secondary',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 101, 132, 0.1) 100%)'
                      : 'transparent',
                    borderRadius: '12px',
                    zIndex: -1,
                    transition: 'all 0.3s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: location.pathname === item.path ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: '2px',
                    background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    '&::before': {
                      background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 101, 132, 0.1) 100%)',
                    },
                    '&::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden',
          background: 'linear-gradient(135deg, #F8F9FF 0%, #E8EAF6 100%)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(108, 99, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Router>
          <Navigation />
          <Box sx={{ 
            height: 'calc(100vh - 64px)', 
            overflowY: 'auto',
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/origin" element={<Origin />} />
              <Route path="/memory-types" element={<MemoryTypes />} />
              <Route path="/literature" element={<Literature />} />
              <Route path="/modern-memory" element={<ModernMemory />} />
              <Route path="/conclusion" element={<Conclusion />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
