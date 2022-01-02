import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import mytinerary from "../public/images/mytinerary.png";
import petShop from "../public/images/petshop.png";

const works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem
              parraph="A travel Itineraries website"
              website=" "
              source="https://github.com/Arielcito/mytinerary-serato"
              title="MyTinerary"
              thumbnail={mytinerary}
            />
          </Section>
          <Section>
            <GridItem
              parraph="A petshop website using javascript vainilla and API's"
              website="https://petshop-franco.netlify.app/index.html"
              source="https://github.com/Arielcito/pet-shop"
              title="PetShop Franco"
              thumbnail={petShop}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default works;