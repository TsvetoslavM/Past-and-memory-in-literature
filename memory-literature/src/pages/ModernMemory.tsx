import { Container, Typography, Box, Paper, List, ListItem, ListItemText} from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';

const ModernMemory = () => {
  const modernAspects = [
    {
      title: 'Дигитална памет',
      description: 'Новите форми на съхранение и предаване на информация.',
      examples: [
        'Социални мрежи',
        'Дигитални архиви',
        'Облачни хранилища'
      ]
    },
    {
      title: 'Колективна памет онлайн',
      description: 'Как интернет трансформира начина, по който споделяме и запазваме спомени.',
      examples: [
        'Онлайн общности',
        'Виртуални музеи',
        'Дигитални библиотеки'
      ]
    },
    {
      title: 'Предизвикателства',
      description: 'Новите проблеми, свързани с дигиталната памет.',
      examples: [
        'Информационен претоварване',
        'Цифрово забравяне',
        'Проблеми с поверителността'
      ]
    },
    {
      title: 'Възможности',
      description: 'Предимства на съвременните форми на памет.',
      examples: [
        'Глобален достъп',
        'Мгновено споделяне',
        'Интерактивност'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="modern-memory" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Съвременна памет
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Дигиталната ера и трансформацията на паметта
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {modernAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
                  {aspect.title}
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                  {aspect.description}
                </Typography>
                <List>
                  {aspect.examples.map((example, idx) => (
                    <ListItem key={idx}>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1
                            }}
                          >
                            <span role="img" aria-label="bullet">•</span>
                            {example}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          ))}
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(108, 99, 255, 0.1)',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Бъдещето на паметта
          </Typography>
          <Typography paragraph>
            С развитието на технологиите, начините, по които съхраняваме и предаваме информация, 
            продължават да се трансформират. От изкуствения интелект до виртуалната реалност, 
            новите технологии отварят нови възможности за разбиране и използване на паметта.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ModernMemory; 