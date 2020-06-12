import React from 'react';

const Expérience = ()=>{
  return(
    <div className='container pt-4'>
			<div className='jumbotron mx-2'>
				<h1
					style={{fontWeight: 'bold'}}
					className='text-warning text-center mb-4'>
										
          À propos de moi !
				</h1>
					<div className='row d-flex align-items-center 					justify-content-center'>
						<div className='col-lg-6 col-sm-12'>
						<p className='p-4 text-secondary'>
            			Je suis un jeune homme de 25 ans qui a commencé une formation en full-stack web développer.
              			<br/>
              			J'ai commencé la formation a l'âge de 24 ans je ne connaiser rien au niveau du codage, <br/>
              			pour vous dire que même le HTML Css pour moi c'etais du chinois pour moi :D <br/>
						  <hr/>
						  <span className="text-success">Apres une formations de 6 mois a MolenGeek je suis capable de faire des site sur mésure !</span> <br/>
						</p>
						
					</div>
					<div className='col-lg-6 col-sm-12 text-center'>
						<img
							style={{
								borderRadius: '56%',
								border: 'black solid 5px'
							}}
							className='w-50'
							src='../img/image0.png'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expérience;