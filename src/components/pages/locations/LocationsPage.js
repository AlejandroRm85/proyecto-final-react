import { useState, useEffect } from "react";
import { HomePage } from '../home/HomePage'
import props from "./props";

import {
    SimpleGrid,
    Stack,
    Center,
    Text
} from "@chakra-ui/react";
import Pagination from "../../pagination/Pagination";
import { FormLocationSearch } from "../../formSearch/FormLocationSearch";
import Locations from "../../locations/Locations";

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    let api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${name}&type=${type}&dimension=${dimension}`;
    console.log(api);
    useEffect(() => {
        (async function () {
        let data = await fetch(api).then((res) => res.json());
        (data.error) ? setLocations([]) : setLocations(data);
        })();
    }, [api]);
    console.log(locations);
  return (
    <>
        <HomePage />
        <Center><Text fontSize='3xl'>B&uacute;squeda de Locaciones</Text></Center>
        <Stack direction={['column', 'row']} spacing='24px'>
        <Center w='90%' h='100px'>
          <FormLocationSearch pageNumber={pageNumber}
            setName={setName}
            setType={setType}
            setDimension={setDimension}
            setPageNumber={setPageNumber}
          />
        </Center>
      </Stack>
      {(locations.results) ?
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {locations.results.map((location) =>{
          return (
                <Locations
                    id={location.id}
                    key={`LocationsPage-Location-${location.id}`}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents}
                    url={location.url}
                    created={location.created}
                />
            );
        })}
        </SimpleGrid>
        : <h1><b>No se encontr&oacute; la locai&oacute;n</b></h1>
        }
        <Center h='100px'>
            <Pagination info={locations.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </Center>
    </>
  )
}

Locations.propTypes = props.propTypes;
Locations.defaultProps = props.defaultProps;

export default LocationsPage;