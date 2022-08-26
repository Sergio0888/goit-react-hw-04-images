import { useState, useEffect } from "react";
import { getImages } from '../api/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from "./Button/Button";
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import initialState from "./initialState";


const App = () => {

  const [state, setState] = useState({...initialState});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
        return
    }
    const fetchImages = async() => {

          try {
            setState(prevState => ({
              ...prevState,
                loading: true
            }))

            const { data } = await getImages(query,page);
            const { hits,totalHits } = data;
            setState(prevState => ({
                ...prevState,
                items: [...prevState.items, ...hits],
                totalHits: totalHits
            }))
          } 
          catch (error) {
              setState(prevState => ({
                ...prevState,
                  error: error.message
              }))
          }
          finally {
            setState(prevState => ({
              ...prevState,
              loading: false 
            }))
          }
      }
      fetchImages()
  }, [setState, page, query])

  const onSubmit = (value) => {
    if (query !== value) {
      setState(prevState => ({
        ...prevState,
        items: []
      }));
    }
    setQuery(value)
    setPage(1);
  };

  const fetchId = (id) => {
    const { items } = state;
    setState(prevState => ({
      ...prevState,
      vissibleModal: true,
      modal: items.filter(el => el.id === id)[0]
    }));
  };

  const closeModal = () => {
    setState(prevState => ({
      ...prevState,
      vissibleModal: false,
    }));
  };

  const loadMore = () => {
    setPage(prevPage  => prevPage + 1)
  };

  const { items, totalHits, loading, modal, vissibleModal } = state;

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

export default App;