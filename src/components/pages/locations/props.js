import PropTypes from "prop-types";

const props = {
    propTypes: {
        pageNumber: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.array,
        url: PropTypes.string,
        created: PropTypes.string
    },
    props: {
        pageNumber: 1,
        name: "",
        type: "",
        dimension: "",
        residents: [],
        url: "",
        created: ""
    }
};

export default props;