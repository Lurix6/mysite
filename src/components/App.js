import React, { Component } from 'react';
import './style/App.css';
import MusicList from './MusicList'
import {musics} from './DB'


class App extends Component {
  render() {
    return (
   		<MusicList listElements={musics}/>
    );
 
  }
}

export default App;
