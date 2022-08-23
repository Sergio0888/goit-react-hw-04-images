import styles from './searchbar.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';


class Searchbar extends Component {
    
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onSubmit: ()=>{},
    }


    state = {
        search: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { search } = this.state;
        const { onSubmit } = this.props;
        onSubmit(search)
    }

    handleChange = ({target}) => {
        const { value } = target;
        this.setState({
            search: value
        })
    }
    
    
    render() {
        
        const {handleChange,handleSubmit} = this;
        const { search } = this.state;

        return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles.searchFormBtn}>
                    <span className={styles.searchFormBtnLabel}>Search</span>
                    </button>
    
                    <input
                    className={styles.searchFormInput}
                    onChange={handleChange}
                    value={search}
                    name="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}


export default Searchbar;