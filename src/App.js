
import React, { Component } from 'react';
import router from './router/router'
import './css/reset.css'
import { Link } from 'react-router-dom'
import './css/button.css'
import './css/app.css'


class App extends Component {
  componentDidMount() {
    window.google.books.load()

    const alertNotFound = () => {
      alert('could not embed the book!');
    }
    const initialize = () => {
      const viewer = new window.google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load("kI5WAAAAcAAJ", alertNotFound);
    }
    window.google.books.setOnLoadCallback(initialize);
  }
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


        <div className='footer' >
          <div > Footer </div> </div>

      </div>
    );
  }
}

export default App;
