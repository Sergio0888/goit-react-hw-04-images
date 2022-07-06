import styles  from './imagegalleryitem.module.css';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({items , onClick}) => {
    const element = items.map(({id, webformatURL, tags}) => {
       return( 
       <li className={styles.imageGalleryItem} key={id} onClick={()=>onClick(id)}>
        <img
        className={styles.imageGalleryItemImage} 
        src={webformatURL} 
        alt={tags} />
        </li>)
    })
    return (
        <>
        {element}
        </>     
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