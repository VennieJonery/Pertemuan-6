import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Route,
  Switch,
  Link
  // Redirect,
  // withRouter,
  // navlink,
  // NavLink
} from 'react-router-dom'


//router dengan array

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isAuh : false
//     }
//   }
//   render(){
//     const LoginButton = withRouter(({history}) => (
//       <button onClick={() => {
//         this.setState({isAuth : true})
//         history.push('/profile')
//       }}>Login</button>
//     ))

//     const LogoutButton = withRouter(({history}) => (
//       <button onClick={() => {
//         this.setState({isAuth : false})
//         history.push('/login')
//       }}>Logout</button>
//     ))

//     const routes = [{
//       path : '/',
//       exact : true,
//       render : ()=> <div>Ini Halaman Home</div>
//     },{
//       path : '/news',
//       render : ()=> <div>Ini Halaman News</div>
//     },{
//       path : '/login',
//       render : ()=> <LoginButton />
//     },{
//       path : '/profile',
//       render : ()=> this.state.isAuth ? <div>Ini halaman Profile <br /><LogoutButton /></div> : <Redirect to ='/login' />
//     }]
//     return(
//       <Router>
//         <div>
//         <ul style={{listStyle: 'none'}}>
//              <li><Link to='/'>Home</Link></li>
//              <li><Link to='/news'>News</Link></li>
//              <li><Link to='/profile'>Profile</Link></li>
//            </ul>
//            <Switch>
//            {
//              routes.map((item, index) => (
//                <Route path={item.path} exact={item.exact} render={item.render} />
//              ))
//            }
//            </Switch>
//         </div>
//       </Router>
//     )
//   }
// }



// withRouter

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isAuh : false
//     }
//   }
//   render(){
//     const LoginButton = withRouter(({history}) => (
//       <button onClick={() => {
//         this.setState({isAuth : true})
//         history.push('/profile')
//       }}>Login</button>
//     ))

//     const LogoutButton = withRouter(({history}) => (
//       <button onClick={() => {
//         this.setState({isAuth : false})
//         history.push('/login')
//       }}>Logout</button>
//     ))
//     return(
//       <Router>
//         <div>
//         <ul style={{listStyle: 'none'}}>
//              <li><Link to='/'>Home</Link></li>
//              <li><Link to='/news'>News</Link></li>
//              <li><Link to='/profile'>Profile</Link></li>
//            </ul>
//            <Switch>
//            <Route path='/' exact render={() => <div> Ini halaman home</div>} />
//            <Route path='/news' render={() => <div>Ini halaman News</div>}/>         
//            <Route path='/login' render={() => <LoginButton /> }/>
//            <Route path='/profile' render={() => this.state.isAuth ? <div>Ini halaman Profile <br /> <Lo> </div> : <Redirect to='/login' />}/>
//            </Switch>
//         </div>
//       </Router>
//     )
//   }
// }



//Redirect

// class App extends Component{
//   constructor(){
//     super()
//     this.state ={
//       isAuth : false
//     }
//   }
//   render(){
//     return(
//       <Router>
//         <div>
//           <ul style={{listStyle: 'none'}}>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/news'>News</Link></li>
//             <li><Link to='/profile'>Profile</Link></li>
//           </ul>
//           <Switch>
//           <Route path='/' exact render={() => <div> Ini halaman home</div>} />
//           <Route path='/news' render={() => <div>Ini halaman News</div>}/>         
//           <Route path='/login' render={() => <div><button>Login</button></div>}/>
//           <Route path='/profile' render={() => this.state.isAuth ? <div>Ini halaman Profile</div> : <Redirect to='/login' />}/>
//           </Switch>
//         </div>
//       </Router>
//     )
//   }

// }



// render Router

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact render={() => <div> Ini halaman home</div>} />
            <Route path='/news' render={() => <div>Ini halaman News</div>}/>          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
