import React, {Component} from 'react';
import MusicElement from './MusicElement'
import './style/MusicList.css'

class MusicList extends Component{

	render(){
		const musicElements = this.props.listElements.map(element => <li key={element.id}>
			<MusicElement 
				element = {element}
			/>
		</li> )

		return(
			<div id="list_music">
				<ul>
					{musicElements}
				</ul>
			</div>
			);
		}
	}



export default MusicList