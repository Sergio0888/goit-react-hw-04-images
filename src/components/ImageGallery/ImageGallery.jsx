import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './imagegallery.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ImageGallery = ({items , onClick}) => {

  const elements = items.map(({id, webformatURL, tags}) => {
    return (
    <ImageGalleryItem  
    onClick={onClick}
    key={nanoid()}
    id={id}
    src={webformatURL}
    alt={tags} />
    ) 
  })

    return <ul className={styles.imageGallery}>{elements}</ul>
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
