import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-3" href="/">
            <i>NewsDoor</i>
          </a>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
             <ul className="navbar-nav">
            <li className="nav-item" ><a className="nav-link">Home</a></li>
              <li className="nav-item" ><a className="nav-link">About</a></li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>    */}            
            {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </nav>
      </div>
    );
  }
}
