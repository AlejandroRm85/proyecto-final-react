import props from "./props";
import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UseEpisodesContext from '../context/UseEpisodesContext';

const Episode = ({ id, name, air_date, episode, characters, url, created }) => {

    const episodio = UseEpisodesContext();

  return (
    <Card>
        <Link to={`/episode/${id}`} onClick={()=>{episodio.episode={id:id,name:name,air_date:air_date,episode:episode,characters:characters,url:url, created: created}}}>
            {console.log(episodio)}
            <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
            </Stack>
            </CardBody>
            <Divider />
        </Link>
    </Card>
  )
};

Episode.propTypes = props.propTypes;
Episode.defaultProps = props.defaultProps;

export default Episode;