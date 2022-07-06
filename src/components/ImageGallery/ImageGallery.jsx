import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imagegallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({items , onClick}) => {
  return(
  <ul className={styles.imageGallery}>
    <ImageGalleryItem items={items} onClick={onClick}/>
 </ul>
 )
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string, 
  })), 
  onClick: PropTypes.func.isRequired,
}

export default ImageGallery;
