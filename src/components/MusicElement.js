import React from 'react'
import './style/MusicElement.css'

function MusicElement({element}) {

	return(	
		<div className="root">
			<div>
				<img src={element.icon} alt="" />
				<div className="list_music_inf">
					<span>{element.executor}</span>
					<span>{element.title}</span>
				</div>
			</div>
			<div className="list_music_time">
				{element.full_time}
			</div>
		</div>
)

}


export default MusicElement