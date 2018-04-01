import React from "react";
import {Grid, Row, Col, Image, Button} from "react-bootstrap";


import photoBanner from "../images/banner.jpg";
import linkedIn from "../images/linkedin.png";


const page={
	height:"100vh",
	width:"100vw"
}

const twoFace={
	height:"100%",
	width:"inherit",
}

const bannerSide={
	height:"100%",
	backgroundColor:"black",
	display: "flex",
	justifyContent:"center",
	alignItems:"center"
}
const lightSide={
	height:"100%",
	display: "flex",
	justifyContent:"center",
	alignItems:"center"
}
const title={
	textAlign:"center",
	fontFamily: "Open Sans sans-serif",
	paddingBottom:"40px"
}
const paragrapgh={
	fontFamily: "Open Sans sans-serif",
	fontSize:"1em",
	paddingBottom:"40px"
}
const resumeButton={
	borderWidth:"2px",
	borderColor:"black"
}

const linkedinIcon={
	height:"21px",
	width:"26px",
}


export default () =>(
	
<Grid style={page}>
	<Row style={twoFace}>
		<Col xs={12} md={6} style={bannerSide}>
			<Image src= {photoBanner} responsive />;
	    </Col>
	    <Col xs={12} md={6} style={lightSide} >
				<div>
					<h1 style={title}>Kweta Henry</h1>
					<div >
						<p style={paragrapgh}>Kweta Henry is a freelance writer, graphic designer and journalist with 3+ years of 
						experience in digital marketing. Her writing and research interests include issues of identity, 
						politics & human rights, cross-cultural dialogue, and ancient african history. She recently completed 
						her Master’s degree in Conflict Resolution. Last spring she received the 2017 Don Paulson Award for 
						Service to the Field of Conflict Resolution for her development of a peer support program at the 
						University of Massachusetts Boston. Kweta is also a facilitator and volunteer mediator who has 
						worked with organizations that train communities in conflict management skills and seek to build 
						bridges across lines of difference, including Soliya, Habitus Inc., and Conflict Management @ MIT.
						</p>	
						<Row>
							<Col xs={12} md={2}>
								<Button href="http://alexguevara.me/khenryResume.pdf" style={resumeButton}>Resume</Button>
							</Col>
							<Col xs={12} md={2} >
								<Button href="https://www.linkedin.com/in/kweta-henry-78159577/">
									<Image src= {linkedIn} style={linkedinIcon} responsive />
							</Button>
							</Col>
						</Row>
					</div>
					
				</div>
	    </Col>
	</Row>

</Grid>


);

