import React,{Component} from 'react';
import "./styles.css"

import { Document, Page } from 'react-pdf';
import resumePDF from  "./khenryResume.pdf"

class Resume extends Component{
	state = {
    	numPages: null,
    	pageNumber: 1,
  	}
  	onDocumentLoad = ({ numPages }) => {
    	this.setState({ numPages });
  	}

	render(){
		const { pageNumber, numPages } = this.state;
		return(
			<div className="cover">
		        <Document
		          className="resumeDoc"
		          file={resumePDF}
		          onLoadSuccess={this.onDocumentLoad}>
		          <Page pageNumber={pageNumber} scale="1.3"/>
		         </Document>
		    </div>
		);
	}
}
export default Resume;