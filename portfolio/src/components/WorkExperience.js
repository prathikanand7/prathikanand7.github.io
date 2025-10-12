import { useState } from 'react';
import { Box, Heading, Text, Stack, Flex, Collapse, IconButton, useColorModeValue, Spacer, Image, Link } from '@chakra-ui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const WorkExperience = () => {
  // States to control the collapse for each job
  const [isOpenGoQuant, setIsOpenGoQuant] = useState(false);
  const [isOpenArupG3, setIsOpenArupG3] = useState(false);
  const [isOpenArupG2, setIsOpenArupG2] = useState(false);
  const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  return (
    <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
      <Heading as="h2" size="lg" mb={4}>Work Experience</Heading>
      <Stack spacing={4}>
        {/* Job 1: GoQuant */}
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
              <Image
                src="/goquantlogo.jpg"
                alt="GoQuant"
                borderRadius="lg"
                boxSize="50px"
                objectFit="cover"
                mr={4}
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Backend Engineer</Heading>
              <Text>GoQuant - Miami, FL, USA, Remote</Text>
            </Box>
            <Spacer />
            <Text color="gray.500" mr={4}>10/2024 - Present</Text>
            <IconButton
              icon={isOpenGoQuant ? <BsChevronUp /> : <BsChevronDown />}
              size={"sm"}
              variant="ghost"
              aria-label="Toggle GoQuant Details"
              onClick={() => setIsOpenGoQuant(!isOpenGoQuant)}
            />
          </Flex>
          <Collapse in={isOpenGoQuant} animateOpacity>
            <Box mt={4} pl={6}>
              <Text>• Designed and implemented a low-latency OEMS in C++17/Python, integrating REST and WebSocket endpoints for order execution and market data.</Text>
              <Text>• Designed and integrated IOC, OCO, GTT and DAY order algorithms with asynchronous order monitoring and thread-safe updates using mutexes.</Text>
              <Text>• Developed DEX adapters for Uniswap v4, Raydium, Orca and Hyperliquid enabling real-time trade execution, position tracking, and AMM simulations.</Text>
              <Text>• Built off-chain AMM and Blockchain smart contract interaction layer for Uniswap v4 and Orca DEX, supporting on-chain swaps via off-chain transaction signing.</Text>
              <Text>• Implemented WebSocket server (C++17, Drogon) for multi-client symbol subscriptions and live order book streaming.</Text>
              <Text>• Utilized Flatbuffers for high-performance market-data serialization, reducing overall system latency.</Text>
              <Text>• Developed automated builds and testing scripts using Meson, Conan, and Shell scripts achieving end-to-end CI/CD integration and pipeline automation.</Text>
              <Text>• Enhanced testing reliability by using randomized seed unit tests in C++20 and PyTest for stress testing.</Text>
            </Box>
          </Collapse>
        </Box>

        {/* Job 2: ARUP */}
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
              <Image
                src="/arup.jpg"
                alt="ARUP"
                borderRadius="lg"
                boxSize="50px"
                objectFit="cover"
                mr={4}
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Software Developer (G3)</Heading>
              <Text>ARUP - Hyderabad, India</Text>
            </Box>
            <Spacer />
            <Text color="gray.500" mr={4}>04/2023 - 10/2024</Text>
            <IconButton
              icon={isOpenArupG3 ? <BsChevronUp /> : <BsChevronDown />}
              size={"sm"}
              variant="ghost"
              aria-label="Toggle ARUP G3 Details"
              onClick={() => setIsOpenArupG3(!isOpenArupG3)}
            />
          </Flex>
          <Collapse in={isOpenArupG3} animateOpacity>
            <Box mt={4} pl={6}>
              <Text>• Developed a C++20 static library Adapter API using the Builder Pattern, deployed as a NuGet package for seamless integration between proprietary applications.</Text>
              <Text>• Applied Test-Driven Development (TDD) using Google Test frameworks, achieving 96% code coverage in SDK and integrated SonarQube and CodeCov for continuous quality checks.</Text>
              <Text>• Wrote Shell scripts for Azure Pipelines to automate build, deployment, and testing workflows.</Text>
              <Text>• Created UML diagrams on MIRO boards for low-level and high-level system architecture visualization.</Text>
              <Text>• Participated in pair programming and Tech-spikes to address technical debt.</Text>
              <Text>• Built a PostHog-based event logging system via REST API, enabling real-time analytics and feature flag management within the application.</Text>
            </Box>
          </Collapse>
        </Box>

        {/* Job 3: ARUP G2 */}
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
              <Image
                src="/arup.jpg"
                alt="ARUP"
                borderRadius="lg"
                boxSize="50px"
                objectFit="cover"
                mr={4}
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Software Developer (G2)</Heading>
              <Text>ARUP - Hyderabad, India</Text>
            </Box>
            <Spacer />
            <Text color="gray.500" mr={4}>11/2022 - 04/2023</Text>
            <IconButton
              icon={isOpenArupG2 ? <BsChevronUp /> : <BsChevronDown />}
              size={"sm"}
              variant="ghost"
              aria-label="Toggle ARUP G2 Details"
              onClick={() => setIsOpenArupG2(!isOpenArupG2)}
            />
          </Flex>
          <Collapse in={isOpenArupG2} animateOpacity>
            <Box mt={4} pl={6}>
              <Text>• Improved UI responsiveness by offloading resource-heavy operations to a separate std::thread, while using mutexes to preserve data integrity and thread safety.</Text>
              <Text>• Wrote units tests for code, achieving 86% code coverage for the project. Implemented hot-fixes and bug fixes identified during ensemble tests and black-box testing.</Text>
              <Text>• Implemented MFC UI features and backend logics to effectively execute synchronization initiative.</Text>
              <Text>• Hosted Monthly Software Development Meets (OSM) at ARUP, creating a platform for knowledge sharing and contributing to team's technical growth.</Text>
            </Box>
          </Collapse>
        </Box>
      </Stack>
    </Box>
  );
};

export default WorkExperience;

