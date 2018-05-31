import React, {Component} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import "./styles.css"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class MobileNavigator extends Component{
	render(){

		return(
			<Grid container  alignItems="center" className="longbottom">
				<BottomNavigation
					className="neville"
			        showLabels
			    >
			    <Link to="/">
			        Home
			    </Link>
			    <Link to="./Blog">
			        Blog
			     </Link>
			     <Link to="./Resume">
			        Resume
			     </Link>
			        
		      	</BottomNavigation>
		    </Grid>

		);
	}

}
export default MobileNavigator; 

