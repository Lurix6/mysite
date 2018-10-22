import React from 'react'
import './style/MusicElement.css'
import hoverElement from '../decorators/hoverElement'

class MusicElement extends React.Component {


	    render(){
	    	const {element, hover, hoverOn, hoverOff} = this.props;
	    	const btnStyle = {
	    			opacity:'1'
	    		};

	        return (
	        	<div
	    	    	className= "root"
		            onMouseEnter={hoverOn}
		            onMouseLeave={hoverOff}>
		        	<div>
		        		{hover ? this.decorateMainImg(btnStyle) : null }
						<img src={element.icon} style={btnStyle} alt="" />
						<div className="list_music_inf">
							<span>{element.title}</span>
							<span>{element.executor}</span>
						</div>
					</div>
					<div className="list_music_time">
						{hover ? this.getImageBody() : element.full_time }
					</div>

	        	</div>
	        );
	    }

	    decorateMainImg = (btnStyle) => {

	    	btnStyle.opacity = 0.25

	    	const imgstyle = {
	    		position: "absolute",
				marginLeft: "12px",
				marginTop: "12px",
				width: "25px",
	    		height: "25px",
	    		zIndex: "2"
	    	}
	    	return <img src="assets/img/music/play(white).png" style={imgstyle} alt="" />
	    }

	    getImageBody = () => {
	    	return <div>
	  			<img src="assets/img/music/magic.png" alt="" />
	  			<img src="assets/img/music/del.png" alt=""  />
	  			<img src="assets/img/music/more.png" alt=""  />
	    	</div>
	    }




}


export default hoverElement(MusicElement)
