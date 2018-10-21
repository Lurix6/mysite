import React from 'react'

class HoverTest extends React.Component{
    
    state = {
         hover: false
    }
   
    hoverOn = () =>{
      this.setState({ hover: true });
    }

    hoverOff = () => { 
      this.setState({ hover: false });    
    }
    render(){
    	const element = this.props.element;
    	const btnStyle = {
    			opacity:'1'
    		};

        return (
        	<div	
    	    	className= "root"
	            onMouseEnter={this.hoverOn} 
	            onMouseLeave={this.hoverOff}>
	        	<div>
	        		{this.state.hover ? this.decorateMainImg(btnStyle) : null }
					<img src={element.icon} style={btnStyle} alt="" />
					<div className="list_music_inf">
						<span>{element.title}</span>
						<span>{element.executor}</span>
					</div>
				</div>
				<div className="list_music_time">
					{this.state.hover ? this.getImageBody() : element.full_time }
				</div>
		        
        	</div>
        );
    }

    decorateMainImg = (btnStyle) => {

    	btnStyle.opacity = 0.25

    	const imgstyle = {
    		position: "absolute",
			'margin-left': "12px",
			'margin-top': "12px",
			width: "25px",
    		height: "25px",
    		'z-index': "2"
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

export default HoverTest
 