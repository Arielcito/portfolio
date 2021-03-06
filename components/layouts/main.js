import Head from "next/head";
import NavBar from "../Navbar.js";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ariel's homepage" />
        <meta name="author" content="Ariel Serato" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Homepage - Ariel Serato</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
