import { Box, Button, Container } from '@chakra-ui/react'
import NextLink from 'next/link'

const Works = () => {
  return (
    <Container>
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
      Incoming
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Works
