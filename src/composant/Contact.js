import React from 'react';


const Contact = ()=>{
  return(
    <div className="container mt-5">
		<div className="">
			<h1 className="text-center text-secondary">Formulaire de contact</h1>
		</div>
		<hr/>
      <form>
						<label htmlFor=''>Name</label>
						<div class='form-row form-group'>
							<div class='col'>
								<input
									id='firstName'
									type='text'
									class='form-control'
									placeholder='First name'
								/>            
							</div>
							<div class='col'>
								<input
									id='lastName'
									type='text'
									placeholder='Last name'
									class='form-control'
								/>
							</div>
						</div>
              <hr/>
						<div class='form-group'>
							<label for='exampleFormControlInput1'>Email</label>
							<input
								type='email'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='name@example.com'
							/>
						</div>

						<div class='form-group'>
							<label for='exampleFormControlTextarea1'>
              			Expliquez votre projet.
							</label>
							<textarea
								class='form-control'
								id='exampleFormControlTextarea1'
								rows='2'></textarea>
						</div>
						<div className='form-group text-center'>
							<button className='btn btn-success'>
								<i class='fas fa-paper-plane'></i> Envoyer
							</button>
						</div>
					</form>
				</div>
  )
}

export default Contact;