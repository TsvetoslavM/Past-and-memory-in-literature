import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import HistoryIcon from '@mui/icons-material/History';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import BrushIcon from '@mui/icons-material/Brush';
import MemoryIcon from '@mui/icons-material/Memory';

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

const Origin = () => {
  const eras = [
    {
      title: "Античност",
      icon: <HistoryIcon sx={{ fontSize: 40 }} />,
      color: "#6C63FF",
      sections: [
        {
          subtitle: "Литература и митология",
          icon: <AutoStoriesIcon sx={{ fontSize: 24 }} />,
          content: "Мнемозина (Mnemosyne) е богинята на паметта в гръцката митология и майка на музите. Името ѝ стои в основата на думата „мнемоника“. Омир и други поети предават епоси устно, използвайки техники на паметта, за да рецитират дълги разкази."
        },
        {
          subtitle: "Философия и наука",
          icon: <PsychologyIcon sx={{ fontSize: 24 }} />,
          content: "Платон разглежда паметта като припомняне на вечни идеи, които душата е познавала още преди раждането. Аристотел прави разграничение между памет (пасивно запомняне на миналото) и припомняне (активен процес на възстановяване на знанието)."
        },
        {
          subtitle: "Техники на паметта",
          icon: <MemoryIcon sx={{ fontSize: 24 }} />,
          content: "Развива се „изкуството на паметта“ (ars memoriae), включващо техники като методa на местата (method of loci), при който информацията се свързва с визуални образи в познати пространства."
        }
      ]
    },
    {
      title: "Средновековие",
      icon: <AutoStoriesIcon sx={{ fontSize: 40 }} />,
      color: "#FF6584",
      sections: [
        {
          subtitle: "Литература и религия",
          icon: <AutoStoriesIcon sx={{ fontSize: 24 }} />,
          content: "Християнската традиция подчертава значението на паметта за духовния живот чрез практики като медитация върху библейски текстове. „Книгата на паметта“ на Мери Карътърс изследва как монасите използват визуални и текстови техники за запаметяване на свещените писания."
        },
        {
          subtitle: "Културни аспекти",
          icon: <BrushIcon sx={{ fontSize: 24 }} />,
          content: "Паметта се разглежда като морално задължение и средство за съхраняване на традициите и знанието. Манускриптите често съдържат илюстрации и символи, подпомагащи запаметяването."
        }
      ]
    },
    {
      title: "Ренесанс",
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      color: "#4CAF50",
      sections: [
        {
          subtitle: "Литература и изкуство",
          icon: <BrushIcon sx={{ fontSize: 24 }} />,
          content: "Шекспир и други автори използват интертекстуалност, като препращат към класически произведения, демонстрирайки културна памет. Изкуството на паметта се развива с нови методи, включващи сложни визуални системи за запаметяване."
        },
        {
          subtitle: "Философия и наука",
          icon: <ScienceIcon sx={{ fontSize: 24 }} />,
          content: "Хуманизмът подчертава значението на индивидуалната памет и опита. Научната революция води до интерес към механиката на паметта и нейната роля в познанието."
        }
      ]
    },
    {
      title: "Модерна епоха",
      icon: <MemoryIcon sx={{ fontSize: 40 }} />,
      color: "#FF9800",
      sections: [
        {
          subtitle: "Литература",
          icon: <AutoStoriesIcon sx={{ fontSize: 24 }} />,
          content: "Модернистки автори като Марсел Пруст изследват субективната памет и нейната роля в идентичността. Постмодернизмът разглежда паметта като фрагментирана и податлива на манипулация."
        },
        {
          subtitle: "Наука и технологии",
          icon: <ScienceIcon sx={{ fontSize: 24 }} />,
          content: "Психологията и невронауката изучават процесите на запаметяване и забравяне, включително феномени като фалшиви спомени. Дигиталната ера променя начина, по който съхраняваме и възприемаме паметта, с възможности за архивиране и споделяне на информация в глобален мащаб."
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <InteractiveElements type="origin" />
      
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Произход и значение
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Историческо развитие на концепцията за паметта
          </Typography>
          <HistoryIcon sx={{ color: '#6C63FF', fontSize: 48, mb: 2 }} />
        </motion.div>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {eras.map((era, index) => (
          <motion.div
            key={era.title}
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
                <Box sx={{ color: era.color }}>
                  {era.icon}
                </Box>
                <Typography variant="h4" sx={{ color: era.color, fontWeight: 700 }}>
                  {era.title}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {era.sections.map((section) => (
                  <Box key={section.subtitle} sx={{ pl: 2, borderLeft: `3px solid ${era.color}` }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                      <Box sx={{ color: era.color }}>
                        {section.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {section.subtitle}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ pl: 4 }}>
                      {section.content}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Origin; 