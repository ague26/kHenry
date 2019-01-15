import React, {Component} from 'react';
import "../styles.css";
import Logo from '../images/profile.jpeg';
import { Link } from 'react-router-dom';
import Resume from '../khenryResume.pdf';



class Header extends Component{
	render(){

		return(	
			<div className="headerContainer">
				<div className="leftNav"> 
					<a href={Resume}>Resume</a>
					<Link to="/blog">Blog</Link>	
				</div>	
				
				<div className="middleNav">
					<h2 className="firstName"> Kweta </h2>
					<img className="logo" alt="profilePic" src={Logo} />
					<h2 className="lastName">Henry</h2>
				</div>
				
				<div className="rightNav">
					<Link to="/">About</Link>
					<a>Contact</a> 
				</div>

			</div>	
		);
	}
}
export default Header;


