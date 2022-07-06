import { Component } from "react";
import Button from "shared/Button/Button";
import { getImages } from '../shared/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from '../shared/Loader/Loader';
import Modal from '../shared/Modal/Modal'


class App extends Component {

    state = {
        items: [],
        loading: false,
        q: '',
        totalHits: 0,
        page: 1,
        error: null,
        vissibleModal: false,
        modal: []
    }

    componentDidMount() {
        this.fetchImages();
    }

    componentDidUpdate(prevProps, prevState) {
        const { page, q} = this.state;
        if (q !== prevState.q) {
          this.fetchImages();
          this.setState({
            page: 1,
          });
        }
        if (page > prevState.page) {
          this.fetchImages();
        }
      }

    async fetchImages() {
        this.setState({
            loading: true
        })
        const { q, page, items } = this.state;
        try {
            const { data } = await getImages(q,page);
            const { hits,totalHits } = data;
            this.setState({
                items: [...items, ...hits],
                totalHits: totalHits
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
        const { value } = e.target[1];
        this.setState(prevState => {
            if (prevState.q !== value) {
              return {
                q: value,
                page: 1,
                items: [],
              };
            }
          });
    }
    fetchId = (id) => {
        console.log('fetchID');
        const { items } = this.state;
        this.setState({
            vissibleModal: true,
            modal: items.filter(el => el.id === id)[0]
        })
      }

    closeModal = () => {
        this.setState({
            vissibleModal: false,
        })
      }

    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
    }
    

    render() {

        const { items, page, totalHits, loading, modal, vissibleModal } = this.state;
        const { handleSubmit, loadMore, closeModal, fetchId } = this;

       return (
        <>
         {vissibleModal && 
          <Modal closeModal={closeModal}>
            <img src={modal.largeImageURL} alt={modal.tags} width="900"/>
          </Modal>
        }

        <Searchbar onSubmit={handleSubmit}/>
        <ImageGallery items={items} onClick={fetchId}/>
        {loading && <Loader />}
      

        {!loading && items.length >= 12 && page * 12 <= totalHits && (
          <Button load={loadMore} />
        )}
       </>
       )
    }

}


export default App;