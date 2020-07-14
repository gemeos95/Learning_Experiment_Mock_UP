import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


class Header extends Component {
    constructor() {
        super();
        this.state = { 
            navshow: false
        };
        this.changing = this.changing.bind(this);
    }

    changing() {
        console.log('entrou');
    if (this.state.navshow === true){
    this.setState({navshow: false});
            }
    else{ this.setState({navshow: true});
    }
    console.log(this.state.navshow, 'navshow');
    };

    render() { 
      const {navshow}=this.state;

      return ( 
      <header role="banner">
       <div>


       <div>
        <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-6 social">
            <SocialIcon className="socialicons" url="https://www.youtube.com/" style={{ height:35, width: 35}} /> 
            <SocialIcon className="socialicons" url="https://www.facebook.com/" style={{  height:35, width: 35}} /> 
            <SocialIcon className="socialicons" url="https://www.instagram.com/" style={{  height:35, width: 35}} />
            </div>
            <div className="col-6 search-top">
              {/* <a href="#"><span class="fa fa-search"></span></a> */}
              <nav className="navbar navbar-light bg-light moving2">
                    <form className="form-inline moving2  ">
                 <button className="btn btn-sm btn-outline-secondary " type="button">Register</button>
                 <button className="btn btn-sm btn-outline-secondary moving1" type="button">LogIn</button>
                    </form>
             </nav>
            </div>
          </div>
        </div>
      </div>
            </div>


        <div className="container logo-wrap">
          <div className="row pt-2">
            <div className="col-lg-12 text-center">
              <a onClick={this.changing} 
              className="absolute-toggle d-block d-md-none" 
              data-toggle="collapse" href="#navbarMenu" 
              role="button" aria-expanded="false" 
              aria-controls="navbarMenu">
              <span className="burger-lines" />
              </a>
             <Link to="/">
              <h1 className="site-logo">Learning Experiment</h1>
              </Link>
            </div>
          </div>
        </div>
    </div>
    <div>

{/*Navbar!*/}
      <nav className="navbar navbar-expand-md  navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link to="/">
                  <div className="nav-link active" href="index.html">Home</div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <Link to="/blog">
                  <div className="nav-link " 
                  href="category.html"
                   id="dropdown04" 
                   data-toggle="dropdown" 
                   aria-haspopup="true" 
                   aria-expanded="false">Blog
                   </div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <Link to="/events">
                  <div className="nav-link " 
                  href="category.html" 
                  id="dropdown05" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">Events
                  </div>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/references">
                  <div className="nav-link" 
                  href="about.html">References
                  </div>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/forum">
                  <div className="nav-link" 
                  href="contact.html">Forum
                  </div>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/contactus">
                  <div className="nav-link" 
                  href="contact.html">Contact
                  </div>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/aboutus">
                  <div className="nav-link" 
                  href="contact.html">About Us
                  </div>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
{/*Navbar!*/}

{/*Hiden*/}
{
      (navshow) ? (<div>
                      <div className="navhiden">
                        <ul>
                          <li><Link to="/"><a href="#home">Home</a></Link></li>
                          <li><Link to="/blog"><a href="#news">Blog</a></Link></li>
                          <li><Link to="/events"><a href="#contact">Events</a></Link></li>
                          <li><Link to="/references"><a href="#about">References</a></Link></li>
                          <li><Link to="/forum"><a href="#about">Forum</a></Link></li>
                        </ul>
                      </div>
                   </div>
    ) : (null) 
    }
{/*Hiden!*/}
      </div>
    </header>
        );
    }
}

export default Header;