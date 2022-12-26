import {
    Card,
    CardBody,
    Image,
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
import UseCharacterContext from "../context/UseCharacterContext";
import { HomePage } from "../pages/home/HomePage";

export const CharacterDetail = () => {
    const { id } = useParams();
    console.log(id);
    const character = UseCharacterContext();
    console.log('Personaje');
    useEffect(() => {
        console.log(character);
    }, [character]);
    return (
        <>
            <HomePage />
            <Divider></Divider>
            <Flex>
                <Center w='400px'>
                    <Card>
                        <CardBody>
                        <Text fontSize='3xl'>Ficha del Personaje</Text>
                        <Image
                            src={character.character.image}
                            alt={character.character.name}
                            borderRadius='lg'
                            />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Nombre: {character.character.name}</Heading>
                            <Heading size='md'>Status: {character.character.status}</Heading>
                            <Heading size='md'>G&eacute;nero: {character.character.gender}</Heading>
                            <Heading size='md'>Especie: {character.character.species}</Heading>
                        </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                </Center>
                <Box flex='1'>
                    <Text fontSize='3xl'>Episodios</Text>
                    {character.character.episode.map((url, name) => {
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