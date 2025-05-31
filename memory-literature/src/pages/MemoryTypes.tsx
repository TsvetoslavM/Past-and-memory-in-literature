import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import MuseumIcon from '@mui/icons-material/Museum';
import HistoryIcon from '@mui/icons-material/History';
import HealingIcon from '@mui/icons-material/Healing';

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

const MemoryTypes = () => {
  const memoryTypes = [
    {
      title: "Лична (епизодична) памет",
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      color: "#6C63FF",
      description: "Съхранява индивидуалните спомени на героите – преживявания, емоции, важни моменти от живота им.",
      function: "Разкрива вътрешния свят на персонажите, мотивира действията им и обогатява психологическата дълбочина на творбата.",
      examples: [
        {
          title: "\"Арменци\" - Пейо Яворов",
          content: "Лирическият говорител изразява болката от загубата и носталгията по миналото, представяйки личната си памет за страданията на арменския народ."
        },
        {
          title: "\"До моето първо либе\" - Христо Ботев",
          content: "Поетът се обръща към първата си любов, споделяйки спомени и чувства, които разкриват личната му емоционална памет."
        },
        {
          title: "\"Аз искам да те помня все така\" - Димчо Дебелянов",
          content: "Стихотворението отразява стремежа на лирическия герой да запази спомена за любимата в най-красивата му форма."
        }
      ]
    },
    {
      title: "Колективна (национална) памет",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      color: "#FF6584",
      description: "Обединява спомените и историческите събития, които формират идентичността на една общност или народ.",
      function: "Подчертава значимостта на общата история и културното наследство, често с цел събуждане на национално самосъзнание.",
      examples: [
        {
          title: "\"Паисий\" - Иван Вазов",
          content: "Произведението подчертава значението на историческата памет за националното пробуждане и съхраняването на българската идентичност."
        },
        {
          title: "\"История славянобългарска\" - Паисий Хилендарски",
          content: "Този труд е призив към българите да помнят и ценят своето минало, като основа за национално самосъзнание."
        },
        {
          title: "\"Епопея на забравените\" - Иван Вазов",
          content: "Цикълът от поеми възкресява спомена за героични личности и събития, формиращи колективната памет на народа."
        }
      ]
    },
    {
      title: "Културна памет",
      icon: <MuseumIcon sx={{ fontSize: 40 }} />,
      color: "#4CAF50",
      description: "Съхранява знания, традиции и ценности, предавани през поколенията чрез текстове, ритуали и символи.",
      function: "Позволява на творбите да се свържат с предходни културни пластове, обогатявайки смисловите им нива.",
      examples: [
        {
          title: "\"Изворът на Белоногата\" - Петко Р. Славейков",
          content: "Поемата съчетава фолклорни мотиви и традиции, съхранявайки културната памет на българския народ."
        },
        {
          title: "\"Железният светилник\" - Димитър Талев",
          content: "Романът проследява съхраняването на българската културна идентичност в условията на чуждо владичество."
        },
        {
          title: "\"Бай Ганьо\" - Алеко Константинов",
          content: "Произведението представя образа на българина в края на XIX век, отразявайки културните особености и нрави на времето."
        }
      ]
    },
    {
      title: "Историческа памет",
      icon: <HistoryIcon sx={{ fontSize: 40 }} />,
      color: "#FF9800",
      description: "Отнася се до записаните и документирани събития от миналото.",
      function: "Предоставя контекст и автентичност на разказите, като често служи за анализ или критика на исторически процеси.",
      examples: [
        {
          title: "\"Под игото\" - Иван Вазов",
          content: "Романът описва живота на българите преди Освобождението, съхранявайки историческата памет за този период."
        },
        {
          title: "\"Записки по българските въстания\" - Захари Стоянов",
          content: "Мемоарният труд документира събитията от Априлското въстание, предоставяйки ценна историческа информация."
        },
        {
          title: "\"История\" - Никола Вапцаров",
          content: "Стихотворението разглежда историята от гледна точка на обикновения човек, подчертавайки значението на паметта за миналото."
        }
      ]
    },
    {
      title: "Травматична памет",
      icon: <HealingIcon sx={{ fontSize: 40 }} />,
      color: "#9C27B0",
      description: "Съхранява болезнени или травматични спомени, които често се проявяват чрез символика или фрагментарни образи.",
      function: "Изследва последствията от травми върху индивидуалната или колективната психика, често с цел катарзис или осмисляне.",
      examples: [
        {
          title: "\"Ноев ковчег\" - Йордан Радичков",
          content: "Разказът изследва личните и колективни спомени за трагични събития, отразявайки травматичната памет на героите."
        },
        {
          title: "\"Септември\" - Гео Милев",
          content: "Поемата представя трагичните събития от Септемврийското въстание, оставили дълбоки следи в националната памет."
        },
        {
          title: "\"Крадецът на праскови\" - Емилиян Станев",
          content: "Романът разглежда личните трагедии и загуби по време на война, отразявайки травматичната памет на героите."
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="memory-types" />
      
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Видове памет
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Различни форми на паметта в българската литература
          </Typography>
          <PsychologyIcon sx={{ color: '#6C63FF', fontSize: 48, mb: 2 }} />
        </motion.div>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {memoryTypes.map((type, index) => (
          <motion.div
            key={type.title}
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <Box sx={{ color: type.color }}>
                  {type.icon}
                </Box>
                <Typography variant="h4" sx={{ color: type.color, fontWeight: 700 }}>
                  {type.title}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Описание
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {type.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Функция в литературата
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {type.function}
                </Typography>
              </Box>

              <Box sx={{ pl: 2, borderLeft: `3px solid ${type.color}` }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Примери
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {type.examples.map((example) => (
                    <Box key={example.title} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: type.color }}>
                        {example.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {example.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default MemoryTypes; 