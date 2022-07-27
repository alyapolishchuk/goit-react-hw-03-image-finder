import { Component } from 'react';
import PropTypes from 'prop-types';
import onAPI from 'API/pixabay';
import ImgGalItem from './ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const status = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

class ImgGal extends Component {
  static propTypes = {
    handlerOpenModal: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
  };
  state = {
    imageList: [],
    page: 1,
    status: status.idle,
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: status.loading });
      onAPI(this.props.query)
        .then(res => {
          const { data } = res;

          this.setState(prevState => ({
            imageList: [...data.hits],
            page: 2,
            totalHits: data.totalHits,
            status: status.success,
          }));
        })
        .catch(error => {
          this.setState({ status: status.error, error });
        });
    }
  }
  loadMore = () => {
    onAPI(this.props.query, this.state.page)
      .then(res => {
        const { hits } = res.data;
        this.setState(prevState => ({
          imageList: [...prevState.imageList, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ status: status.error, error });
      });
  };

  render() {
    const { imageList, page, totalHits, status, error } = this.state;

    if (status === status.loading) {
      return <Loader />;
    }
    if (status === status.error) {
      return <p>{error}</p>;
    }
    if (!imageList.length) {
      return (
        <p
          style={{
            margin: '100px auto',
            fontSize: '40px',
          }}
        >{`Please, enter the search request`}</p>
      );
    }
    if (status === status.success) {
      return (
        <>
          <ImgGal>
            {imageList.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <ImgGalItem
                  key={id}
                  smallImg={webformatURL}
                  largeImg={largeImageURL}
                  handlerOpenModal={this.props.handlerOpenModal}
                />
              );
            })}
          </ImgGal>
          {totalHits >= 12 * page && <Button onClick={this.loadMore} />}
        </>
      );
    }
  }
}

export { ImgGal };
