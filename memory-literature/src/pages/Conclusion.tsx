import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { keyframes } from '@emotion/react';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Conclusion = () => {
  const keyPoints = [
    {
      title: "Историческа памет",
      description: "От древността до съвременността, паметта е формирала нашата идентичност."
    },
    {
      title: "Литературна памет",
      description: "Чрез литературата паметта се превръща в мост между поколенията."
    },
    {
      title: "Съвременна памет",
      description: "Технологиите трансформират начина, по който съхраняваме и споделяме спомени."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="conclusion" />
      
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Заключение
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Паметта като мост между миналото и бъдещето
          </Typography>
          <Box
            sx={{
              display: 'inline-block',
              animation: `${floatAnimation} 3s ease-in-out infinite`,
              color: '#6C63FF'
            }}
          >
            <AutoStoriesIcon sx={{ fontSize: 64 }} />
          </Box>
        </motion.div>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 4, 
        mb: 8 
      }}>
        {keyPoints.map((point, index) => (
          <motion.div
            key={point.title}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #fff 0%, #f8f9ff 100%)',
                border: '1px solid rgba(108, 99, 255, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateX(10px)',
                  boxShadow: '0 8px 24px rgba(108, 99, 255, 0.15)'
                }
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                {point.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {point.description}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 6,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Паметта - нашето наследство
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
            Паметта е нещо повече от просто съхранение на информация - тя е жива връзка между 
            миналото, настоящето и бъдещето. Чрез нея предаваме знания, традиции и ценности от 
            поколение на поколение.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            В съвременния свят, където технологиите непрекъснато трансформират начина, по който 
            съхраняваме и споделяме спомени, важно е да запазим човешкото измерение на паметта 
            и да я използваме като инструмент за изграждане на по-добро бъдеще.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Conclusion; 