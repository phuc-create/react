import React,{useContext} from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ConText from './component/ConText';
import {UserContext} from './component/userContext';
import useState from './component/useState';


function App() {
    return ( 
    <div className="App">
        <nav className="navigation">
        <h1>hello world</h1>
        <Router>
        <ul>
          <li><Link to="/">Home Page</Link> </li>
        </ul>
        <ul>
          <li><Link to="/usestate">if you want to use State</Link> </li>
        </ul> 
        <ul>
          <li><Link to="/context">if you want to use Context</Link> </li>
        </ul>
        <UserContext.Provider value={Test}>
        <Route path="/" exact component={Home} />
        <Route path="/usestate" exact component={useState} />
        <Route path="/context" exact component={ConText} />
        </UserContext.Provider>
        </Router>
        </nav>
        </div>
    );
}
function Home() {
const awesomeAnnocen = useContext(UserContext);
    
  return(
      <div>
      <h1>this iss home page</h1>
      <h1>Keep she Below</h1>
      <h1>{awesomeAnnocen}</h1>
    </div>
  )
}

export default App;