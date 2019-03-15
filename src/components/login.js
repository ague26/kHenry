import React, {Component} from 'react'
import firebase from './firebase';
import { Redirect } from 'react-router';


class Login extends Component{

	constructor(props){
		super(props)
		this.state=({
			username: '',
			password: '',
		});
	}

	handleChanges = e =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	
	static getDerivedStateFromProps(props, state){
		if(props.login !== state.login){
			return{
				login: props.login
			};
		}
		return null
	}

	signIn = e => {
		e.preventDefault();
		let email= this.state.username;
		let password = this.state.password;
		
		let provider = firebase.auth().signInWithEmailAndPassword(email, password)
		    .catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  if (errorCode === 'auth/wrong-password') {
			    alert('Wrong password.');
			  } else {
			    alert(errorMessage);
			  }
			  console.log(error);
			});
		
		if(provider !== null){
			this.setState({
				login: true
			})
			alert("You have logged in!")
		}
	
	}


	render(){
		if (this.state.login === true) {
     	 return <Redirect to='/blog' />
    	}
		return(
			 (this.state.login === true ) ?
				<p>hello</p>
				:
				<div className="loginContainer">
					<form className="loginForm" onSubmit={this.signIn}>
						<h1 style={{textAlign:"center"}}> Login </h1>
						<input type="text" name="username" placeholder="Username" value= {this.state.username} onChange= {this.handleChanges} /> 
						<input type="password" name="password" placeholder="Password" value= {this.state.password} onChange= {this.handleChanges} />
						<button> Submit </button>
					</form>
					
				</div>
				
			
		)
	}
}
export default Login;