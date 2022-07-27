import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImgGal } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    image: '',
    query: '',
  };
  openModal = img => {
    this.setState({ image: img });
  };
  closeModal = () => {
    this.setState({ image: '' });
  };
  handlerForm = query => {
    this.setState({ query });
  };

  render() {
    const { query, image } = this.state;
    return (
      <div
        style={
          {
            // display: 'grid',
            // gridTemplateColumns: '1fr0',
            // gridGap: '16px',
            // paddingBottom: '24px',
          }
        }
      >
        <Searchbar onSubmit={this.handlerForm} />

        <ImgGal query={query} openModal={this.openModal} />

        {image && <Modal image={image} onClose={this.closeModal} />}
        <ToastContainer />
      </div>
    );
  }
}