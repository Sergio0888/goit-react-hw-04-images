import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner';
import styles from './loader.module.css';

function Loader() {
    return (
        <div className={styles.box}>
            <TailSpin 
            color="grey" 
            ariaLabel='loading'
            />
        </div>
    )
}

export default Loader;