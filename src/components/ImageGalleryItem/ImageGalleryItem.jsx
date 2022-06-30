import styles  from './imagegalleryitem.module.css';


const ImageGalleryItem = ({items}) => {
    const element = items.map(({id, webformatURL, tags}) => {
       return <li className={styles.imageGalleryItem} key={id}>
        <img
        className={styles.imageGalleryItemImage} 
        src={webformatURL} 
        alt='' />
        </li>
    })
    return (
        <>
        {element}
        </>     
    )
}

export default ImageGalleryItem;