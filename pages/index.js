import React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';

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
        </Box>
      </Container>  
    ) 
};

export default Page;
