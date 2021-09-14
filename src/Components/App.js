import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {videoList: []};

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videoList: response.data.items});
  };
  render () {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        I have {this.state.videoList.length} videos
      </div>
    );
  }
}

export default App;