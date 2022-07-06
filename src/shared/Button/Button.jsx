import styles from './button.module.css';

const Button = ({load}) => {

    return (
    <div className={styles.box}>
        <button 
        onClick={load}
        className={styles.button}
        >Load More</button>
    </div>
    )
};

export default Button;