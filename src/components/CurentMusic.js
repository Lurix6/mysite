import React from 'react'
import {musics} from './DB'
import ReactAudioPlayer from 'react-audio-player'



class CurentMusic extends React.Component{

  render(){

    const {curentMusicId, musics} = this.props

    const musicElement = this.props.musics.map(element => (element.id === curentMusicId) ? element : null )
    musicElement.sort()
    return<div className = "curentMusic">
              <ReactAudioPlayer
                  src={musicElement[0].url_link}
                  // autoPlay
                  controls
                  // loop
                  // muted
              />
                <div id="about_current_music">
                  <img src={musicElement[0].icon === null ? "assets/img/music/default_music_img.png" : musicElement[0].icon}   />
                    <div>
                        <p>{musicElement[0].executor}</p>
                        <p>{musicElement[0].title}</p>
                    </div>
                </div>

      </div>
    }
}

export default CurentMusic


/*    <div>
        <img id="play" src="assets/img/music/play.png" alt="" />
        <div id="next_previous">
          <img src="assets/img/music/previous-track.png" alt="" />
          <img src="assets/img/music/next-track.png" alt="" />
        </div>
        <div className="about_current_music">
          <img src={musicElement[0].icon} alt="" />
          <div>
            <p id="current_music_title">{musicElement[0].executor}</p>
            <p id="current_music_executor">{musicElement[0].title}</p>
          </div>
        </div>
    </div>
    <div id="curentTime">
          {musicElement[0].full_time}
    </div>

    */
