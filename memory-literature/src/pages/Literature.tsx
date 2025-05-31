import { Container, Typography, Box, IconButton, Paper, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveElements from '../components/InteractiveElements';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PublicIcon from '@mui/icons-material/Public';
import { useState } from 'react';

interface LiteraryExample {
  author: string;
  work: string;
  quote: string;
  analysis: string;
  distinctiveFeatures?: string;
}

const literaryExamples: LiteraryExample[] = [
  {
    author: 'Иван Вазов',
    work: 'Епопея на забравените',
    quote: 'О, неразумни юроде, поради що се срамиш да се наречеш българин?',
    analysis: 'Цикълът от поеми възкресява спомена за героични личности и събития от българската история, подчертавайки значението на колективната памет за националната идентичност.'
  },
  {
    author: 'Димитър Талев',
    work: 'Железният светилник',
    quote: 'Миналото не умира, то живее в нас.',
    analysis: 'Романът проследява живота на българско семейство през Възраждането, като подчертава значението на паметта за съхраняване на националната идентичност и културните традиции.'
  },
  {
    author: 'Елисавета Багряна',
    work: 'Старонародни образи',
    quote: 'В песните на баба ми живеят спомените на народа.',
    analysis: 'В този цикъл стихове Багряна използва фолклорни мотиви и образи, за да изрази връзката между индивидуалната и колективната памет, съхранявана чрез народните песни и предания.'
  },
  {
    author: 'Павел Вежинов',
    work: 'Нощем с белите коне',
    quote: 'Миналото е като сянка, която винаги ни следва.',
    analysis: 'Романът разглежда темата за паметта чрез мистични и символични елементи, като показва как спомените и преживяванията от миналото влияят върху настоящето и формират личността.'
  },
  {
    author: 'Гео Милев',
    work: 'Септември',
    quote: 'Паметта на народа е като жива рана.',
    analysis: 'Поемата отразява събитията от Септемврийското въстание през 1923 г., като представя колективната памет за страданията и борбата на народа срещу потисничеството.'
  },
  {
    author: 'Петко Р. Славейков',
    work: 'Изворът на Белоногата',
    quote: 'И ний сме дали нещо на светът.',
    analysis: 'Поемата представя идеализирания патриархален свят на миналото, акцентирайки върху необходимостта да се отстоява народностната чест и правото на свободен избор.'
  },
  {
    author: 'Пейо Яворов',
    work: 'Заточеници',
    quote: 'Ний бяхме млади, ний бяхме силни.',
    analysis: 'Стихотворението изразява носталгията и болката на българските революционери, изпратени на заточение, като паметта за родината и борбата остава жива в сърцата им.'
  },
  {
    author: 'Иван Вазов',
    work: 'Под игото',
    quote: 'Всичко беше в очакване на нещо велико.',
    analysis: 'Романът описва живота на българите преди Освобождението, съхранявайки историческата памет за този период и формирайки националното съзнание.'
  },
  {
    author: 'Пейо Яворов',
    work: 'Арменци',
    quote: 'Те нямат нищо, но имат всичко – спомена.',
    analysis: 'Стихотворението изразява състрадание към страданията на арменския народ, като личната памет на лирическия герой се преплита с колективната трагедия.'
  },
  {
    author: 'Димитър Талев',
    work: 'Железният светилник',
    quote: 'Светилникът гореше с пламък на вяра и надежда.',
    analysis: 'Романът проследява съхраняването на българската културна идентичност в условията на чуждо владичество, акцентирайки върху културната памет.'
  },
  {
    author: 'Георги Господинов',
    work: 'Времеубежище',
    quote: 'Миналото е убежище, но и капан.',
    analysis: 'Романът разглежда как обществата се обръщат към миналото в търсене на утеха, изследвайки политическите и лични аспекти на паметта.'
  },
  {
    author: 'Иван Вазов',
    work: 'Новото гробище над Сливница',
    quote: 'Тук лежат героите, забравени от живите.',
    analysis: 'Стихотворението отдава почит на загиналите в Сръбско-българската война, подчертавайки важността на запазването на историческата памет.'
  },
  {
    author: 'Захари Стоянов',
    work: 'Записки по българските въстания',
    quote: 'Паметта на народа е най-сигурният летописец.',
    analysis: 'Мемоарният труд документира събитията от Aприлското въстание, предоставяйки ценна историческа информация и съхранявайки колективната памет.'
  },
  {
    author: 'Иван Вазов',
    work: 'Паисий',
    quote: 'Историята е паметта на народа.',
    analysis: 'Одата подчертава значението на историческата памет за националното пробуждане и съхраняването на българската идентичност.'
  },
  {
    author: 'Христо Ботев',
    work: 'На прощаване',
    quote: 'Кажи на майка ми, че умирам за свободата.',
    analysis: 'Поемата изразява личната памет и саможертвата на героя в името на свободата, оставяйки следа в националната памет.'
  },
  {
    author: 'Христо Ботев',
    work: 'Обесването на Васил Левски',
    quote: 'Той беше човек, който живя за народа.',
    analysis: 'Стихотворението отдава почит на Васил Левски, подчертайки неговата роля в българската история и значението на паметта за героите.'
  },
  {
    author: 'Никола Вапцаров',
    work: 'История',
    quote: 'Какво ще ни дадеш, историйо, от пожълтелите си страници?... Ще хванеш контурите само, а вътре, знам, ще бъде празно и няма никой да разказва за простата човешка драма.',
    analysis: 'В стихотворението Вапцаров поставя под въпрос официалната история, която често пренебрегва съдбата на обикновения човек. Той противопоставя "пожълтелите страници" на живата, човешка памет, която съхранява страданията и борбите на народа.'
  },
  {
    author: 'Йордан Радичков',
    work: 'Ноев ковчег',
    quote: 'Паметта е ковчег, в който събирамеostenките от живота.',
    analysis: 'Романът използва библейския символ на ковчега, за да представи паметта като средство за съхраняване на човешкия опит, култура и природа. Радичков изследва как индивидуалната и колективната памет се преплитат, създавайки пространство, в което се запазват историите на обикновените хора и връзката им с природата.'
  }
];

const worldLiteratureExamples: LiteraryExample[] = [
  {
    author: 'Marcel Proust',
    work: 'In Search of Lost Time',
    quote: 'The taste of the madeleine awakened memories hidden in the depths of consciousness.',
    analysis: 'Романът изследва концепцията за неволевата памет, показвайки как сетивните възприятия могат да възкресят забравени спомени.',
    distinctiveFeatures: 'Прустовата концепция за неволевата памет революционизира литературното изобразяване на времето и съзнанието. Неговото влияние се простира върху множество писатели и философи, включително Жил Дельоз, който анализира как паметта интерпретира знаците творчески, но неточно.'
  },
  {
    author: 'Jorge Luis Borges',
    work: 'Funes the Memorious',
    quote: 'Funes could remember every detail of every moment.',
    analysis: 'Разказът представя човек с абсолютна памет, разглеждайки както благословиите, така и тежестта на неспособността да се забравя.',
    distinctiveFeatures: 'Борхес използва Фунес като метафора за границите на човешкото познание и опасностите от прекомерната памет. Разказът е вдъхновил множество произведения и изследвания, свързани с паметта и нейните патологии.'
  },
  {
    author: 'Kazuo Ishiguro',
    work: 'The Remains of the Day',
    quote: 'Memories are all we have left.',
    analysis: 'Романът изследва как паметта и самозаблудата оформят идентичността и възприятието за миналото.',
    distinctiveFeatures: 'Ишигуро разглежда темата за паметта чрез призмата на личната отговорност и историческата вина. Неговият стил се отличава с фокус върху неизказаното и вътрешните конфликти, свързани с паметта и забравата.'
  },
  {
    author: 'Annie Ernaux',
    work: 'The Years',
    quote: 'Memory is like a photograph – it fades with time.',
    analysis: 'Авторката използва автобиографични елементи, за да изследва как личната и колективната памет се преплитат в съвременното общество.',
    distinctiveFeatures: 'Ерно съчетава личната история с колективната, създавайки нов жанр, който се намира между автобиографията и социологическото изследване. Нейният стил е повлиян от Жорж Перек и се характеризира с опит да се отговори на амнезията на съвременното общество чрез изчерпателно представяне на реалността.'
  },
  {
    author: 'Ahlam Mostaganmi',
    work: 'Memory in the Flesh',
    quote: 'The scars of the body are the imprints of memory.',
    analysis: 'Романът разглежда как личните и националните травми оставят следи в съзнанието и тялото, подчертавайки ролята на паметта в идентичността.',
    distinctiveFeatures: 'Мостаганми е първата алжирска жена, която пише роман на арабски език, като по този начин преодолява лингвистичната колониална доминация. Нейният роман е алегория за постколониалната травма и е повлиял на множество арабски писателки, насърчавайки ги да изразяват своите истории на роден си език.'
  },
  {
    author: 'Yoko Ogawa',
    work: 'The Memory Police',
    quote: 'When something is gone, it is gone forever.',
    analysis: 'В този дистопичен роман, жителите на остров постепенно забравят обекти, понятия и спомени, които изчезват от живота им. Главната героиня, писателка, се опитва да съхрани спомените си, докато властите – Полицията на паметта – следят за пълното изчезване на забравеното.',
    distinctiveFeatures: 'Романът изследва темата за колективната амнезия и контрола върху паметта в тоталитарно общество. Сравняван е с творбите на Джордж Оруел и Франц Кафка, като подчертава опасностите от загубата на индивидуалната и културната памет.'
  },
  {
    author: 'Kazuo Ishiguro',
    work: 'The Buried Giant',
    quote: 'The fog of oblivion covered everything, but the truth always found its way.',
    analysis: 'В пост-артурианска Англия, възрастна двойка – Аксел и Беатрис – тръгва на пътешествие, за да намери сина си, въпреки че не могат да си спомнят ясно за него. Мъглата, която покрива земята, символизира колективната амнезия, наложена след война, за да се запази мирът.',
    distinctiveFeatures: 'Романът разглежда темата за съзнателното забравяне като средство за избягване на конфликти, поставяйки въпроса дали истинският мир може да се постигне чрез потискане на болезнените спомени.'
  },
  {
    author: 'Georges Perec',
    work: 'W or Memory of Childhood',
    quote: 'My memory is full of holes, but it is these gaps that shape it.',
    analysis: 'Тази полуавтобиографична творба съчетава два паралелни наратива: един за измислен остров с тоталитарен режим и друг – за детските спомени на автора по време на Втората световна война. Перек изследва как паметта и забравата се преплитат, оформяйки личната идентичност.',
    distinctiveFeatures: 'Романът представя уникална структура, редуваща фикция и автобиография, за да изследва фрагментарността на паметта и влиянието на травмата върху възприятието на миналото.'
  }
];

// Combine both arrays for the book
const allLiteraryExamples = [...literaryExamples, ...worldLiteratureExamples];

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
  const totalPages = allLiteraryExamples.length;

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
          Паметта в българската и световната литература
        </Typography>
        <MenuBookIcon sx={{ color: '#6C63FF', fontSize: 48, mb: 2 }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 480 }}>
        <IconButton onClick={handlePrev} sx={{ mr: 2, bgcolor: 'rgba(108,99,255,0.08)', '&:hover': { bgcolor: '#6C63FF', color: '#fff' }, boxShadow: 2 }}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <Box sx={{ position: 'relative', width: { xs: '100%', sm: 700, md: 1000 }, minHeight: 520, perspective: 1200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                        {allLiteraryExamples[page].author}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
                        {allLiteraryExamples[page].work}
                      </Typography>
                      {allLiteraryExamples[page].distinctiveFeatures && (
                        <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(108, 99, 255, 0.05)', borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                            Отличителни черти и влияние:
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {allLiteraryExamples[page].distinctiveFeatures}
                          </Typography>
                        </Box>
                      )}
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
                          "{allLiteraryExamples[page].quote}"
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                        {allLiteraryExamples[page].analysis}
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

      {/* Bulgarian Literature Cards */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 800, mb: 3, textAlign: 'center' }}>
          Българска литература
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
          {literaryExamples.map((example) => (
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
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px #6C63FF22'
                }
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

      {/* World Literature Section */}
      <Box sx={{ mt: 12, mb: 8 }}>
        <Divider sx={{ my: 6 }}>
          <PublicIcon sx={{ color: 'primary.main', fontSize: 40 }} />
        </Divider>
        
        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 800, mb: 3, textAlign: 'center' }}>
          Световна литература
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
          Паметта в световната литература
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
          {worldLiteratureExamples.map((example) => (
            <Paper
              key={example.author + example.work}
              elevation={3}
              sx={{
                minWidth: 280,
                maxWidth: 400,
                flex: '1 1 280px',
                p: 3,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 2px 16px #6C63FF11',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px #6C63FF22'
                }
              }}
            >
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1, textAlign: 'center' }}>
                {example.author}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
                {example.work}
              </Typography>
              <Box sx={{ my: 2, p: 2, bgcolor: 'rgba(108, 99, 255, 0.07)', borderRadius: 2, width: '100%' }}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
                  "{example.quote}"
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                {example.analysis}
              </Typography>
              <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(108, 99, 255, 0.1)' }}>
                <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                  Отличителни черти и влияние:
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {example.distinctiveFeatures}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Literature; 