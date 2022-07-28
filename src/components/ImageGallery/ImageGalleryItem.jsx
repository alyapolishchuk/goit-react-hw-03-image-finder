import PropTypes from 'prop-types';

export default function ImgGalItem({ webformat, largeImage, onIMG }) {
  return (
    <li class="gallery-item">
      <img src={webformat} alt="" onClick={() => onIMG(largeImage)} />
    </li>
  );
}

ImgGalItem.propTypes = {
  webformat: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onIMG: PropTypes.func,
};
