import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';

const Conclusion = () => {
  const keyPoints = [
    {
      title: 'Историческа перспектива',
      description: 'Паметта е винаги била ключов елемент в формирането на идентичността и културата.'
    },
    {
      title: 'Културна идентичност',
      description: 'Чрез паметта се запазва и предава културното наследство от поколение на поколение.'
    },
    {
      title: 'Съвременни предизвикателства',
      description: 'Дигиталната ера поставя нови въпроси за съхранението и предаването на паметта.'
    },
    {
      title: 'Бъдещи перспективи',
      description: 'Технологиите отварят нови възможности за разбиране и използване на паметта.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="conclusion" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Заключение
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Паметта като мост между миналото и бъдещето
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
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
                  {point.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {point.description}
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
            Финални размисли
          </Typography>
          <Typography paragraph>
            Паметта е не просто спомен за миналото, а активен процес на конструиране на идентичност 
            и смисъл. Тя ни свързва с нашите корени, но също така ни дава възможност да формираме 
            бъдещето. В съвременния свят, балансът между традицията и иновацията е ключов за 
            запазването на автентичността на паметта, докато се възползваме от новите възможности 
            за нейното съхранение и предаване.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Conclusion; 