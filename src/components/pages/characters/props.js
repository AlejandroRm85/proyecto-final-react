import PropTypes from "prop-types";

const props = {
    propTypes: {
        pageNumber: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.string,
        gender: PropTypes.string,
        species: PropTypes.string
    },
    props: {
        pageNumber: 1,
        name: "",
        status: "",
        gender: "",
        species: ""
    }
};

export default props;