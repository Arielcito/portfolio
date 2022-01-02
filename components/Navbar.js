import {
  Button,
  Text,
  Container,
  Link,
  Box,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        _target={_target}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function Navbar(props) {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"} style={{ color: "linear-gradient(108deg,#b16cea 8%,#ff5e69 40%,#ff8a56 77%,#ffa84b 91%)"}}>
            <LinkItem href="/">
              Ariel Serato.
            </LinkItem>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>Works</LinkItem>
          <LinkItem href="/aboutme" path={path}>About Me</LinkItem>
        </Stack>
        <Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem
              _target="_blank"
              href="https://github.com/Arielcito"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
              path={path}
            >
              <AiOutlineGithub />
            </LinkItem>
            <LinkItem
              _target="_blank"
              href="https://www.linkedin.com/in/ariel-serato-2623bb186/"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
              path={path}
            >
              <AiFillLinkedin />
            </LinkItem>
            <LinkItem
              _target="_blank"
              href="https://www.instagram.com/seratoariel/"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <AiOutlineInstagram />
            </LinkItem>
            <ThemeToggleButton />
          </Stack>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              >
                <MenuList>
                  <NextLink href="/">
                    <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>
                </MenuList>
              </MenuButton>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
