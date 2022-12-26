import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Flex,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseEpisodesContext from "../context/UseEpisodesContext";
import { HomePage } from "../pages/home/HomePage";

export const EpisodeDetail = () => {
  const { id } = useParams();
  console.log(id);
  const episode = UseEpisodesContext();
  console.log('Episodio');
  useEffect(() => {
      console.log(episode);
  }, [episode]);
  return (
    <>
      <HomePage />
      <Divider></Divider>
      <Flex>
          <Center w='400px'>
              <Card>
                  <CardBody>
                  <Text fontSize='3xl'>Episodio</Text>
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>Nombre: {episode.episode.name}</Heading>
                      <Heading size='md'>Fecha de Lanzamiento: {episode.episode.air_date}</Heading>
                      <Heading size='md'>Episodio: {episode.episode.episode}</Heading>
                      <Heading size='md'>Url: {episode.episode.url}</Heading>
                  </Stack>
                  </CardBody>
                  <Divider />
              </Card>
          </Center>
          <Box flex='1'>
              <Text fontSize='3xl'>Personajes</Text>
              {episode.episode.characters.map((url, name) => {
                  return (
                      <>
                          <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                          {url}
                          </Box>
                      </>
                  );
              })}
              
          </Box>
      </Flex>
  </>
  )
}
