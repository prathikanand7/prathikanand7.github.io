import { useState } from 'react';
import { Box, Heading, Text, Stack, Flex, Collapse, IconButton, useColorModeValue, Spacer, Image, Link } from '@chakra-ui/react';
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
              <Text>• Worked on two C++ feature development for {' '} <Link href="https://www.oasys-software.com/products/gsa/suite/"  isExternal color="blue.600" fontWeight="bold" >Oasys - GSA</Link> - Finite Element Analysis and Design Software</Text>
              <Text>• Mostly working on backend MFC C++ APIs following TDD and have delivered around 60+ JIRA tickets with 97% code-coverage </Text>
              <Text>• Utilized Test-Driven Development (TDD) with Catch2 and Google Test frameworks to design robust, reusable, and reliable code</Text>
              <Text>• Developed the front-end for sidebars and dialog boxes using Vue, HTML/CSS, and JavaScript</Text>
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
              <Text>• Python + Tkinter tool to draw, analyse, design and show results of Retaining Walls, had a adoption rate of 70%</Text>
              <Text>• Astrid tool (HTML/CSS) - I was part of the QA/QC team, reported around 7 critical bugs and improved the UI</Text>
              <Text>• RMS Project Management Interface PowerBI Tool - Improved overall project efficiency by 40%</Text>
            </Box>
          </Collapse>
        </Box>
      </Stack>
    </Box>
  );
};

export default WorkExperience;

