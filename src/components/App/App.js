import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    let playlistTracks = this.state.playlistTracks
    const trackExists = playlistTracks.find(savedTrack => savedTrack.id === track.id)
    if (trackExists) {
      return;
    }

    playlistTracks.push(track)
    this.setState({
      playlistTracks: playlistTracks
    })
  }

  removeTrack(track) {
    let playlistTracks = this.state.playlistTracks
    const newPlaylist = playlistTracks.filter(savedTrack => savedTrack.id !== track.id)

    this.setState({ 
      playlistTracks: newPlaylist })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>My<span className="highlight">Weekly</span>Jams</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} 
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
