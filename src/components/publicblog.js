import React, {Component} from 'react';

class PublicBlog extends Component{
	constructor(){
		super();
		this.state={
			currentPage: 1,
			perPage: 3,
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
	changePageNum = (event) =>{
		this.setState({
			currentPage: Number(event.target.id)
		})
	}
	render(){
		const lastIndex=this.state.currentPage * this.state.perPage;
		const beginIndex= lastIndex - this.state.perPage;
		const currentBlogDisplay=this.state.blogs.slice(beginIndex,lastIndex);

		const renderBlogDisplay = currentBlogDisplay.map(blogs =>{
			return(
				<div key={blogs.id} className="blogPost">
	            	<h3>{blogs.title}</h3>
	           		<p>{blogs.textBox}</p>
	          	</div>
			)
		}) 
		const pageNum=[];
		for (var i = 1; i <= Math.ceil(this.state.blogs.length/this.state.perPage); i++) {
			pageNum.push(i)
		}
		const renderpageNum = pageNum.map(e =>{
			return(
					<li key={e} id={e} onClick={this.changePageNum}>{e}</li>
			)
		})
		return(
			<div className="blogContainer">
				<div className="blogHistoryContainer">
			    	{renderBlogDisplay}
    			</div>
    			<div className="paginationContainer">

    				<ul className="pagination"> {renderpageNum} </ul>

    			</div>
			</div>
		);
	}
}

export default PublicBlog;