import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handlerInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    if (!query.trim()) {
      toast.error('empty field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit">
            <label>Search</label>
          </button>

          <input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={this.handlerInput}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
