import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a Full-stack developer based in Tampere, Finland!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Aleksi Partanen
            </Heading>
            <p>Web developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth="100px"
              display="inline-block"
              src="/images/dooap_photo3.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m full-stack developer and I have been working with AP
            solution software for the last two years. Tech stack that has been
            in use has included React with Typescript, Redux, MS SQL, C# .NET
            and Azure.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />}>My Portfolio</Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Kiuruvesi, Finland.
          </BioSection>
          <BioSection>
            <BioYear>2016 - 2017</BioYear>
            Military service (Non-Commissioned Officer)
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2019</BioYear>
            Computer Science in University of Eastern Finland (125 credit)
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Started Computer Science in Tampere University
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started as Software Developer at Dooap Oy. Main technologies:
            <br />??? React
            <br />??? TypeScript
            <br />??? Redux
            <br />??? C# ( .NET )
            <br />??? MS SQL
            <br />??? Azure
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/aleksi-partanen-b285a1150/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Aleksi Partanen
                </Button>
              </Link>
              <Link href="https://github.com/partanennn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Partanennn
                </Button>
              </Link>
              <Link href="https://discord.com/users/Jorma#6703" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @Jorma
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
      <Text align="center" fontSize={14} color="grey">
        &#169; 2022 Aleksi Partanen. All rights reserved
      </Text>
    </Layout>
  )
}

export default Page
