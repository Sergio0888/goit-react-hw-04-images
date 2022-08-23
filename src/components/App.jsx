import { Component } from "react";
import { getImages } from '../api/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from "./Button/Button";
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import initialState from "./initialState";


class App extends Component {

    state = {...initialState}

    componentDidUpdate(_, prevState) {
        const { page, q} = this.state;
        if (q !== prevState.q || page > prevState.page) {
          this.fetchImages()
        }
      }

    async fetchImages() {
        this.setState({
            loading: true
        })
        const { q, page } = this.state;
        try {
            const { data } = await getImages(q,page);
            const { hits,totalHits } = data;
            this.setState(({items}) => ({
                items: [...items, ...hits],
                totalHits: totalHits
            }))
        } 
        catch (error) {
            this.setState({
                error: error.message
            })
        }
        finally {
            this.setState({ loading: false })
        }
    }


    onSubmit = (value) => {
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
        const { onSubmit, loadMore, closeModal, fetchId } = this;

       return (
        <>
         {vissibleModal && 
          <Modal closeModal={closeModal}>
            <img src={modal.largeImageURL} alt={modal.tags} width="900"/>
          </Modal>
        }
        <Searchbar onSubmit={onSubmit}/>
        <ImageGallery items={items} onClick={fetchId}/>
        {loading && <Loader />}
        {!loading && items.length >= 12 && page * 12 <= totalHits && (
          <Button text="Load more" loadMore={loadMore} />
        )}
       </>
       )
    }

}


export default App;