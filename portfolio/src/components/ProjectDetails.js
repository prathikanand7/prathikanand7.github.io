import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Heading,
  Collapse,
  Button,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const ProjectDetails = ({colorMode}) => {
   const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)'); // Background for cards (you can replace this with dynamic values)
   const cardTextColor = useColorModeValue('#2e2e2e', 'whiteAlpha.900'); // Text color for light/dark mode
  const activeTabBg = useColorModeValue('#888888', 'whiteAlpha.600');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  // Project data
  const projects = [
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
      description: 'This project simulates a trading engine that processes orders in parallel, mimicking the behavior of a Financial Market Order-Book.',
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
      description: 'This project provides an interactive Black-Scholes Option Pricing Model Web App that helps in visualizing option prices under varying conditions.',
      details: [
        'Crafted with HTML and CSS, seamlessly integrated into Python, harnessing the capabilities of powerful libraries including NumPy, Streamlit, Matplotlib, and Seaborn.',
        'Displays both Call and Put option prices using an interactive heatmap',
        'The dashboard allows real-time updates to the Black-Scholes model parameters',
        'Set custom ranges for Spot Price and Volatility to generate a comprehensive view of option prices under different market conditions',
      ],
      image: '/webapp.jpg'
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
      image: '/title_port.jpg'
    }
  ];

  // State for each project to manage expand/collapse
  const [openStates, setOpenStates] = useState(
    projects.reduce((acc, project) => ({ ...acc, [project.id]: false }), {})
  );

  const toggleCollapse = (id) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <Container maxW="container.lg" py={10}>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
        {projects.map((project) => (
          <Box key={project.id} p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
            <Image src={project.image} alt={project.title} height={250} width={450} borderRadius="md" mb="4" />
            <Heading as="h3" size="md" mb={4}>{project.title}</Heading>
            <Text color={activeTabBg} mb={4}>{project.description}</Text>

            {/* Toggle Button and Collapse */}
            <Box>
              <Button
                onClick={() => toggleCollapse(project.id)}
                rightIcon={openStates[project.id] ? <BsChevronUp /> : <BsChevronDown />}
                color= {colorMode === 'dark' ? 'white' : 'black'}
                variant="link"
                mb={2}
                fontWeight="normal"
                _hover={{ textDecor: 'none' }}
              >
                {openStates[project.id] ? 'Show less' : 'Show more'}
              </Button>
              <Collapse in={openStates[project.id]} animateOpacity>
                <Stack as="ul" spacing={2} pl={5} color="gray.400" listStyleType="disc">
                  {project.details.map((detail, index) => (
                    <Text  color={cardTextColor} as="li" key={index}>{detail}</Text>
                  ))}
                </Stack>
              </Collapse>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectDetails;