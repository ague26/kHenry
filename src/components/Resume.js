import React,{Component} from 'react';
import {
  Link,
} from "react-router-dom";
import "./styles.css"

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import download from '../images/baseline-cloud.svg'
import SvgIcon from '@material-ui/core/SvgIcon';


import { Document, Page } from 'react-pdf';
import resumePDF from  "./khenryResume.pdf";

class Resume extends Component{
	state = {
    	numPages: null,
    	pageNumber: 1,
    	size:1.3
  	}
  	componentDidMount() {
  		if (window.screen.width < 600) {
			this.setState({
				size:.6,
			});   
		}
	}
  	onDocumentLoad = ({ numPages }) => {
    	this.setState({ numPages });
  	}

	render(){
		const { pageNumber, numPages } = this.state;
		
		return(
			<Grid container justify="center" className="resumecover">
		        <Grid container justify="center">
			        <Document
			          className="resumeDoc"
			          file={resumePDF}
			          onLoadSuccess={this.onDocumentLoad}>
			          <Page pageNumber={pageNumber} scale={this.state.size}/>
			        </Document>
			    </Grid>

	        	<Grid container justify="center" xs={6} >
	        		<Button variant="raised" color="secondary" className="resumebuttons">
				        <a href="khenryResume.pdf" target="_blank" download="Kweta Henry">
				        	<p>PDF File</p>
				        </a>
				        <SvgIcon>
  							<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
						</SvgIcon>
				    </Button>
			    </Grid>
			    <Grid container justify="center" xs={6} >
			    	<Button variant="raised" color="primary" className="resumebuttons">
				        <a href="KHenry Resume.v2.docx" target="_blank" download="Kweta Henry">
				        	<p>Word Doc.</p>
				        </a>
				        <SvgIcon>
  							<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
						</SvgIcon>
				    </Button>
			    </Grid>
	        </Grid>
		);
	}
}
export default Resume;