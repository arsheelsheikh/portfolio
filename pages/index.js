import React from 'react';
import { Container, Box, Heading, Image } from '@chakra-ui/react';

const Page = () => {
    return(
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
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
      </Container>  
    ) 
};

export default Page;
