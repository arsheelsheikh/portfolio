import React from 'react';
import { 
  Container, 
  Box,
  Heading,
  Image, 
  useColorModeValue 
} from '@chakra-ui/react';
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return(
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello 👋, I&apos;m Arsheel Sheikh full stack developer and designer!
        </Box>

        <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arsheel Sheikh
          </Heading>
          <p> Web Developer | App Developer | UI/UX Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/arsheelnft.jpeg"
            alt="Profile Image"
          />
        </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-tile">
            Work
          </Heading>
          <Paragraph> Arsheel Sheikh, an ETC undergrad deeply passionate about Software Development, Developer Relations, UI/UX Design, and Product Management.As a proactive advocate for open-source collaboration, participated in hackathons, contributed to projects, and shared insights through speaking engagements and write-ups.</Paragraph>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Football, Photography, Art, Music.
        </Paragraph>
      </Section>

      </Container>  
    ) 
};

export default Page;
