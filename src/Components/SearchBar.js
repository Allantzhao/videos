import React from 'react';

class SearchBar extends React.Component {
  state = {searchTerm: ''};

  onInputChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.searchTerm);
  }

  render () {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            >
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;