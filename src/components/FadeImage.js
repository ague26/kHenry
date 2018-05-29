import React, {Component} from "react";
import {Grid, Row, Col, Image, Button} from "react-bootstrap";


import photoBanner from "../images/banner.jpg";
import "./styles.css"


const firstPage={
	height:"101vh",
	width:"100vw",
	backgroundColor:"black",
	display: "flex",
	justifyContent:"center"
}
const testing={
	width:"inherit",
	
}

class fadeImage extends Component{

	render(){
		return(
			<div style={firstPage}>
				<img src={photoBanner}/>

				<p class="testings" style={{color:"white"}}> Kweta Henry </p>
			</div>
		);
	}	
} 
export default fadeImage;
