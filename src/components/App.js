import React, { Component } from 'react';
import './style/App.css';
import {musics} from './DB'
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'




class App extends Component {

	state = {
		curentCategoryMyMusic : true,
		curentMusicId: '56c782f1a2c2c3268ddb3206'
	}

	updateCurentCategory = (value) => {
		this.setState({
			curentCategoryMyMusic : value
		})

	}

	updateCurentMusicId = (value) => {
		this.setState({
			curentMusicId : value
		})
		console.log("value - " ,value, "  state", this.state.curentMusicId);

	}

  render() {

    return (
        <div className ="musicBlock">
            <CurentMusic curentMusicId = {this.state.curentMusicId} musics={musics} />
            <div className="fullListMusic">
              <Category updateCurentCategory={this.updateCurentCategory} defaultCurentCategory ={this.curentCategoryMyMusic} />
              <hr />
              <div className="showlist">
                <div className="search">
                  <input type="text"
                    id="audio_search"
                    placeholder="Пошук за музикою" />
                  <button className="button_search">
                  </button>
                </div>
	               <AboutList categoryMusic={this.state.curentCategoryMyMusic}/>
	               {this.state.curentCategoryMyMusic ?  <MusicList listElements={musics} setNewMusicId ={this.updateCurentMusicId} /> : <PlayList />}

              </div>
            </div>

        </div>


    );

  }
}

export default App;
