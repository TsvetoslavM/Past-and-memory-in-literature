import { ThemeProvider, CssBaseline, Box, AppBar, Toolbar, Typography, Button, Container, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import Origin from './pages/Origin';
import MemoryTypes from './pages/MemoryTypes';
import Literature from './pages/Literature';
import ModernMemory from './pages/ModernMemory';
import Conclusion from './pages/Conclusion';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { path: '/', label: 'Начало' },
    { path: '/origin', label: 'Произход' },
    { path: '/memory-types', label: 'Видове памет' },
    { path: '/literature', label: 'Литература' },
    { path: '/modern-memory', label: 'Съвременна памет' },
    { path: '/conclusion', label: 'Заключение' }
  ];

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #F8F9FF 0%, #E8EAF6 100%)',
      }}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid rgba(108, 99, 255, 0.1)'
      }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Да помниш значи да живееш
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.main' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                textAlign: 'center',
                color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                fontWeight: location.pathname === item.path ? 600 : 400,
                background: location.pathname === item.path 
                  ? 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 101, 132, 0.1) 100%)'
                  : 'transparent',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 101, 132, 0.1) 100%)',
                  transform: 'translateX(8px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  sx: {
                    fontSize: '1.1rem',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              color: 'primary.main',
              '&:hover': {
                background: 'rgba(108, 99, 255, 0.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
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
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
            onClick={() => navigate('/')}
          >
            Да помниш значи да живееш
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
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
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            maxWidth: 300,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(108, 99, 255, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
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
          width: '100%',
          background: 'linear-gradient(135deg, #F8F9FF 0%, #E8EAF6 100%)',
          position: 'relative',
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
            minHeight: 'calc(100vh - 64px)', 
            overflowY: 'auto',
            position: 'relative'
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
