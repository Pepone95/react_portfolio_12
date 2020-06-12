import React from 'react';

const Compétence = ()=>{
    
  return(
    <div className="container bg-secondary mt-3 p-5">
    <ul className="skill-bars">
        
  
                    <li className="mt-2">
                        <strong> PHP / Laravel</strong>
                        <div className=" progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}></div>
                        
                    </li>
                    <br/>
                    <li className="list-style: none;">
                        <strong>HTML5</strong>
                        <div className=" progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                    </li>
                    <br/>
                    <li>
                        <strong>CSS3, Bootstrap, SASS</strong>
                        <div className=" progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
                    </li>
                    <br/>
                    <li>
                        <strong>JavaScript, ReactJS</strong>
                        <div className=" progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}></div>
                    </li>
                    <br/>
                    <li>
                        <strong>WordPress Developpeur</strong>
                        <div className=" progress progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}></div>
                    </li>
                    <br/>

                </ul>
                
    </div>
  )
}

export default Compétence