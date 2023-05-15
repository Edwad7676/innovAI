import React from 'react';

const counter = ({Face_quantity}) =>{
	return(
		<div>
			<div className="white f4">
				<p>number of faces detected</p>
			</div>
			<div className="white f4">
				<p>{Face_quantity}</p>
			</div>
		</div>

	);
}

export default counter;