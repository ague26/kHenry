import React,{Component} from 'react';
import '../styles.css';
import { Link } from 'react-router-dom'
import Resume from '../khenryResume.pdf';


class Body extends Component{
	constructor(props){
		super(props)
		this.state={
			hoverBoxOne: false,
			hoverBoxFour: false
		}
	}
	zoomOne = () =>{
			this.setState({
				hoverBoxOne:true
			})
	}
	zoomOutOne = () =>{
		this.setState({
			hoverBoxOne:false
		})
	}
	zoomFour = () =>{
			this.setState({
				hoverBoxFour:true
			})
	}
	zoomOutFour = () =>{
		this.setState({
			hoverBoxFour:false
		})
	}
	shadedBlogPic = () =>{
		return(
				<div className="boxOne" onMouseEnter={this.zoomOne}>
		        		
		        </div>
		)
	}
	blogPic = () =>{
		return(
			<Link to="/publicblog" className="hoverBoxOne" onMouseLeave={this.zoomOutOne}>

			</Link>
		)
	}
	shadedResumePic = ()=>{
		return(
				<div className="boxFour" onMouseEnter={this.zoomFour}>
		        		
		        </div>
		)
	}
	resumePic = () =>{
		return(
			<a href={Resume}>
				<div className="hoverBoxFour" onMouseLeave={this.zoomOutFour}>
			       	
			    </div>
		    </a>
		)
	}
	render(){
		return(

			<div className="bodyContainer">
				<div className="sectionLeft"> 
		          	<p>Kweta Henry is a freelance writer, graphic designer and journalist with 3+ years of experience in digital marketing. 
		          	Her writing and research interests include issues of identity, politics & human rights, cross-cultural dialogue, and ancient 
		          	african history. She recently completed her Master’s degree in Conflict Resolution. Last spring she received the 2017 Don Paulson 
		          	Award for Service to the Field of Conflict Resolution for her development of a peer support program at the University of 
		          	Massachusetts Boston. Kweta is also a facilitator and volunteer mediator who has worked with organizations that train communities 
		          	in conflict management skills and seek to build bridges across lines of difference, including Soliya, Habitus Inc., and 
		          	Conflict Management @ MIT.
		          	</p>
		        </div>
		        <div className="sectionRight">
		        	<div className="rowOne">
		        		{(this.state.hoverBoxOne === false) ? this.shadedBlogPic(): this.blogPic()}
		        		<div className="boxTwo">
		        		
		        		</div>
		        	</div>
		        	<div className="rowTwo">
		        		<div className="boxThree">
		        			
		        		</div>
		        		{(this.state.hoverBoxFour === false) ? this.shadedResumePic(): this.resumePic()}
		        	</div>
		        </div>
          </div>

		);
	}
}
export default Body;