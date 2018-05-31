import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import "./styles.css"

import linkedIn from "../images/linkedin.svg";
import blogPic from "../images/blogger.svg";
import resume from "../images/curriculum-vitae.svg";



class Home extends Component {	
	

	render(){
		return(
			<Grid container justify="center"  className="cover">
				<Grid container xs={10} md={6} justify="center"  className="content">
					<Grid container spacing={8}>
						<Grid item>
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
						</Grid>
					</Grid>
					<Grid container xs={8} md={6} justify="space-around" className="socialLinks">
						<Grid item> 
							<a className="linkOrder" href="https://www.linkedin.com/in/kweta-henry-78159577/"> 
								<img src={linkedIn} alt="linkedin"/> 
								<p className="linkText">LinkedIn</p> 
							</a>
						</Grid>
						<Grid item> 
							<Link className="linkOrder" to="/blog" > 
								<img src={blogPic} alt="blog"/> <p className="linkText">My Blog</p> 
							</Link>  
						</Grid>
						<Grid item> 
							<Link className="linkOrder" to="./resume">
								<img src={resume} alt="resume"/> 
								<p className="linkText">Resume</p> 
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);

	}
	
	
}

export default Home;

