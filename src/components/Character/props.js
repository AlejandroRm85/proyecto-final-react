import PropTypes from "prop-types";

const props = {
    propTypes: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        image: PropTypes.string,
        episode: PropTypes.array,
    },
    defaultProps: {
        name: "unknown",
        image: "https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b",
        episode: [],
    },
};

export default props;