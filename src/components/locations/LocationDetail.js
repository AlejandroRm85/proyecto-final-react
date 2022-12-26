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
import UseLocationsContext from "../context/UseLocationsContext";
import { HomePage } from "../pages/home/HomePage";

export const LocationDetail = () => {
    const { id } = useParams();
    console.log(id);
    const location = UseLocationsContext();
    console.log('Locaion');
    useEffect(() => {
        console.log(location);
    }, [location]);
    return (
        <>
            <HomePage />
            <Divider></Divider>
            <Flex>
                <Center w='400px'>
                    <Card>
                        <CardBody>
                        <Text fontSize='3xl'>Locaci&oacute;n</Text>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Nombre: {location.location.name}</Heading>
                            <Heading size='md'>Tipo: {location.location.type}</Heading>
                            <Heading size='md'>Dimensi&oacute;n: {location.location.dimension}</Heading>
                            <Heading size='md'>Url: {location.location.url}</Heading>
                            <Heading size='md'>Creado: {location.location.created}</Heading>
                        </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                </Center>
                <Box flex='1'>
                    <Text fontSize='3xl'>Residentes</Text>
                    {location.location.residents.map((url, name) => {
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
