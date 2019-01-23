import React,{Component} from 'react';
import firebase from './firebase';

class Blog extends Component{
	constructor(props){
		super(props);
		this.state={
			title: '',
			textBox: '',
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