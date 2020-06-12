import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from './Contact'
import Service from './Accueil'
import Compétence from './Compétence'
import Expérience from './Expérience';
import Accueil from './Accueil';




const Navbar = () => {
    return (
        <div>          
                <Router>
                    <div>
                        <nav style={{backgroundColor:"rgb(173, 173, 173)"}}  id="navbar-example2" className="navbar text-white p-5 fixed-t  ">
                        <a className="navbar-brand text-warning btn btn-secondary" href="/accueil">Younes Faouzi</a>
        
                            <ul  className="d-flex ">
                                <li style={{listStyle: "none"}} >
                                    <Link className="mx-2 text-white btn btn-secondary" to="/accueil">Accueil</Link>
                                </li>
                                <li style={{listStyle: "none"}} >
                                    <Link className="mx-2 text-white btn btn-secondary" to="/compétence">Compétence</Link>
                                </li>
                                <li style={{listStyle: "none"}}>
                                    <Link className="mx-2 text-white btn btn-secondary" to="/expérience">Expérience</Link>
                                </li>
                                <li style={{listStyle: "none"}}>
                                    <Link className="mx-2 text-white btn btn-secondary" to="/contact">CONTACT</Link>
                                </li>
                            </ul>                    
                        </nav>
                        

                        {/* A <Switch> looks through its children <Route>s and
                         renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/accueil">
                                <Accueil/>
                            </Route>
                            <Route path="/compétence">
                                <Compétence />
                            </Route>
                            <Route path="/expérience">
                                <Expérience />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>

                        </Switch>
                    </div>
                </Router>
        </div>

    )
}

export default Navbar;






