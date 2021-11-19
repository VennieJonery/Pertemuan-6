import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
  // withRouter,
  // navlink,
  // NavLink
} from 'react-router-dom'

//Redirect

class App extends Component{
  constructor(){
    super()
    this.state ={
      isAuth : false
    }
  }
  render(){
    return(
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
          <Switch>
          <Route path='/' exact render={() => <div> Ini halaman home</div>} />
          <Route path='/news' render={() => <div>Ini halaman News</div>}/>         
          <Route path='/login' render={() => <div><button>Login</button></div>}/>
          <Route path='/profile' render={() => this.state.isAuth ? <div>Ini halaman Profile</div> : <Redirect to='/login' />}/>
          </Switch>
        </div>
      </Router>
    )
  }

}


export default App;
