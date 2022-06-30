import { Component } from "react";
import { getImages, searchImages } from '../shared/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';


class App extends Component {

    state = {
        items: [],
        loading: false,
        page: 1,
        error: null,
    }

    componentDidMount() {
        this.fetchImages();
    }
    componentDidUpdate() {
    }

    async fetchImages() {
        this.setState({
            loading: true
        })
        const { page, items } = this.state;
        try {
            const {hits} = await getImages(page);
            this.setState({
                items: [...items, ...hits],
            })
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
        finally {
            this.setState({ loading: false })
        }
    }

    async searchImage(query) {
        this.setState({
            loading: true
        })
        const { items } = this.state;
        try {
            const {hits} = await searchImages(query);
            this.setState({
                items: [...items, ...hits],
            })
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
        finally {
            this.setState({ loading: false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('GGGG')
        const { value } = e.target
        this.searchImage(value)

    }

    render() {

        const { items } = this.state;

       return (
        <>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery items={items}/>
       </>
       )
    }

}


export default App;