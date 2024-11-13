import React, { useState } from 'react';
import {
  Box,
  Container,
  Collapse,
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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { BsSun as SunIcon, BsMoon as MoonIcon, BsChevronRight as ChevronRightIcon, BsSquareFill, BsSquareHalf, BsSquare, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Phone, Github, Linkedin, Mail, Twitter, Download, Youtube } from 'lucide-react';
import WorkExperience from './components/WorkExperience';
import ProjectDetails from './components/ProjectDetails';
import AboutSection from './components/AboutSection';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


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

  // Disclosure hook for toggling foldable boxes
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode('dark');
  const [activeTab, setActiveTab] = useState('about');

  // Color variables called at the top level
  const bgColor = useColorModeValue('#F3F2ED', '#rgba(31, 41, 100, 1)'); // Background color for light/dark mode
  const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)'); // Card, header, and footer background
  const cardTextColor = useColorModeValue('#2e2e2e', 'whiteAlpha.900'); // Text color for light/dark mode
  const activeTabBg = useColorModeValue('#888888', 'whiteAlpha.600');
  const activeTabColor = useColorModeValue('#2e2e2e', '#2e2e2e');
  const buttonHoverBg = useColorModeValue('#cbd5e0', 'whiteAlpha.200');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  const CopyPhoneButton = () => {
    const toast = useToast(); // Initialize useToast hook

    const handleCopyPhoneNumber = () => {
      navigator.clipboard.writeText("+91-9003939327"); // Copy phone number to clipboard
      toast({
        title: "Phone number copied.",
        description: "+91-9003939327 has been copied to your clipboard.",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom",
      });
    };
    return <IconButton icon={<Phone />} aria-label="Copy Phone Number" variant="outline" mr={4} _hover={{ bg: buttonHoverBg }} shadow={shadowColor} onClick={handleCopyPhoneNumber} />;
  };


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
            {/* Responsive Heading */}
            <Heading size={{ base: 'md', md: 'lg' }}>Prathik's Profile</Heading>
            {/* Desktop Navigation */}
            <Flex align="center" display={{ base: 'none', md: 'flex' }}>
              <Stack direction="row" spacing={4} mr={4}>
                {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
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
                _hover={{ bg: buttonHoverBg }}
              />
            </Flex>
            {/* Mobile Navigation (Hamburger Menu) */}
            <IconButton
              aria-label="Open Menu"
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: 'flex', md: 'none' }}
              onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              variant="outline"
            />
          </Flex>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <Box display={{ base: 'block', md: 'none' }} mt={4}>
              <Stack spacing={4}>
                {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    onClick={() =>
                      setActiveTab(item.toLowerCase()) & onMenuClose()}
                    bg={activeTab === item.toLowerCase() ? activeTabBg : undefined}
                    color={activeTab === item.toLowerCase() ? activeTabColor : 'gray.500'}
                    _hover={{ bg: buttonHoverBg }}
                    width="100%"
                  >
                    {item}
                  </Button>
                ))}
                <Button onClick={toggleColorMode} variant="outline" width="100%">
                  {colorMode === 'light' ? <SunIcon color="black" /> : <MoonIcon />}
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>

      <Container maxW="container.lg" py={10}>
        {/* Resume tab with hero-style About Me card */}
        {activeTab === 'about' && (
          <AboutSection />
        )}
        {activeTab === 'resume' && (
          <Stack spacing={6}>
            <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                mb={6}>
                {/* Left: Picture */}
                <Box flex="1" mb={{ base: 4, md: 0 }}>
                  <Image
                    src="/pro_pic.jpg"
                    alt="Prathik Anand Krishnan"
                    borderRadius="lg"
                    boxSize="200px"
                    objectFit="cover"
                  />
                </Box>
                {/* Right: Contact info and About */}
                <Box flex="3" pl={{ base: 0, md: 6 }} textAlign={{ base: "center", md: "left" }}>
                  <Heading as="h1" size="xl" mb={4}>
                    Prathik Anand Krishnan
                  </Heading>
                  <Heading as="h3" size="md" fontWeight="medium" mb={4}>
                    C++ Software Developer
                  </Heading>

                  <Flex justify={{ base: "center", md: "flex-start" }} mb={6} wrap="wrap" >
                    <IconButton
                      as="a"
                      href="mailto:prathikanand7@gmail.com"
                      icon={<Mail />}
                      aria-label="Mail"
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      mr={4}
                      _hover={{ bg: buttonHoverBg }}
                      shadow={shadowColor}
                    />
                    <CopyPhoneButton />
                    <IconButton
                      as="a"
                      href="https://www.linkedin.com/in/prathik-anand"
                      icon={<Linkedin />}
                      aria-label="Linkedin"
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      mr={4}
                      _hover={{ bg: buttonHoverBg }}
                      shadow={shadowColor}
                    />
                    <IconButton
                      as="a"
                      href="https://github.com/prathikanand7"
                      icon={<Github />}
                      aria-label="Github"
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      mr={4}
                      _hover={{ bg: buttonHoverBg }}
                      shadow={shadowColor}
                    />
                    <IconButton
                      as="a"
                      href="/Prathik_Anand_dec_resume.pdf"
                      icon={<Download />}
                      aria-label="Download Resume"
                      variant="outline"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Security measure when using target="_blank"
                      mr={4}
                      shadow={shadowColor}
                    />
                  </Flex>
                </Box>
              </Flex>
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
                Beyond the office, I'm fueled by a great desire to engineer and learn more about the robust solutions that are applied in the trading industry to help push the boundaries.
              </Text>
            </Box>

            <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
              <Heading as="h2" size="lg" mb={10}>Skills</Heading>

              <Box mb={6}>
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
                      <SkillBar level={skill.level} />
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>
              <Link
                onClick={onToggle}
                position="relative"
                mb={isOpen ? 4 : 0}
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg={cardBg}
                rounded="lg"
                color={colorMode === 'dark' ? 'white' : 'black'}
                _hover={{}}
                transition="margin-bottom 0.4s"
              >
                <Text color={cardTextColor} fontWeight="normal">{isOpen ? '' : 'Show more'}</Text>
                <IconButton
                  icon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
                  size={"lg"}
                  variant="unstyled"
                  color={colorMode === 'dark' ? 'white' : 'black'}
                  aria-label="Toggle Sections"
                />
              </Link>
              <Collapse in={isOpen} animateOpacity>

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
                        <SkillBar level={skill.level} />
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
                        <SkillBar level={skill.level} />
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
                        <SkillBar level={skill.level} />
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
                        <SkillBar level={skill.level} />
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Box>
              </Collapse>
            </Box>

            <WorkExperience />

            <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
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

            <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
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
          <ProjectDetails colorMode={colorMode} />
        )}

        {activeTab === 'contact' && (
          <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
            <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
            <Flex justify="center" spacing={8}>
              <IconButton
                as="a"
                href="mailto:prathikanand7@gmail.com"
                icon={<Mail />}
                aria-label="Mail"
                variant="outline"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security measure when using target="_blank"
                mr={4}
                shadow={shadowColor}
                _hover={{ bg: buttonHoverBg }}
              />
              <CopyPhoneButton />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/prathik-anand"
                icon={<Linkedin />}
                aria-label="Linkedin"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                mr={4}
                shadow={shadowColor}
                _hover={{ bg: buttonHoverBg }}
              />
              <IconButton
                as="a"
                href="https://github.com/prathikanand7"
                icon={<Github />}
                aria-label="Github"
                variant="outline" mr={4}
                target="_blank"
                rel="noopener noreferrer"
                shadow={shadowColor}
                _hover={{ bg: buttonHoverBg }}
              />
              <IconButton
                as="a"
                href="https://www.youtube.com/@CodersGang"
                icon={<Youtube />}
                aria-label="Youtube"
                variant="outline"
                mr={4}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ bg: buttonHoverBg }}
                shadow={shadowColor}
              />
              <IconButton
                as="a"
                href="https://x.com/prathikanand7"
                icon={<Twitter />}
                aria-label="Twitter"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                mr={4}
                shadow={shadowColor}
                _hover={{ bg: buttonHoverBg }}
              />
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
