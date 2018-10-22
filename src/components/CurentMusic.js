import React from 'react'

class CurentMusic extends React.Component{

  render(){

    const curentMusic = this.props.curentMusic

    return<div className = "curentMusic">
              <img id="play" src="assets/img/music/play.png" alt="" />
              <div id="next_previous">
                <img src="assets/img/music/previous-track.png" alt="" />
                <img src="assets/img/music/next-track.png" alt="" />
              </div>
              <div className="about_current_music">
                <img src={curentMusic.icon} alt="" />
                <div>
                  <p id="current_music_title">{curentMusic.executor}</p>
                  <p id="current_music_executor">{curentMusic.title}</p>
                </div>
              </div>
      </div>
  }
}

export default CurentMusic
