
import React, { Component } from 'react';
import router from './router/router'
import './css/reset.css'
import { Link } from 'react-router-dom'
import './css/button.css'
import './css/app.css'
import './css/border-bottom.css'
import './css/bg.css'
import seal from './img/CAMS_SEAL.gif'


class App extends Component {

  render() {


    return (
      <div className="App">
        <nav className='navbar-thin' >
          <Link to='/' > < button className='hvr-underline-from-center btn' > Home </button> </Link >
          <Link to='/pricing' > < button className='hvr-underline-from-center btn' > Pricing & Enrollment </button> </Link >
          <Link to='/regulatory'>< button className='hvr-underline-from-center btn' > Regulatory </button></Link>
          <Link to='/searule'>< button className='hvr-underline-from-center btn' > SEA Rule </button></Link>
          <Link to='/contact'>< button className='hvr-underline-from-center btn' > Contact Sirs </button></Link>

        </nav>
        <nav className='navbar' >
          <div className='logo'>

          </div>

          <div className='heading' >

          </div>
        </nav>

        {router}


        <div id='footer' >
          <div id='cams-seal' >  <img id='seal-img' src={seal} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
