import PropTypes from 'prop-types';

export default function onButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
}
onButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
