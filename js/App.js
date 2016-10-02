import React from 'react';
class App extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div id="navheader" className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#"><img id="logo" src="css/assets/logo-1.png"></img></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="navoptions" ><a href="#">Get Free Quotes</a></li>
              <li className="navoptions"><a href="#">About MOCA</a></li>
              <li className="navoptions"><a href="#">Contact</a></li>
              <li className="navoptions"><a href="#"><img src="css/assets/fbbtn.png"></img></a></li>
              <li className="navoptions"><a href="#"><img src="css/assets/glebtn.png"></img></a></li>
            </ul>
          </div>
        </div>  
      </nav>
    )
  }
}

export default App