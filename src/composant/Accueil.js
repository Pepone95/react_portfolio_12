import React from 'react';
import Typist from 'react-typist';

const Accueil = () => {
	return (
		
		<div className="container p-5 mt-5">
			<div className="text-center">
			<Typist>
			
			<span
				style={{fontSize: '3.5em'}}
				className='text-primary'>
				 Hello, Je suis Faouzi Younes
			</span>
			.<br/> 
			<span style={{fontSize: '1.5em'}}
				className='text-warning'> 
				Je vais créer vos sites Web.
			</span>
			</Typist>
			</div>
		<div className="mt-5">
		<img src="../img/fullstack.png" alt=""/>
		</div>
		</div>
		

		

		
	)
};

export default Accueil;