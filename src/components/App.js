import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home';
import Blog from './Blog';
import Header from './Header'
import Resume from './Resume'

class App extends Component {
  render() {
    return (
    <Router>
        <div>
            <Header />

			<Route exact={true} path="/" component={Home} />
			<Route path="/blog" component={Blog} />
			<Route path="/resume" component={Resume}/>
		</div>
    </Router>
    );
  }
}
export default App;


