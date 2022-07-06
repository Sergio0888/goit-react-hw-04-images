import styles  from './imagegalleryitem.module.css';


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

export default ImageGalleryItem;