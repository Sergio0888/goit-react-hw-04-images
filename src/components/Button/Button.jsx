import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({loadMore, text}) => {

    return (
    <div className={styles.box}>
        <button 
        onClick={loadMore}
        className={styles.button}
        >{text}</button>
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