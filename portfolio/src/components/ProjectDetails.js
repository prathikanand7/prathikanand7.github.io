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
  IconButton,
} from '@chakra-ui/react';
import { Github, Globe } from 'lucide-react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';


const ProjectDetails = ({ colorMode }) => {
  const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)'); // Background for cards (you can replace this with dynamic values)
  const cardTextColor = useColorModeValue('#2e2e2e', 'whiteAlpha.900'); // Text color for light/dark mode
  const activeTabBg = useColorModeValue('#888888', 'whiteAlpha.600');
  const shadowColor = useColorModeValue('lg', 'dark-lg');
  const buttonHoverBg = useColorModeValue('#cbd5e0', 'whiteAlpha.200');

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
      href: 'https://github.com/prathikanand7/Quant-Finance-Tools/tree/main/VanillaVision_TwinPricingEngine',
      image: '/mc_pricer.jpg'
    },
    /* {
      id: 2,
      title: 'Order Execution And Management System (OEMS) to trade on Deribit using C++17',
      description: `A YouTube video Demo on how to Automate your Crypto Trading using C++17! Step-by-Step Guide for Developer. This is a console application for order execution and management system to trade on Deribit Test (https://test.deribit.com/)`,
      details: [
        'Provides low-latency REST API access to all supported symbols on Deribit test using the Deribit API',
        'Websocket server that clients can connect to and subscribe to a symbol by sending a message.',
        'GoQuant OEMS is a high-performance C++17 application designed for interacting with the Deribit cryptocurrency trading platform.',
        'This application supports various trading functionalities, including placing, modifying, and canceling orders, as well as managing open orders, positions, and retrieving order books.',
      ],
      href: 'https://www.youtube.com/watch?v=BGOWIUk7ZSE',
      image: '/goQuant.jpg'
    }, */
    {
      id: 6,
      title: 'ConcurrentCandle: Trading Orderbook Simulation Suite',
      description: 'This project simulates a trading engine that processes orders in parallel, mimicking the behavior of a Financial Market Order-Book.',
      details: [
        'Built with Modern C++ and supports Market, Limit, and Stop orders',
        'Leverages the power of multi-threading to process orders in parallel, improving performance on multi-core systems',
        'Simulates random order generation to mimic real-time trading activity.',
        'Automatically triggers stop orders based on the last trade price.',
      ],
      href: 'https://github.com/prathikanand7/Quant-Finance-Tools/tree/main/order_book',
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
      href: 'https://black-scholes-option-pricing-modeller.streamlit.app/',
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
      href: 'https://prathikanand7.github.io/',
      image: '/title_port.jpg'
    },
    {
      id: 5,
      title: 'Babylon.js 2D Shape Extrusion and Manipulation',
      description: 'The goal of this assignment is to create a Babylon.js application that allows the user to draw arbitrary 2D shapes on the ground plane, extrude them into 3D objects with a fixed height, and then manipulate those objects by moving the object and editing their vertices using buttons for mode selection.',
      details: [
        'Implement functionality to allow the user to draw 2D shapes on the ground plane using mouse interactions',
        'Once the shape is completed (a closed loop), provide a UI element (e.g., button) to initiate the extrusion process. ',
        'Allow the user to move the extruded objects on the ground plane using mouse interactions (e.g., click and drag). Provide a "Move" button to enter move mode.',
        'Implement functionality to edit the vertices of the extruded object using mouse interactions (e.g., click and drag to move vertices). All vertices of the shape should be editable. The user should be able to freely move the vertices in 3D space.',
      ],
      href: 'https://github.com/prathikanand7/Snaptrude-Assignment',
      image: '/snaptrude_babylon.jpg'
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
            <IconButton
              as="a"
              href={project.href}
              icon={(project.id === 1 || project.id === 6 || project.id === 5) ? <Github /> : <Globe />}
              aria-label="Github"
              variant="outline"
              _hover={{ bg: buttonHoverBg }}
              shadow={shadowColor}
              target="_blank"
              rel="noopener noreferrer"
              mb={2}
            />
            {/* Toggle Button and Collapse */}
            <Box>
              <Button
                onClick={() => toggleCollapse(project.id)}
                rightIcon={openStates[project.id] ? <BsChevronUp /> : <BsChevronDown />}
                color={colorMode === 'dark' ? 'white' : 'black'}
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
                    <Text color={cardTextColor} as="li" key={index}>{detail}</Text>
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