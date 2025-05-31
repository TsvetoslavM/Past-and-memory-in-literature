import { Container, Typography, Box, Paper, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TimelineIcon from '@mui/icons-material/Timeline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MemoryIcon from '@mui/icons-material/Memory';

const sections = [
  {
    title: 'Произход и смисъл',
    description: 'Пътешествие през времето и пространството на паметта.',
    icon: <TimelineIcon fontSize="large" />, route: '/origin', color: '#6C63FF'
  },
  {
    title: 'Видове памет',
    description: 'Открий различните форми на памет и тяхното отражение в литературата.',
    icon: <PsychologyIcon fontSize="large" />, route: '/memory-types', color: '#43E97B'
  },
  {
    title: 'Литературни примери',
    description: 'Примери за паметта в българската литература.',
    icon: <MenuBookIcon fontSize="large" />, route: '/literature', color: '#F7971E'
  },
  {
    title: 'Съвременна памет',
    description: 'Дигиталната ера и трансформацията на паметта.',
    icon: <MemoryIcon fontSize="large" />, route: '/modern-memory', color: '#FF6584'
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(120deg, #f8fafc 0%, #e3e6f3 100%)',
        position: 'relative',
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', md: '3rem' }, background: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
              Да помниш значи да живееш
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              Открийте ролята на паметта в българската литература и култура
            </Typography>
            <AutoAwesomeIcon sx={{ color: '#FF6584', fontSize: 48, mt: 1 }} />
          </Box>
        </motion.div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
            mt: 2,
          }}
        >
          {sections.map((section, idx) => (
            <Box
              key={section.title}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
                minWidth: 260,
                maxWidth: 340,
                display: 'flex',
                alignItems: 'stretch',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0px #6C63FF33' }}
                style={{ width: '100%', display: 'flex', alignItems: 'stretch' }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 32px 0px #6C63FF11',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 320,
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  onClick={() => navigate(section.route)}
                >
                  <Avatar sx={{ bgcolor: section.color, width: 64, height: 64, mb: 2, boxShadow: '0 2px 16px #6C63FF33' }}>
                    {section.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: section.color, mb: 1, textAlign: 'center', fontSize: '1.25rem' }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 2 }}>
                    {section.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 'auto',
                      background: `linear-gradient(90deg, ${section.color} 0%, #6C63FF 100%)`,
                      color: '#fff',
                      fontWeight: 700,
                      borderRadius: 3,
                      px: 3,
                      py: 1.2,
                      boxShadow: '0 2px 8px #6C63FF22',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: `linear-gradient(90deg, #6C63FF 0%, ${section.color} 100%)`,
                        transform: 'scale(1.07)',
                        boxShadow: '0 4px 24px #FF658444',
                      },
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      navigate(section.route);
                    }}
                  >
                    Виж повече
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 