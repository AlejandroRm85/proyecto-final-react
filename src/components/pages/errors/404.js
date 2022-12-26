import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
const Error = () => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Recurso no encontrado!</AlertTitle>
            <AlertDescription>.</AlertDescription>
        </Alert>
    );
} 

export default Error;