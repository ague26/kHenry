import React,{Component} from 'react';
import firebase from './firebase';

class Blog extends Component{
	constructor(props){
		super(props);
		this.state={
			title: '',
			textBox: '',
			editBlog: {},
			editPost: null,
			editTitle: null,
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
			currentDate: this.state.currentDate
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

	removeBlog = (blogId) =>{
	  const itemRef = firebase.database().ref(`blog/${blogId}`);
	  itemRef.remove();
	}

	updateBlog = (blogId) =>{
		const itemRef = firebase.database().ref(`blog/${blogId}`);
		if(this.state.editTitle != null && this.state.editPost === null){
			itemRef.child('title').set(this.state.editTitle);
			alert('It has been updated')
			this.uneditBlog(blogId);
		}
		else if (this.state.editPost != null && this.state.editTitle === null) {
			itemRef.child('textBox').set(this.state.editPost);
			alert('It has been updated');
			this.uneditBlog(blogId);

		}
		else if(this.state.editTitle != null && this.state.editPost != null){
			itemRef.child('title').set(this.state.editTitle);
			itemRef.child('textBox').set(this.state.editPost);
			alert('It has been updated');
			this.uneditBlog(blogId)
		};
	}
	updateChange = e =>{
		this.setState({
			[e.target.name] : e.target.value,
		})
	}
	editBlog = (id) =>{
		let editBlogState = this.state.editBlog
		editBlogState[id] = true;
		this.setState({
			editBlog:editBlogState,
		});
		console.log(editBlogState)
	}
	uneditBlog = (id) =>{
		let editBlogState = this.state.editBlog
		editBlogState[id] = false;
		this.setState({
			editBlog:editBlogState,
		});
	}
	componentDidMount(){
		const currentTime = new Date();
		let length = 16;
		const printDates = currentTime.toString().substring(0, length);
		this.setState({
			currentDate : printDates
		})
	}
	render(){
		
		
		return(
			<div className="blogContainer">
				<form className="formContainer" onSubmit={this.submitChanges}>
					<div className="titleBlog">
						<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChanges} className="title"/>
						<p>{this.state.currentDate} </p>
					</div>
					<div className="textBoxContainer">
						<textarea type="text" name="textBox" placeholder="Lets Tell A Story" value={this.state.textBox}  onChange={this.handleChanges} className="textBox"/>
					</div>
					<button className="submit"> Submit Article </button>
				</form>
				<div className="blogHistoryContainer">

				{this.state.blogs.slice(0).reverse().map((blogs) => {
			        return (
			          <div key={blogs.id}>

			          	{this.state.editBlog[blogs.id] ? 
			          	<div className="publicBlogPost">
			          		<input type="text" name="editTitle" className="titleBorder publicTitle titleBlog editText" defaultValue={blogs.title} onChange={this.updateChange}/>
			            	<input type="text" name="editPost" className="blogBorder textBoxContainer editText" defaultValue={blogs.textBox} onChange={this.updateChange}/>
				            <div className="updateCancel">	
				            	<button type="submit" onClick={()=> this.updateBlog(blogs.id)}> Update </button>
				            	<button type="submit" onClick={()=> this.removeBlog(blogs.id)}> Remove </button>
				            	<button type="submit" onClick={()=> this.uneditBlog(blogs.id)}> Cancel </button>
				            </div>
			            </div>

			            :
			            <div className="publicBlogPost">
			            	<div className="publicTitleBlog">
			            		<span> </span>
				            	<h3 className="publicTitle">{blogs.title}</h3>
				            	<p> {blogs.currentDate}</p>
			            	</div>
			            	<p className="blogBorder textBoxContainer">{blogs.textBox}</p>
			            	<div className="removeAdd">
					            <button type="submit" onClick={()=> this.editBlog(blogs.id)}> Edit </button>
				        	</div>
			            </div>
			        	}
			          
			            

			          </div>
			        )
			      })
				} 
    			</div>
			</div>
		);
	}
}
export default Blog;