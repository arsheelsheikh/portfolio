import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
        </Container>
    )
}

export default Works