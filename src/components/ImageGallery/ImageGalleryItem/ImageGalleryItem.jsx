import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImg, largeImg, handlerOpenModal }) => {
  return (
    <li>
      <img
        src={smallImg}
        alt=""
        onClick={() => handlerOpenModal(largeImg)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  handlerOpenModal: PropTypes.func.isRequired,
};
export { ImageGalleryItem };
