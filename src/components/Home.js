import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "./styles.css"

import linkedIn from "../images/linkedin.svg";
import blogPic from "../images/blogger.svg";
import resume from "../images/curriculum-vitae.svg";



class Home extends Component {	
	

	render(){
		return(
			<div className="cover"> 
				
				<div className="content">
					<p className="description">
						Kweta Henry is a freelance writer, graphic designer and journalist with 3+ years of 
						experience in digital marketing. Her writing and research interests include issues of identity, 
						politics & human rights, cross-cultural dialogue, and ancient african history. She recently completed 
						her Master’s degree in Conflict Resolution. Last spring she received the 2017 Don Paulson Award for 
						Service to the Field of Conflict Resolution for her development of a peer support program at the 
						University of Massachusetts Boston. Kweta is also a facilitator and volunteer mediator who has 
						worked with organizations that train communities in conflict management skills and seek to build 
						bridges across lines of difference, including Soliya, Habitus Inc., and Conflict Management @ MIT.
					</p>
					<ul className="socialLinks">
						<li> <a className="linkOrder" href="https://www.linkedin.com/in/kweta-henry-78159577/"> <img src={linkedIn} alt="linkedin"/> <p className="linkText">LinkedIn</p> </a></li>
						<li> <Link className="linkOrder" to="/blog" > <img src={blogPic} alt="blog"/> <p className="linkText">My Blog</p> </Link>  </li>
						<li> <Link className="linkOrder" to="./resume"> <img src={resume} alt="resume"/> <p className="linkText">Resume</p> </Link></li>
					</ul>
				</div>
			</div>
		);

	}
	
	
}

export default Home;

