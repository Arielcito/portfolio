import { Box, LinkBox, LinkOverlay, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";
import { Global } from "@emotion/react";
import NextLink from "next/link";

export const GridItem = ({ parraph, website, source, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Image src={thumbnail} alt={title} placeholder="blur" loading="lazy" className="grid-item-thumbnail" />
    <Text mt={2}>{title}</Text>
    <Text fontSize={14}>{parraph}</Text>
    <Text fontSize={14}>
      Website:{" "}
      <NextLink href={website} passHref>
        <Link target="_blank">{website}</Link>
      </NextLink>
    </Text>
    <Text fontSize={14}>
      Source:{" "}
      <NextLink href={source} passHref>
        <Link target="_blank">{source}</Link>
      </NextLink>
    </Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail{
        border-radius:12px;
    }`}
  />
);
