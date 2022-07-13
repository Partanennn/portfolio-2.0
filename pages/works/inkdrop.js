import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
          egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu
          vitae elementum curabitur vitae nunc sed velit dignissim sodales ut e
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://ww.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Playform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
        </List>

        <WorkImage src="/images/inkdrop_01.png" alt="Inkdrop" />
        <WorkImage src="/images/inkdrop_02.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
}

export default Work
