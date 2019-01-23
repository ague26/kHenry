import React, {Component} from 'react';

class PublicBlog extends Component{
	constructor(){
		super();
		this.state={
		}
	}
	static getDerivedStateFromProps(props, state){
		if(props.blogs !== state.blogs){
			return{
				blogs: props.blogs
			};
		}
		return null
	}

	render(){
		return(
			<div className="blogContainer">
				<div className="blogHistoryContainer">
			    	{this.state.blogs.slice(0,3).map((blogs) => {
				        return (
				          <div key={blogs.id} className="blogPost">
				            <h3>{blogs.title}</h3>
				            <p>{blogs.textBox}</p>
				          </div>
				        )
			    	})} 
    			</div>
    			<div className="paginationContainer">
    			
    			</div>
			</div>
		);
	}
}

export default PublicBlog;