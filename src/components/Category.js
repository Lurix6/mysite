import React from 'react'

export default class Category extends React.Component{

	state = {
		myMusic: true
	}

	render(){

	const curentElement = {
		 	borderBottom: "2px solid #00AEB5"
	};

	return  (<div className="category">
                <p onClick={() => {this.props.updateCurentCategory(true); this.setState({myMusic:true})} } style={this.state.myMusic ? curentElement : null } >Моя Музика</p>
                <p onClick={() => {this.props.updateCurentCategory(false); this.setState({myMusic:false})} } style={this.state.myMusic ? null : curentElement }>Плейлисти</p>
              </div>)

	}


}



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/