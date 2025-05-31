import { Container, Typography, Box, Paper} from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

const ModernMemory = () => {
  const aspects = [
    {
      title: "Цифрова памет",
      description: "Съвременните технологии трансформират начина, по който съхраняваме и достъпваме до информация.",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      color: "#6C63FF"
    },
    {
      title: "Изкуствен интелект",
      description: "AI системите революционизират обработката и анализ на големи обеми данни.",
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      color: "#FF6584"
    },
    {
      title: "Облачни технологии",
      description: "Облачните решения позволяват глобален достъп до информация и споделяне на ресурси.",
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      color: "#4CAF50"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="modern-memory" />
      
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Съвременна памет
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Дигиталната ера и трансформацията на паметта
          </Typography>
          <MemoryIcon sx={{ color: '#6C63FF', fontSize: 48, mb: 2 }} />
        </motion.div>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 4, 
        mb: 8,
        justifyContent: 'center'
      }}>
        {aspects.map((aspect, index) => (
          <Box key={aspect.title} sx={{ 
            flex: '1 1 300px',
            maxWidth: '400px',
            p: 2 
          }}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9ff 100%)',
                  border: '1px solid rgba(108, 99, 255, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(108, 99, 255, 0.15)'
                  }
                }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: '1rem',
                    color: aspect.color
                  }}
                >
                  {aspect.icon}
                </motion.div>
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
                  {aspect.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                  {aspect.description}
                </Typography>
              </Paper>
            </motion.div>
          </Box>
        ))}
      </Box>

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
          Бъдещето на паметта
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
          С развитието на технологиите, концепцията за памет се трансформира в нови измерения. 
          От квантови изчисления до невронни мрежи, бъдещето обещава революционни промени в начина, 
          по който съхраняваме и обработваме информация.
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          Съвременните изследвания в областта на изкуствения интелект и машинното обучение 
          отварят нови перспективи за разбиране на човешката памет и създаване на интелигентни 
          системи, способни да се адаптират и учат.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ModernMemory; 