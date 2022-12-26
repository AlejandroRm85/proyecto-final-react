import React from 'react'

import { Link } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Rick & Morty App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Link to='/characters'><Button colorScheme='teal'>Personajes</Button></Link>
          <Link to='/episodes'><Button colorScheme='teal'>Episodios</Button></Link>
          <Link to='/locations'><Button colorScheme='teal'>Locaciones</Button></Link>
        </ButtonGroup>
      </Flex>
    </>
  )
}
