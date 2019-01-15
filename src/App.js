import React,{Component} from 'react';
import Header from './components/header';
import Body from './components/body';
import Blog from './components/blog';
import { Route, BrowserRouter as Router } from 'react-router-dom'



class App extends Component {
  render() {
    return (
    	<Router>
	        <div>
	        	<Header />
	        	<Route exact path="/" component={Body} />
	    		<Route path="/blog" component={Blog} />
	    	</div>
	    	
    	</Router>
    );
  }
}
export default App;


