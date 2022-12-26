import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UseCharacterContext from "../context/UseCharacterContext";
import props from "./props";

const Character = ({id, name, image, episode,status,gender,species}) => {

    const personaje = UseCharacterContext();
    
    return (
        <Card>
            <Link to={`/character/${id}`} onClick={()=>{personaje.character={name:name,image:image,episode:episode,status:status,gender:gender, species: species}}}>
                {console.log(personaje)}
                <CardBody>
                <Image
                    src={image}
                    alt={name}
                    borderRadius='lg'
                    />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                </Stack>
                </CardBody>
                <Divider />
            </Link>
        </Card>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default Character;