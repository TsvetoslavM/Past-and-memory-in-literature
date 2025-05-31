import { Container, Typography, Box, List, ListItem, ListItemText, Avatar, Collapse } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import { useState } from 'react';

const icons = [
  <GroupsIcon fontSize="large" />, // Колективна памет
  <PersonIcon fontSize="large" />, // Лична памет
  <MenuBookIcon fontSize="large" />, // Културна памет
  <ArchiveIcon fontSize="large" />, // Историческа памет
];

const gradients = [
  'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
  'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
  'linear-gradient(135deg, #F7971E 0%, #FFD200 100%)',
  'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
];

const MemoryTypes = () => {
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const memoryTypes = [
    {
      type: 'Колективна памет',
      description: 'Споделената памет на група или общество, която формира колективната идентичност.',
      examples: [
        'Национални празници и традиции',
        'Исторически събития',
        'Културни практики'
      ]
    },
    {
      type: 'Лична памет',
      description: 'Индивидуалните спомени и опит, които формират личната идентичност.',
      examples: [
        'Детски спомени',
        'Лични преживявания',
        'Семейни истории'
      ]
    },
    {
      type: 'Културна памет',
      description: 'Паметта, запазена в културните артефакти и практики.',
      examples: [
        'Литературни произведения',
        'Изкуство и архитектура',
        'Фолклор и традиции'
      ]
    },
    {
      type: 'Историческа памет',
      description: 'Документираната памет за минали събития и периоди.',
      examples: [
        'Исторически документи',
        'Архивни материали',
        'Научни изследвания'
      ]
    }
  ];

  const handleCircleClick = (index: number) => {
    setSelectedType(selectedType === index ? null : index);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="memory-types" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Видове памет в литературата
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Различни форми на запомняне и тяхното отражение в литературата
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, mt: 4 }}>
          {memoryTypes.map((item, index) => (
            <Box key={item.type} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 200 }}>
              <motion.div
                whileHover={{ scale: 1.12, y: -10, boxShadow: '0 8px 32px 0px #6C63FF33' }}
                animate={selectedType === index ? { scale: 1.15 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Box
                  onClick={() => handleCircleClick(index)}
                  sx={{
                    width: 170,
                    height: 170,
                    borderRadius: '50%',
                    background: gradients[index],
                    boxShadow: selectedType === index
                      ? '0 0 32px 8px #FF6584AA, 0 8px 32px 0px #6C63FF33'
                      : '0 2px 16px 0px #6C63FF22',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    mb: 2,
                    textAlign: 'center',
                    p: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.7)',
                      color: gradients[index].includes('#43E97B') ? '#43E97B' : '#6C63FF',
                      width: 56,
                      height: 56,
                      mb: 1.5,
                      boxShadow: '0 2px 8px #fff8',
                    }}
                  >
                    {icons[index]}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 900,
                      fontSize: '1.18rem',
                      lineHeight: 1.2,
                      wordBreak: 'break-word',
                      textShadow: '0 2px 8px #6C63FF55',
                    }}
                  >
                    {item.type}
                  </Typography>
                </Box>
              </motion.div>
              <AnimatePresence>
                {selectedType === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      sx={{
                        mt: 2,
                        px: 2,
                        py: 2,
                        background: 'rgba(255,255,255,0.98)',
                        borderRadius: 4,
                        boxShadow: '0 8px 32px rgba(108,99,255,0.13)',
                        border: `2px solid ${gradients[index].split(' ')[1]}`,
                        minWidth: 220,
                        maxWidth: 320,
                        mx: 'auto',
                        textAlign: 'center',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Typography variant="body1" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1 }}>
                        Примери:
                      </Typography>
                      <List>
                        {item.examples.map((example, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemText
                              primary={<Typography variant="body2" sx={{ color: 'text.secondary' }}>• {example}</Typography>}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default MemoryTypes; 