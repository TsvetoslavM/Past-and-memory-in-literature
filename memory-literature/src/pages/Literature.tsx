import { Container, Typography, Box, Paper, List, ListItem, ListItemText} from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';

const Literature = () => {
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="literature" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Литературни примери
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Паметта в българската литература
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {literaryExamples.map((example, index) => (
            <motion.div
              key={example.author}
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
                  {example.author}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
                  {example.work}
                </Typography>
                <Box sx={{ my: 2, p: 2, bgcolor: 'rgba(108, 99, 255, 0.05)', borderRadius: 2 }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    "{example.quote}"
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {example.analysis}
                </Typography>
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
            Общи наблюдения
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    • Паметта се използва като инструмент за изграждане на национална идентичност
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    • Свързване на личната с колективната памет
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    • Паметта като източник на морални уроци и национална гордост
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Literature; 