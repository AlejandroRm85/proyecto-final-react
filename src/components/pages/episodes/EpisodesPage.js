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
import Episode from "../../episode/Episode";
import { FormEpisodeSearch } from "../../formSearch/FormEpisodeSearch";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [name, setName] = useState('');
    const [episodeCode, setEpisodeCode] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    let api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${name}&episode=${episodeCode}`;
    console.log(api);
    useEffect(() => {
        (async function () {
        let data = await fetch(api).then((res) => res.json());
        (data.error) ? setEpisodes([]) : setEpisodes(data);
        })();
    }, [api]);
    console.log(episodes);
  return (
    <>
      <HomePage />
      <Center><Text fontSize='3xl'>B&uacute;squeda de Episodios</Text></Center>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Center w='90%' h='100px'>
          <FormEpisodeSearch pageNumber={pageNumber}
            setName={setName}
            setEpisodeCode={setEpisodeCode}
            setPageNumber={setPageNumber}
          />
        </Center>
      </Stack>
      {(episodes.results) ?
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {episodes.results.map((episode) =>{
          return (
                <Episode
                    id={episode.id}
                    key={`EpisodesPage-Episode-${episode.id}`}
                    name={episode.name}
                    air_date={episode.air_date}
                    episode={episode.episode}
                    characters={episode.characters}
                    url={episode.url}
                    created={episode.created}
                />
            );
        })}
        </SimpleGrid>
        : <h1><b>No se encontr&oacute; el episodio</b></h1>
        }
        <Center h='100px'>
            <Pagination info={episodes.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </Center>
    </>
  )
};

Episode.propTypes = props.propTypes;
Episode.defaultProps = props.defaultProps;

export default EpisodesPage;