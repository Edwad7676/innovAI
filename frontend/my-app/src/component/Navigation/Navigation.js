import React from 'react';

const Navigation = () =>{
	return (
		<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<a href="http://localhost:3001/" className='f4 link dim black underline pa3 pointer'>Sign Out</a>
		</nav>
	);
}

export default Navigation;