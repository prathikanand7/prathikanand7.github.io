import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  HStack,
  Stack,
  SimpleGrid,
  Button,
  IconButton,
  Link,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsSun as SunIcon, BsMoon as MoonIcon, BsChevronRight as ChevronRightIcon, BsSquareFill, BsSquareHalf, BsSquare } from 'react-icons/bs';
import { Phone, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SkillBar = ({ level }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(level)) {
      stars.push(<BsSquareFill color={"888888"} key={i} />);
    } else if (i === Math.floor(level) && level % 1 !== 0) {
      stars.push(<BsSquareHalf color={"888888"} key={i} />);
    } else {
      stars.push(<BsSquare color={"888888"} key={i} />);
    }
  }
  return <HStack spacing={1}>{stars}</HStack>;
};

const Portfolio = () => {
  const { colorMode, toggleColorMode } = useColorMode('dark');
  const [activeTab, setActiveTab] = useState('about');

  // Color variables called at the top level
  const bgColor = useColorModeValue('#F3F2ED', '#rgba(31, 41, 100, 1)'); // Background color for light/dark mode
  const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)'); // Card, header, and footer background
  const cardTextColor = useColorModeValue('#2e2e2e', 'whiteAlpha.900'); // Text color for light/dark mode
  const activeTabBg = useColorModeValue('#888888', 'whiteAlpha.600');
  const activeTabColor = useColorModeValue('#2e2e2e', '#2e2e2e');
  const buttonHoverBg = useColorModeValue('#cbd5e0', 'whiteAlpha.300');

  return (
    <Box
      minH="100vh"
      bg={bgColor}
      color={cardTextColor}
      pt={8}
    >
      <Box as="header" bg={cardBg} color={cardTextColor} shadow="md" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading size="lg">Prathik Anand Krishnan</Heading>
            <Flex align="center">
              <Stack direction="row" spacing={4} mr={4}>
                {['About', 'Projects', 'Contact'].map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    onClick={() => setActiveTab(item.toLowerCase())}
                    bg={activeTab === item.toLowerCase() ? activeTabBg : undefined}
                    color={activeTab === item.toLowerCase() ? activeTabColor : 'gray.500'}
                    _hover={{ bg: buttonHoverBg }}
                    px={4}
                    py={2}
                    borderRadius="md"
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
              <IconButton
                aria-label="Toggle theme"
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <SunIcon color="black" /> : <MoonIcon />}
                variant="outline"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={10}>
        {activeTab === 'about' && (
          <Stack spacing={6}>
            <Box p={6} bg={cardBg} shadow="md" rounded="lg">
              <Heading as="h2" size="lg" mb={4}>About Me</Heading>
              <Text color={cardTextColor}>
                Hey there! I'm Prathik, a passionate C++ Software Developer with 2+ years of hands-on experience in crafting engineering solutions.
                <br />
                <br />
                Currently, I'm making my mark at{' '}
                <Link href="https://www.arup.com" isExternal color="blue.600" fontWeight="bold">
                  ARUP
                </Link>
                , where I contribute to the development of Oasys Structural Suite. My work centers on developing the pre-processing and post-processing API layers for Finite Element Analysis and Design software.
                <br />
                <br />
                Beyond the office, I'm fueled by a relentless drive to engineer and learn about the robust solutions that could help push the boundaries of the trading industry.
              </Text>
            </Box>
            <Box p={6} bg={cardBg} shadow="md" rounded="lg">
              <Heading as="h2" size="lg" mb={10}>Skills</Heading>

              <Box mb={10}>
                <Heading as="h3" size="md" mb={2}>Languages</Heading>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                  {[
                    { name: 'C/C++', level: 4 },
                    { name: 'Shell', level: 3 },
                    { name: 'JavaScript', level: 3.5 },
                    { name: 'Python', level: 3.5 },
                    { name: 'MATLAB', level: 2 },
                    { name: 'HTML/CSS', level: 4 },
                    { name: 'C#', level: 2 },
                    { name: 'Assembly Language', level: 1.5 },
                  ].map((skill) => (
                    <Flex key={skill.name} justify="space-between" align="center" mr={10}>
                      <Text ml={1} >
                        {skill.name}
                      </Text>
                      <SkillBar level={skill.level}  />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>

              <Box mb={10}>
                <Heading as="h3" size="md" mb={2}>Technologies/Frameworks</Heading>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                  {[
                    { name: 'MFC', level: 3.5 },
                    { name: 'React', level: 4 },
                    { name: 'Tailwind CSS', level: 3 },
                    { name: 'Google Test', level: 3.5 },
                    { name: 'Vue', level: 3.5 },
                    { name: 'Node.js', level: 4 },
                    { name: 'Catch 2', level: 3.5 },
                  ].map((skill) => (
                    <Flex key={skill.name} justify="space-between" align="center" mr={10}>
                      <Text ml={1} >
                        {skill.name}
                      </Text>
                      <SkillBar level={skill.level}  />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>

              <Box mb={10}>
                <Heading as="h3" size="md" mb={2}>Development Tools</Heading>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                  {[
                    { name: 'Git', level: 5 },
                    { name: 'Visual Studio', level: 4 },
                    { name: 'Conda', level: 4 },
                    { name: 'VSCode', level: 4 },
                    { name: 'Github', level: 4 },
                    { name: 'Azure', level: 2.5 },
                  ].map((skill) => (
                    <Flex key={skill.name} justify="space-between" align="center" mr={10}>
                      <Text ml={1} >
                        {skill.name}
                      </Text>
                      <SkillBar level={skill.level}  />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>

              <Box mb={10}>
                <Heading as="h3" size="md" mb={2}>Databases</Heading>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                  {[
                    { name: 'SQLite', level: 3 },
                    { name: 'MongoDB', level: 3 },
                    { name: 'SQL', level: 3 },
                  ].map((skill) => (
                    <Flex key={skill.name} justify="space-between" align="center" mr={10}>
                      <Text ml={1} >
                        {skill.name}
                      </Text>
                      <SkillBar level={skill.level}  />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>

              <Box mb={10}>
                <Heading as="h3" size="md" mb={2}>Things I'm Learning</Heading>
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                  {[
                    { name: 'Low Latency Systems', level: 2.5 },
                    { name: 'Quant Finance', level: 2 },
                    { name: 'C#', level: 2 },
                  ].map((skill) => (
                    <Flex key={skill.name} justify="space-between" align="center" mr={10}>
                      <Text ml={1} >
                        {skill.name}
                      </Text>
                      <SkillBar level={skill.level}  />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>

            <Box p={6} bg={cardBg} shadow="md" rounded="lg">
              <Heading as="h2" size="lg" mb={4}>Work Experience</Heading>
              <Stack spacing={4}>
                {[
                  { title: 'Software Developer (G3)', company: 'ARUP', period: '2022 - Present' },
                  { title: 'Assistant Engineer', company: 'ATKINS', period: '2020 - 2022' }
                ].map((exp, index) => (
                  <Flex key={index} justify="space-between" align="center">
                    <Box>
                      <Heading as="h3" size="md">{exp.title}</Heading>
                      <Text>{exp.company}</Text>
                    </Box>
                    <Text color="gray.500">{exp.period}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>

            <Box p={6} bg={cardBg} shadow="md" rounded="lg">
              <Heading as="h2" size="lg" mb={4}>Education</Heading>
              <Stack spacing={4}>
                {[
                  { degree: 'Master of Structural Engineering', school: 'BITS PILANI', year: '2018 - 2020' },
                  { degree: 'Bachelor of Technology in Civil Engineering', school: 'Amrita Vishwa Vidyapeetham', year: '2013 - 2017' }
                ].map((edu, index) => (
                  <Flex key={index} justify="space-between" align="center">
                    <Box>
                      <Heading as="h3" size="md">{edu.degree}</Heading>
                      <Text>{edu.school}</Text>
                    </Box>
                    <Text color="gray.500">{edu.year}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>

            <Box p={6} bg={cardBg} shadow="md" rounded="lg">
              <Heading as="h2" size="lg" mb={4}>Certificates</Heading>
              <Stack spacing={4}>
                {[
                  { name: 'Mastering critical C++17 skills', issuer: 'Udemy', link: 'https://www.udemy.com/certificate/UC-88e9a42b-25a8-4d4d-87da-472ebb8a2835/' },
                  { name: 'Harvard CS50 - Free Computer Science University Course', issuer: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/news/harvard-cs50/' },
                  { name: 'Version Control Systems', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/FNDCNZJD9Y4V' },
                  { name: 'Programming with JavaScript', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/M5LTN7J5LG3C' },
                  { name: 'Advanced React', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/4VHQ5EM95NA3' },
                ].map((cert, index) => (
                  <Link key={index} href={cert.link} isExternal color="blue.600" _hover={{ textDecoration: 'underline' }}>
                    <Flex justify="space-between" align="center">
                      <Box>
                        <Heading as="h3" size="md">{cert.name}</Heading>
                        <Text>{cert.issuer}</Text>
                      </Box>
                      <ChevronRightIcon />
                    </Flex>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Stack>
        )}

        {activeTab === 'projects' && (
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
            {[
              {
                id: 1,
                title: 'VanillaVision: Twin Pricing Engine',
                description: 'VanillaVision is a high-performance C++ application designed to compare the prices of European vanilla options using two distinct methods: the Black-Scholes analytical solution and Monte Carlo simulation.',
                details: [
                  'Utilized Modern C++ for developing the core logic of input parameters',
                  'Implemented lock-free data structure for Twin pricing engine',
                  'Leverages Multi-threading to speed up the Monte Carlo simulation',
                  'Direct comparison between analytical and simulated results'
                ],
                image: '/mc_pricer.jpg'
              },
              {
                id: 2,
                title: 'ConcurrentCandle: Trading Orderbook Simulation Suite',
                description: 'This project simulates a trading engine that processes orders in parallel, mimicking the behavior of a Financial Market Order-Book. ',
                details: [
                  'Built with Modern C++ and supports Market, Limit, and Stop orders',
                  'Leverages the power of multi-threading to process orders in parallel, improving performance on multi-core systems',
                  'Simulates random order generation to mimic real-time trading activity.',
                  'Automatically triggers stop orders based on the last trade price.',
                ],
                image: '/orderbook.jpg'
              },
              {
                id: 3,
                title: 'Black-Scholes Option Pricing Model Web App',
                description: 'This project provides an interactive Black-Scholes Option Pricing Model Web App that helps in visualizing option prices under varying conditions',
                details: [
                  'Crafted with HTML and CSS, seamlessly integrated into Python, harnessing the capabilities of powerful libraries including NumPy, Streamlit, Matplotlib, and Seaborn.',
                  'Displays both Call and Put option prices using an interactive heatmap',
                  'The dashboard allows real-time updates to the Black-Scholes model parameters',
                  'Set custom ranges for Spot Price and Volatility to generate a comprehensive view of option prices under different market conditions',
                ],
                image: "/webapp.jpg"
              },
              {
                id: 4,
                title: 'My personal portfolio Web App',
                description: 'This project showcases my journey as a passionate C++ Software Developer with expertise in building efficient, scalable solutions. It highlights my professional experience, key projects, and a range of technical skills',
                details: [
                  'A detailed overview of my roles and responsibilities in software development using responsive design',
                  'A comprehensive display of my expertise in various programming languages, frameworks with visual indicators of proficiency',
                  'Insight into the useful personal projects I have worked on, demonstrating my ability to deliver robust solutions.',
                  'The web app is hosted on GitHub Pages, ensuring reliable and free hosting. It leverages automatic deployment through GitHub Actions',
                ],
                image: "/title_port.jpg"
              }
            ].map((project) => (
              <Box key={project.id} p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: 'lg' }}>
                <Image src={project.image} alt={project.title} height={300} width={500} borderRadius="md" mb="4" />
                <Heading as="h3" size="md" mb={4}>{project.title}</Heading>
                <Text color={activeTabBg} mb={4}>{project.description}</Text>
                <Stack as="ul" spacing={2} pl={5} color="gray.400" listStyleType="disc">
                  {project.details.map((detail, index) => (
                    <Text color={cardTextColor} as="li" key={index}>{detail}</Text>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        )}

        {activeTab === 'contact' && (
          <Box p={6} bg={cardBg} shadow="md" rounded="lg">
            <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
            <Flex justify="center" spacing={8}>
              <IconButton as="a" href="https://github.com/prathikanand7" icon={<Github />} aria-label="Github" variant="outline" mr={4} />
              <IconButton as="a" href="https://www.linkedin.com/in/prathik-anand" icon={<Linkedin />} aria-label="Linkedin" variant="outline" mr={4} />
              <IconButton as="a" href="mailto:prathikanand7@gmail.com" icon={<Mail />} aria-label="Mail" variant="outline" mr={4} />
              <IconButton as="a" href="callto:+91-9003939327" icon={<Phone />} aria-label="Call" variant="outline" mr={4} />
              <IconButton as="a" href="https://x.com/prathikanand7" icon={<Twitter />} aria-label="Twitter" variant="outline" mr={4} />
            </Flex>
          </Box>
        )}
      </Container>

      <Box as="footer" bg={cardBg} color={cardTextColor} shadow="md" py={6} mt={12}>
        <Container maxW="container.lg" textAlign="center">
          © 2024 Prathik Anand Krishnan. All rights reserved.
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
