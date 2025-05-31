import { Container, Typography, Box, Paper, Tooltip, Popover } from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import { useState } from 'react';

const Origin = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedEra, setSelectedEra] = useState<number | null>(null);

  const timelineData = [
    {
      period: 'Античност',
      title: 'Първите спомени',
      description: 'В древногръцката митология, Мнемозина е богиня на паметта и майка на музите.',
      year: '800 пр.н.е.'
    },
    {
      period: 'Средновековие',
      title: 'Религиозни текстове',
      description: 'Паметта се запазва чрез устно предаване и религиозни писания.',
      year: '500 н.е.'
    },
    {
      period: 'Ренесанс',
      title: 'Възраждане на знанието',
      description: 'Възстановяване на античното знание и развитие на нови форми на памет.',
      year: '1400'
    },
    {
      period: 'Модерна епоха',
      title: 'Научен подход',
      description: 'Развитие на психологията и неврологията в изучаването на паметта.',
      year: '1800'
    }
  ];

  const handlePopoverClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    if (selectedEra === index) {
      setAnchorEl(null);
      setSelectedEra(null);
    } else {
      setAnchorEl(event.currentTarget);
      setSelectedEra(index);
    }
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedEra(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="origin" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Произход и смисъл
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Пътешествие през времето и пространството на паметта
          </Typography>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 6,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(108, 99, 255, 0.1)',
            position: 'relative',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', position: 'absolute', top: 20, left: 20 }}>
            Времева линия
          </Typography>

          {/* Horizontal Timeline */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 900,
              height: 200,
              mx: 'auto',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            {/* Timeline line - moved down */}
            <Box
              sx={{
                position: 'absolute',
                top: 120,
                left: 0,
                width: '100%',
                height: 12,
                background: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
                borderRadius: 6,
                boxShadow: '0 2px 16px 0 rgba(108,99,255,0.10)',
                zIndex: 1,
                transform: 'none',
              }}
            />
            {/* Timeline points - pill/oval shape */}
            {timelineData.map((era, index) => {
              const leftPercent = (index / (timelineData.length - 1)) * 100;
              let displayPeriod = era.period;
              if (era.period === 'Модерна епоха') {
                displayPeriod = 'Модерна\nепоха';
              }
              return (
                <Box
                  key={era.period}
                  sx={{
                    position: 'absolute',
                    top: 60,
                    left: `${leftPercent}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Box
                      onClick={e => handlePopoverClick(e, index)}
                      sx={{
                        minWidth: 140,
                        maxWidth: 200,
                        height: 60,
                        px: 3,
                        borderRadius: 30,
                        background: selectedEra === index
                          ? 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)'
                          : 'rgba(108, 99, 255, 0.10)',
                        border: selectedEra === index ? '4px solid #FF6584' : '4px solid #6C63FF',
                        boxShadow: selectedEra === index ? '0 8px 32px rgba(255,101,132,0.18)' : '0 2px 12px rgba(108,99,255,0.10)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        mb: 1,
                        whiteSpace: 'pre-line',
                        overflow: 'hidden',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: selectedEra === index ? 'white' : '#6C63FF',
                          fontWeight: 800,
                          textAlign: 'center',
                          fontSize: era.period === 'Средновековие' ? '1.05rem' : '1.15rem',
                          lineHeight: 1.2,
                          wordBreak: 'keep-all',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {displayPeriod}
                      </Typography>
                    </Box>
                  </motion.div>
                  <Typography variant="caption" sx={{ color: '#6C63FF', fontWeight: 600, mt: 1, fontSize: '1.1rem' }}>
                    {era.year}
                  </Typography>
                </Box>
              );
            })}
            {/* Popover for era info */}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              PaperProps={{
                sx: {
                  p: 2,
                  minWidth: 220,
                  background: 'rgba(255,255,255,0.98)',
                  border: '1.5px solid #6C63FF',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(108,99,255,0.13)',
                  backdropFilter: 'blur(6px)',
                  animation: 'fadeInPop .4s cubic-bezier(.4,2,.6,1)'
                }
              }}
              disableRestoreFocus
            >
              {selectedEra !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                    {timelineData[selectedEra].period}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {timelineData[selectedEra].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {timelineData[selectedEra].description}
                  </Typography>
                </motion.div>
              )}
            </Popover>
          </Box>
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(108, 99, 255, 0.1)',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Съвременни паралели
          </Typography>
          <Typography>
            Днес, разбирането на паметта продължава да евалюира с развитието на технологиите 
            и новите научни открития. От дигиталните архиви до изкуствения интелект, 
            начините, по които съхраняваме и предаваме информация, се трансформират.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Origin; 