import _                    from 'lodash';
import React, { Component } from 'react';
import { render }           from 'react-dom';
import YTSearch             from 'youtube-api-search';
import SearchBar            from './components/search-bar';
import VideoList            from './components/video-list';
import VideoDetail          from './components/video-detail';

const API_KEY = 'AIzaSyCrQwsKOMCWaUKQ7i3yU3mW_iGuONgmpG8';

// App is classed as a functional component and has no state.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

render(<App/>, document.querySelector('.container'));
