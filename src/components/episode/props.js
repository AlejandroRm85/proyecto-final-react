import PropTypes from "prop-types";

const props = {
    propTypes: {
        id: PropTypes.number,
        name: PropTypes.string,
        air_date: PropTypes.string,
        episode: PropTypes.string,
        characters: PropTypes.array,
        url: PropTypes.string,
        created: PropTypes.string
    },
    defaultProps: {
        id: "1",
        name: "",
        air_date: "",
        episode: "",
        characters: [],
        url: "",
        created: ""
    },
};

export default props;