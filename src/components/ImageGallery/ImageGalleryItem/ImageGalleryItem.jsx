import PropTypes from 'prop-types';
import styles  from './imagegalleryitem.module.css';


const ImageGalleryItem = ({ id , onClick, src, alt }) => {
    return (
        <li className={styles.imageGalleryItem} key={id} onClick={()=>onClick(id)}>
            <img className={styles.image} src={src} alt={alt} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string, 
    })), 
    onClick: PropTypes.func.isRequired,
  }

export default ImageGalleryItem;