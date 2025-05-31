import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

interface InteractiveElementsProps {
  type: 'origin' | 'memory-types' | 'literature' | 'modern-memory' | 'conclusion';
}

const InteractiveElements = ({ type }: InteractiveElementsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // If on mobile, don't render the component
  if (isMobile) {
    return null;
  }

  const elements = {
    origin: {
      icon: '⏳',
      title: 'Време',
      description: 'Пътешествие през епохите'
    },
    'memory-types': {
      icon: '🧠',
      title: 'Памет',
      description: 'Различни форми на запомняне'
    },
    literature: {
      icon: '📚',
      title: 'Книги',
      description: 'Литературни примери'
    },
    'modern-memory': {
      icon: '💾',
      title: 'Данни',
      description: 'Съвременни форми на памет'
    },
    conclusion: {
      icon: '🎯',
      title: 'Цел',
      description: 'Финални размисли'
    }
  };

  const currentElement = elements[type];

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(108, 99, 255, 0.1)',
            border: '1px solid rgba(108, 99, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 40px rgba(108, 99, 255, 0.2)',
            }
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {currentElement.icon}
            </Typography>
          </motion.div>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#2D3142',
            }}
          >
            {currentElement.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#4C5270',
              textAlign: 'center',
            }}
          >
            {currentElement.description}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default InteractiveElements; 