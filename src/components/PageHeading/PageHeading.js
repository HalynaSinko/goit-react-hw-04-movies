import PropTypes from "prop-types";

const PageHeading = ({ text }) => {
  return <h1>{text}</h1>;
};

export default PageHeading;
PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
