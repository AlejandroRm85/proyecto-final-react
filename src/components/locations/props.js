import PropTypes from "prop-types";

const props = {
    propTypes: {
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.array,
        url: PropTypes.string,
        created: PropTypes.string
    },
    defaultProps: {
        id: "1",
        name: "",
        type: "",
        dimension: "",
        residents: [],
        url: "",
        created: ""
    },
};

export default props;