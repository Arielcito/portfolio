import {
  Box,
  Container,
  Text,
  Image,
  Heading,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Skills from "../components/skills";
import { Wrap, WrapItem } from "@chakra-ui/react";

const index = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} mt={{ md: 10 }}>
          <Box flexGrow={1}>
            <Text as="p" fontSize={20}>
              Hi all! I&apos;m Ariel Serato, a full-stack developer from
              Argentina.
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              src="/images/arielserato.jpeg"
              layout="fill"
              alt="Profile"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            😎About me
          </Heading>
          <Paragraph>
          ¡Hi! Im a Ariel Serato, Software developer with 6 months experience if you ask me i prefer backend but there is enough space in my heart for both❤. I stand out for my communication, my empathy and my flexibility when working with both projects and teams. I would like to know how i can help your company :)
          </Paragraph>
          <Paragraph>
          My motivation to know how the world works makes me proactive and curious therefore I believe that learning has no limits.
          </Paragraph>
          <Paragraph>
          My passion is programming and all the infinite things you can do with it to help others to have almost anything on your phone or pc, thats why I consider that programming languages are not a limit when I propose a project.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
          Work experience
          </Heading>
          <Heading as="h4">
          Software developer 
          </Heading>
          <Paragraph  >
          March 2022 - Present · [Buenos Aires, Argentina] [Technological, Geocoding and logistic]
          </Paragraph>
          <Heading as="h5">
          Responsabilities
          </Heading>
          <List>
            <ListItem>.Worked with product owners to built a data transmitter to our client on a specific procotol, this data transmitter its working 24/7</ListItem>
            <ListItem>.Tested the different web apps for solving bugs, increasing speed and looking for future features.</ListItem>
            <ListItem>.Built a full-stack module that create reports of the differents mobiles that the client owns, this module was created using angular,.net core 3.1 and store procedures from sql server.</ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
          🛠 Arsenal
          </Heading>
          <Stack display="flex" direction="row" justifyContent="space-between">
            <Wrap>
              <Skills src="/images/javascript.svg" alt="javascript logo" />
              <Skills src="/images/typescript.svg" alt="typescript logo" />
              <Skills src="/images/react.svg" alt="react logo" />
              <Skills src="/images/node.svg" alt="node logo" />
              <Skills src="/images/html.svg" alt="html logo" />
              <Skills src="/images/css3.svg" alt="css3 logo" />
              <Skills src="/images/mongo-svgrepo-com.svg" alt="MongoDB logo" />
              <Skills src="/images/next.png" alt="NextJs logo" />
            </Wrap>
          </Stack>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            🤙Get in touch!
          </Heading>
          <Paragraph>
            <a href="mailto:serato.arieli@gmail.com">📨serato.arieli@gmail.com</a>
          </Paragraph>
          <Paragraph>
            📱(54) 9 011 64333092
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default index;
