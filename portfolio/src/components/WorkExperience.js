import { useState } from 'react';
import { Box, Heading, Text, Stack, Flex, Collapse, IconButton, useColorModeValue, Spacer, Image } from '@chakra-ui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const WorkExperience = () => {
  // States to control the collapse for each job
  const [isOpenArup, setIsOpenArup] = useState(false);
  const [isOpenAtkins, setIsOpenAtkins] = useState(false);
  const cardBg = useColorModeValue('#ECEAE5', 'rgba(31, 41, 55, 1)');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  return (
    <Box p={6} bg={cardBg} shadow="md" rounded="lg" _hover={{ shadow: shadowColor }}>
      <Heading as="h2" size="lg" mb={4}>Work Experience</Heading>
      <Stack spacing={4}>
        {/* Job 1: ARUP */}
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
              <Image
                src="/arup.jpg"
                alt="ARUP"
                borderRadius="lg"
                boxSize="50px"
                objectFit="cover"
                mr={4} // Adjust the space between the image and text
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Software Developer (G3)</Heading>
              <Text>ARUP</Text>
            </Box>
            <Spacer />
            <Text color="gray.500" mr={4}>2022 - Present</Text>
            <IconButton
              icon={isOpenArup ? <BsChevronUp /> : <BsChevronDown />}
              size={"sm"}
              variant="ghost"
              aria-label="Toggle ARUP Details"
              onClick={() => setIsOpenArup(!isOpenArup)}
            />
          </Flex>
          <Collapse in={isOpenArup} animateOpacity>
            <Box mt={4} pl={6}>
              <Text>• Worked on an API design architecture and modularised old C++ code base to modern standards</Text>
              <Text>• Test driven development using Catch2 and Google testing frameworks to design reusable and reliable code</Text>
              <Text>• Front-end development of sidebar and dialog boxes using Vue 3, HTML/CSS and JS</Text>
            </Box>
          </Collapse>
        </Box>

        {/* Job 2: ATKINS */}
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
                <Image
                  src="/atkins.jpg"
                  alt="ARUP"
                  borderRadius="lg"
                  boxSize="50px"
                  objectFit="cover"
                mr={4}
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Assistant Engineer</Heading>
              <Text>ATKINS</Text>
            </Box>
            <Spacer />
            <Text color="gray.500" mr={4}>2020 - 2022</Text>
            <IconButton
              icon={isOpenAtkins ? <BsChevronUp /> : <BsChevronDown />}
              size={"sm"}
              variant="ghost"
              aria-label="Toggle ATKINS Details"
              onClick={() => setIsOpenAtkins(!isOpenAtkins)}
            />
          </Flex>
          <Collapse in={isOpenAtkins} animateOpacity>
            <Box mt={4} pl={6}>
              <Text>• Worked on an API design architecture and modularised old C++ code base to modern standards</Text>
              <Text>• Test driven development using Catch2 and Google testing frameworks to design reusable and reliable code</Text>
              <Text>• Front-end development of sidebar and dialog boxes using Vue 3, HTML/CSS and JS</Text>
            </Box>
          </Collapse>
        </Box>
      </Stack>
    </Box>
  );
};

export default WorkExperience;

