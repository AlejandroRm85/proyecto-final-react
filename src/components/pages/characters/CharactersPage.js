import { useState, useEffect } from "react";

import Character from "../../Character";

import props from "./props";

import {
    SimpleGrid,
    Center,
    Text
} from "@chakra-ui/react";
import { HomePage } from "../home/HomePage";
import { FormSearch } from "../../formSearch/FormSearch";
import Pagination from "../../pagination/Pagination";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}&gender=${gender}&species=${species}`;
    console.log(api);
    useEffect(() => {
        (async function () {
        let data = await fetch(api).then((res) => res.json());
        (data.error) ? setCharacters([]) : setCharacters(data);
        })();
    }, [api]);
    
    return (
        <>
            <HomePage />
            <Center><Text fontSize='3xl'>B&uacute;squeda de Personajes</Text></Center>
            <Center w='100%' h='150px'>
                <FormSearch pageNumber={pageNumber}
                    status={status}
                    setName={setName}
                    setStatus={setStatus}
                    setGender={setGender}
                    setSpecies={setSpecies}
                    setPageNumber={setPageNumber} />
            </Center>
            {(characters.results) ?
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {characters.results.map((character) =>{
                return (
                    <Character
                        id={character.id}
                        key={`CharactersPage-Character-${character.id}`}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        gender={character.gender}
                        species={character.species}
                        episode={character.episode}
                    />
                );
            })}
            </SimpleGrid>
            : <h1><b>No se encontr&oacute; el personaje</b></h1>
            }
            <Center h='100px'>
                <Pagination info={characters.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </Center>
        </>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default CharactersPage;