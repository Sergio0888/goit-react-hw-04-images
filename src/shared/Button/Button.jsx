import styles from './button.module.css';
import PropTypes from 'prop-types';

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

Button.defaultProps = {
    loadMore: ()=>{},
}
Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}

export default Button;