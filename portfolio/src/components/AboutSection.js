import React from 'react';
import {
  Container,
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

const AboutSection = () => {
  // Define your colors based on the colorMode (if needed)
  const cardTextColor = useColorModeValue('#2e2e2e', 'whiteAlpha.900');
  const buttonHoverBg = useColorModeValue('#cbd5e0', 'whiteAlpha.200');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  return (
    <Container maxW="container.lg" py={10}>
      <Stack spacing={6}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile (base), horizontally on desktop (md+)
          alignItems="center"
        >
          {/* Left: About details */}
          <Box flex="1" p={6} textAlign={{ base: 'center', md: 'left' }}> {/* Center text on mobile */}
            <Heading as="h3" size="xl" fontWeight="bold" mb={6}>
              Hey, I'm Prathik. I live in Bangalore, where I work as a Software Developer.
            </Heading>
            <Text color={cardTextColor} fontSize="lg" mb={6}>
              Hey! I'm Prathik Anand, a passionate C++ Software Developer working in the structural industry.
              <br />
              <br />
              Currently, I'm working at{' '}
              <Link href="https://www.arup.com" isExternal color="blue.600" fontWeight="bold">
                ARUP
              </Link>, leveraging my skills in C++ to modernize and enhance API layers for Finite Element Analysis and Design.
              <br />
              <br />
              Besides my day-to-day work, I am driven by a passion for exploring the latest trends in tech, especially in the trading industry.
            </Text>
          </Box>

          {/* Right: Profile picture and contact */}
          <Box flex="1" textAlign="center" mt={{ base: 6, md: 0 }} maxW={{ base: '100%', md: '320px' }}> {/* Add margin on top for mobile */}
            <Image
              src="/my_pic.jpg"
              alt="Prathik Anand Krishnan"
              borderRadius="xl"
              boxSize={{ base: '200px', md: '300px' }} // Adjust image size for mobile
              objectFit="cover"
              mb={6}
              transform="rotate(-0deg)"
            />
            <Stack
              spacing={6}
              direction="row"
              justify="center"
              align="center"
              mb={8}
              mt={{ base: 4, md: 20 }} // Adjust top margin for mobile
            >
              <IconButton
                as="a"
                href="mailto:prathikanand7@gmail.com"
                icon={<Mail />}
                aria-label="Mail"
                variant="outline"
                _hover={{ bg: buttonHoverBg }}
                shadow={shadowColor}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/prathik-anand"
                icon={<Linkedin />}
                aria-label="Linkedin"
                variant="outline"
                _hover={{ bg: buttonHoverBg }}
                shadow={shadowColor}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://github.com/prathikanand7"
                icon={<Github />}
                aria-label="Github"
                variant="outline"
                _hover={{ bg: buttonHoverBg }}
                shadow={shadowColor}
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconButton
                as="a"
                href="https://www.youtube.com/@CodersGang"
                icon={<Youtube />}
                aria-label="Youtube"
                variant="outline"
                _hover={{ bg: buttonHoverBg }}
                shadow={shadowColor}
                target="_blank"
                rel="noopener noreferrer"
              />
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default AboutSection;
