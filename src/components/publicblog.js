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
	changePageNum = () =>{
		//start here
	}
	render(){
		const pageNum=[];
		for (var i = 1; i <= Math.ceil(this.state.blogs.length/this.state.perPage); i++) {
			pageNum.push(i)
		}
		const renderpageNum = pageNum.map(e =>{
			console.log(e)
			return(
				<ul>
					<li key={e} onClick={this.changePageNum}>{e}</li>
				</ul>
			)
		})
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

    				<div className="pagination"> {renderpageNum} </div>

    			</div>
			</div>
		);
	}
}

export default PublicBlog;