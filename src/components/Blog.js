import React,{Component} from 'react';
import firebase from './firebase';

class Blog extends Component{
	constructor(){
		super();
		this.state={
			title: '',
			textBox: '',
			blogs: []
		}
	}

	handleChanges = e =>{
		this.setState({
			[e.target.name] : e.target.value,
		})
	}

	submitChanges = e =>{
		e.preventDefault();
		const blogRef = firebase.database().ref('blog');
		const stateBlog = {
			title: this.state.title,
			textBox:this.state.textBox,
		}
		blogRef.push(stateBlog);
		this.setState({
			title: '',
			textBox:'',
		})
		alert("Your Blog has been posted");

	};

	componentDidMount() {
		const blogRef = firebase.database().ref('blog');
		blogRef.on('value', (snapshot) => {
	    	let blogs = snapshot.val();
	    	let newState = [];
	    	for (let item in blogs) {
	      	newState.push({
	        	id: item,
	        	title: blogs[item].title,
	        	textBox: blogs[item].textBox
	      	});
	   	}
	    this.setState({
	      blogs: newState
	    });
	  });
	}
	render(){

		return(
			<div className="blogContainer">
				<form className="formContainer" onSubmit={this.submitChanges}>
					<div className="titleBlog">
						<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChanges} className="title"/>
						<p> Date published will be put here </p>
					</div>
					<div className="textBoxContainer">
						<textarea type="text" name="textBox" placeholder="Lets Tell A Story" value={this.state.textBox}  onChange={this.handleChanges} className="textBox"/>
					</div>
					<button className="submit"> Submit Article </button>
				</form>
				<div className="blogHistoryContainer">
			      {this.state.blogs.map((blogs) => {
			        return (
			          <div key={blogs.id} className="blogPost">
			            <h3>{blogs.title}</h3>
			            <p>{blogs.textBox}</p>
			          </div>
			        )
			      })}
    			</div>
			</div>
		);
	}
}
export default Blog;