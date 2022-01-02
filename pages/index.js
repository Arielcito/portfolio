import {
  Box,
  Center,
  Container,
  Text,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Skills from "../components/skills";

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
              src="/images/arielserato.png"
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
            About me
          </Heading>
          <Paragraph>
            A passionate Full-Stack web developer and mobile app developer with
            experience of building web applications with
            javascript/ReactJs/NodeJs/React Native/CSS/HTML and some other
            libraries and frameworks.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Stack display="flex" direction="row"
          justifyContent="space-between"
          >
            <Skills src="/images/javascript.svg" alt="javascript logo" />
            <Skills src="/images/react.svg" alt="javascript logo" />
            <Skills src="/images/node.svg" alt="javascript logo" />
            <Skills src="/images/html.svg" alt="javascript logo" />
            <Skills src="/images/css3.svg" alt="javascript logo" />
          </Stack>
        </Section>
      </Container>
    </Layout>
  );
};

export default index;
