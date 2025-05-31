import { Container, Typography, Box, Paper, Button, Avatar} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TimelineIcon from '@mui/icons-material/Timeline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MemoryIcon from '@mui/icons-material/Memory';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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

const featuredQuote = {
  text: "Паметта е ковчег, в който събираме останките от живота.",
  author: "Йордан Радичков",
  work: "Ноев ковчег"
};

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
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', md: '3rem' }, background: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
                Да помниш значи да живееш
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                Открийте ролята на паметта в българската литература и култура
              </Typography>
              <AutoAwesomeIcon sx={{ color: '#FF6584', fontSize: 48, mb: 2 }} />
            </motion.div>
          </Box>
        </motion.div>

        {/* Featured Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 6,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                fontSize: 60,
                color: '#6C63FF',
                opacity: 0.2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                mb: 2,
                color: '#2D3748',
                position: 'relative',
                zIndex: 1,
              }}
            >
              "{featuredQuote.text}"
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#6C63FF' }}>
                {featuredQuote.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {featuredQuote.work}
              </Typography>
            </Box>
          </Paper>
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
                whileHover={{ scale: 1.06}}
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
                      background: section.color,
                      color: '#fff',
                      fontWeight: 700,
                      borderRadius: 3,
                      px: 3,
                      py: 1.2,
                      boxShadow: '0 2px 8px #6C63FF22',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: section.color,
                        opacity: 0.9,
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

        {/* Introduction and Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Box sx={{ mt: 8, mb: 6 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                textAlign: 'center', 
                mb: 4,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Литературен анализ на паметта
            </Typography>

            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                mt: 4
              }}
            >
              {[
                {
                  question: 'Кога хората мислят повече за миналото – в мирни времена или по време на кризи и войни?',
                  answer: 'По време на войни и кризи. В големите епически романи за война (напр. „Война и мир" от Лев Толстой) героите често се обръщат обратно към спомените си за покоя и обикновения живот, за да компенсират шока от полетата на битка. Пиер Безухов, например, в размислите си за смисъла на живота се връща към годините, когато семейният му дом е бил украсен за Коледа, търсейки утеха в паметта.',
                  conclusion: 'В много класически творби война и кризите отключват у хората по-силна носталгия и спомени за изгубеното спокойствие, докато в мирните периоди паметта се превръща в средство за изследване на идентичността и укрепване на семейните/обществените истории.'
                },
                {
                  question: 'Кои ценят спомените по-силно – тези, при които всичко е наред, или тези, които преживяват лишения и страдания?',
                  answer: 'Хората, които страдат и преживяват лишения. В много романи, които разглеждат теми за глад, емиграция или социално неравенство (например „Над пропастта във житата" от Джером Д. Селинджър или „Над златния поток" от Харолд Муд), страдащите герои често придават на спомените почти митологичен статус.',
                  conclusion: 'Преобладаващата тенденция в литературата е, че тежките изпитания и лишения превръщат паметта в утеха и спасение. За страдащите спомените са по-скъпи, защото върху фона на изпитанията блесват идеализирани образи на детство, роден дом или изгубена близост.'
                },
                {
                  question: 'Коя роля играе личната памет във формирането на идентичността?',
                  answer: 'При хората с безгрижен живот паметта често служи за изграждане и облагородяване на "социалния образ". В романа "Гордост и предразсъдъци" на Джейн Остин, героинята Елизабет Бенет използва спомените си за да изгради своята социална идентичност.',
                  conclusion: 'При лишените от сигурност паметта се превръща в морален ориентир, база за оцеляване и начин да запазят човечността си.'
                },
                {
                  question: 'Как паметта за трагедията се отразява в литературните произведения?',
                  answer: 'Паметта за трагедията в литературата често върви по две паралелни трасета: документалното (запазване на историческата действителност) и творческото (художествена интерпретация, метафоризация).',
                  conclusion: 'И двете форми доказват колко трудно е да оставим паметта без промяна – болезненият спомен търси начин да се превърне в изкуство.'
                }
              ].map((item, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      color: '#6C63FF'
                    }}
                  >
                    {item.question}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      color: 'text.primary',
                      lineHeight: 1.8
                    }}
                  >
                    {item.answer}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      borderLeft: '3px solid #6C63FF',
                      pl: 2,
                      py: 1
                    }}
                  >
                    {item.conclusion}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 