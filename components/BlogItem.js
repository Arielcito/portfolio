import { Box,Heading,Paragraph,Link } from '@chakra-ui/react'
import {LinkItem} from "./Navbar"

const BlogItem = ({slug,frontmatter}) => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
        <Heading as="h4" className='p-4'>
            <LinkItem href={`/post/${slug}`}>{frontmatter.title}</LinkItem>
        </Heading>
        <Paragraph>
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </Paragraph>
        <Paragraph>
        {frontmatter.metadesc}
        </Paragraph>
        <Paragraph>
            <LinkItem href={`/post/${slug}`}>Read More</LinkItem>
        </Paragraph>
    </Box>
  )
}

export default BlogItem