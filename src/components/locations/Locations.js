import props from "./props";
import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UseLocationsContext from '../context/UseLocationsContext';

const Locations = ({ id, name, type, dimension, residents, url, created }) => {

    const location = UseLocationsContext();

  return (
    <Card>
        <Link to={`/location/${id}`} onClick={()=>{location.location={id:id,name:name,type:type,dimension:dimension,residents:residents,url:url, created: created}}}>
            {console.log(location)}
            <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
            </Stack>
            </CardBody>
            <Divider />
        </Link>
    </Card>
  )
}

Locations.propTypes = props.propTypes;
Locations.defaultProps = props.defaultProps;

export default Locations;