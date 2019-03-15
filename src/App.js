import React,{Component} from 'react';
import Header from './components/header';
import Body from './components/body';
import Blog from './components/blog';
import PublicBlog from './components/publicblog';
import Login from './components/login'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from './components/firebase';

class App extends Component {
	constructor(props){
		super(props)
  		this.state={
  			blogs: [],
  			login:false
  		}
  	}
	componentDidMount() {
		const blogRef = firebase.database().ref('blog');
		blogRef.on('value', (snapshot) => {
	    	let blogs = snapshot.val();
	    	let newState = [];
	    	for (let item in blogs) {
		      	newState.push({
		        	id: item,
		        	title: blogs[item].title,
		        	textBox: blogs[item].textBox,
		        	currentDate: blogs[item].currentDate,
		      	});
		   	}
		    this.setState({
		      blogs: newState
		    });
	  	});

	}

  render() {
  	// this.yourAnIdiot();
  	console.log(this.state.blogs)
    return (
    	<Router>
	        <div>
	        	<Header />
	        	<Route exact path="/" component={Body}  />
	    		<Route path="/blog" render={(props) => <Blog blogs={this.state.blogs} />}/>
	    		<Route path="/publicblog" render={(props)=> <PublicBlog blogs={this.state.blogs}/>} />
	    		<Route path="/login" render={(props)=> <Login login={this.state.login}/>} />
	    	</div>
	    	
    	</Router>
    );
  }
}
export default App;


