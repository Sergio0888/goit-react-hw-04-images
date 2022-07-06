import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imagegallery.module.css'

const ImageGallery = ({items , onClick}) => {
  return(
  <ul className={styles.imageGallery}>
    <ImageGalleryItem items={items} onClick={onClick}/>
 </ul>
 )
};

export default ImageGallery;
