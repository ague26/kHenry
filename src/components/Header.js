import React, {Component} from 'react';
import "./styles.css"
import {Link} from 'react-router-dom'

import profileImg from "../images/profile.jpeg";


class Header extends Component{
	render(){

		return(
			<div className="header">
				<div className="navhead">
					<ul className="nav">
						<li className="navLink"> <Link to="/"> <h4>Home</h4> </Link> </li>
						<li className="navLink"> <Link to="/Blog"> <h4>Blog</h4> </Link> </li>
						<li className="navLink"> <Link to="/Resume">  <h4>Resume</h4> </Link> </li>
					</ul>
				</div>
				<img className="image" src={profileImg} alt="Profile"/>
			</div>
		);
	}
}
export default Header;


