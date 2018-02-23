
import React, { Component } from 'react';
import router from './router/router'
import './css/reset.css'
import { NavLink, withRouter } from 'react-router-dom'
import './css/button.css'
import './css/app.css'
import './css/border-bottom.css'
import './css/bg.css'
import seal from './img/CAMS_SEAL.gif'
import { connect } from 'react-redux'
import { getUser, getQuotes } from './ducks/reducer'




class App extends Component {
  componentWillMount(){
    this.props.getUser()
    this.props.getQuotes()
}
  render() {
    return (
      <div className="App">
        <nav className='navbar-thin' >
          <NavLink to='/' > < button className='hvr-underline-from-center btn' > Home </button> </NavLink >
          <NavLink to='/pricing' > < button className='hvr-underline-from-center btn' > Pricing & Enrollment </button> </NavLink >
          <NavLink to='/regulatory'>< button className='hvr-underline-from-center btn' > Regulatory References </button></NavLink>
          <NavLink to='/searule'>< button className='hvr-underline-from-center btn' > Rule 17a-4 </button></NavLink>
          <NavLink to='/contact'>< button className='hvr-underline-from-center btn' > Contact / About </button></NavLink>

        </nav>
        <nav className='navbar' >
          <div className='logo'>

          </div>

          <div className='heading' >

          </div>
        </nav>
      
        {router}


        <div id='footer' >
        <p>Copyright © 2007 - 2018 Securities Industry Records Services, LLC. All Rights Reserved.</p>

        
        {this.props.userData.user_name ? <NavLink to='/admin'><p style={{color: 'black'}}>Admin page</p></NavLink> 
        : <a href={process.env.REACT_APP_LOGIN}><p style={{color: 'black'}}>Admin login</p></a>
        } 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}
export default withRouter(connect(mapStateToProps,{getUser, getQuotes})(App))
// export default App
// <a href={process.env.REACT_APP_LOGIN}><button className='submit-button hvr-fade'>ADMIN LOGIN</button></a>
// <a href='http://localhost:3005/auth/logout'><button className='submit-button hvr-fade'>LOGOUT</button></a>
