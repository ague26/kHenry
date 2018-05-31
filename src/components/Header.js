import React, {Component} from 'react';
import "./styles.css"
import {Link} from 'react-router-dom'

import profileImg from "../images/profile.jpeg";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';




class Header extends Component{
	render(){

		return(
			
			<Grid container className="header">
				<Hidden smDown>
					<Grid container xs={12} justify="flex-end"  className="navhead">
						<Grid container alignItems="center" justify="center" xs="6" md="3" className="navgroup">
							<Grid item xs={4} className="navLink">
								<Link to="/"> <h4>Home</h4> </Link> 
							</Grid>
							<Grid item xs={4} className="navLink">
								<Link to="/Blog"> <h4>Blog</h4> </Link>
							</Grid>
							<Grid item xs={4} className="navLink">
								<Link to="/Resume">  <h4>Resume</h4> </Link>
							</Grid>
						</Grid>
						
					</Grid>
				</Hidden>
				<Grid container xs={12} justify="center" className="imgContainer">
					<Grid item xs="12" md="6" >
						<img className="image" src={profileImg} alt="Profile"/>
					</Grid>
				</Grid>
			</Grid>
			
		);
	}
}
export default Header;


