import React from 'react'

 
export default class AboutList extends React.Component {

	render(){

		const style = {
			'fontSize': "18px"
		}


		return <div>
					{this.props.categoryMusic ? <div className="about_list">
	              	<p>Аудіозаписи</p>
	            	<p>за замовчуванням</p>
	    		</div> : <div className="about_list">
            		<p style={style}><span>1</span> список відтворення</p>

	    		</div>}
		</div>



	}

		
}

