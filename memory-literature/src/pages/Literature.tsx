import { Container, Typography, Box, IconButton, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';

const literaryExamples = [
  {
    author: 'Паисий Хилендарски',
    work: 'История славянобългарска',
    quote: 'Да се знае, че българите са били царе и са владели много земи...',
    analysis: 'Паисий използва историческата памет като инструмент за изграждане на национална идентичност.'
  },
  {
    author: 'Иван Вазов',
    work: 'Под игото',
    quote: 'Споменът за миналото е като светлина, която осветлява пътя към бъдещето.',
    analysis: 'Вазов разглежда паметта като мост между миналото и бъдещето.'
  },
  {
    author: 'Христо Ботев',
    work: 'Хаджи Димитър',
    quote: 'Той падна, но падна с бой, с бой, а не с молитва...',
    analysis: 'Ботев използва паметта за героичните подвизи като източник на национална гордост.'
  },
  {
    author: 'Алеко Константинов',
    work: 'Бай Ганьо',
    quote: 'Бай Ганьо помни всичко, но разбира малко...',
    analysis: 'Константинов иронизира над селективната памет и нейната роля в формирането на стереотипи.'
  }
];

const leftPageVariants = {
  initial: (direction: number) =>
    direction < 0
      ? { opacity: 0.7, rotateY: 90, transformOrigin: 'right center', zIndex: 3 }
      : { opacity: 1, rotateY: 0, transformOrigin: 'right center', zIndex: 2 },
  animate: { opacity: 1, rotateY: 0, transformOrigin: 'right center', zIndex: 2, transition: { duration: 0.7, type: 'spring' } },
  exit: (direction: number) =>
    direction < 0
      ? { opacity: 0.7, rotateY: -90, transformOrigin: 'right center', zIndex: 3, transition: { duration: 0.6 } }
      : { opacity: 1, rotateY: 0, transformOrigin: 'right center', zIndex: 2 },
};

const rightPageVariants = {
  initial: (direction: number) =>
    direction > 0
      ? { opacity: 0.7, rotateY: -90, transformOrigin: 'left center', zIndex: 3 }
      : { opacity: 1, rotateY: 0, transformOrigin: 'left center', zIndex: 2 },
  animate: { opacity: 1, rotateY: 0, transformOrigin: 'left center', zIndex: 2, transition: { duration: 0.7, type: 'spring' } },
  exit: (direction: number) =>
    direction > 0
      ? { opacity: 0.7, rotateY: 90, transformOrigin: 'left center', zIndex: 3, transition: { duration: 0.6 } }
      : { opacity: 1, rotateY: 0, transformOrigin: 'left center', zIndex: 2 },
};

const Literature = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = literaryExamples.length;

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const handleNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="literature" />
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Литературни примери
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Паметта в българската литература
        </Typography>
        <MenuBookIcon sx={{ color: '#6C63FF', fontSize: 48, mb: 2 }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 480,
        }}
      >
        <IconButton onClick={handlePrev} sx={{ mr: 2, bgcolor: 'rgba(108,99,255,0.08)', '&:hover': { bgcolor: '#6C63FF', color: '#fff' }, boxShadow: 2 }}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: 700, md: 1000 },
            minHeight: 520,
            perspective: 1200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 2,
                perspective: 1200,
                transformStyle: 'preserve-3d',
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  width: '100%',
                  minHeight: 520,
                  borderRadius: '32px',
                  boxShadow: '0 8px 48px 0 #6C63FF22',
                  background: 'linear-gradient(120deg, #fff 60%, #f8f9ff 100%)',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'stretch',
                  px: { xs: 2, sm: 4, md: 0 },
                  py: { xs: 4, sm: 6 },
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1.5px solid #e3e6f3',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #6C63FF 0%, #FF6584 100%)',
                    transform: 'translateX(-50%)',
                    borderRadius: 2,
                    opacity: 0.18,
                    zIndex: 1,
                  },
                }}
              >
                {/* Left page: Author and Work */}
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={page + '-left'}
                    custom={direction}
                    variants={leftPageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2, minWidth: 0 }}
                  >
                    <Box sx={{ px: { xs: 0, sm: 2, md: 4 }, py: 2, width: '100%' }}>
                      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 800, mb: 2, textAlign: 'center' }}>
                        {literaryExamples[page].author}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
                        {literaryExamples[page].work}
                      </Typography>
                    </Box>
                  </motion.div>
                </AnimatePresence>
                {/* Right page: Quote and Analysis */}
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={page + '-right'}
                    custom={direction}
                    variants={rightPageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2, minWidth: 0 }}
                  >
                    <Box sx={{ px: { xs: 0, sm: 2, md: 4 }, py: 2, width: '100%' }}>
                      <Box sx={{ my: 2, p: 2, bgcolor: 'rgba(108, 99, 255, 0.07)', borderRadius: 2, width: '100%' }}>
                        <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.15rem', textAlign: 'center' }}>
                          "{literaryExamples[page].quote}"
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                        {literaryExamples[page].analysis}
                      </Typography>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>
        <IconButton onClick={handleNext} sx={{ ml: 2, bgcolor: 'rgba(108,99,255,0.08)', '&:hover': { bgcolor: '#6C63FF', color: '#fff' }, boxShadow: 2 }}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>
      {/* All literary works below the book */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 800, mb: 3, textAlign: 'center' }}>
          Всички литературни произведения
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {literaryExamples.map((example, idx) => (
            <Paper
              key={example.author + example.work}
              elevation={3}
              sx={{
                minWidth: 260,
                maxWidth: 340,
                flex: '1 1 260px',
                p: 3,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 2px 16px #6C63FF11',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1, textAlign: 'center' }}>
                {example.author}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1, textAlign: 'center' }}>
                {example.work}
              </Typography>
              <Box sx={{ my: 1, p: 1.5, bgcolor: 'rgba(108, 99, 255, 0.07)', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
                  "{example.quote}"
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                {example.analysis}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Literature; 