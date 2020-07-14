import React, { Component } from 'react';

class UpperBlog extends Component {
    render() {
        return (
            <div>
              <div className="container">           
                            <div className="row blog-entries">
                                <div className="col-md-12 col-lg-12 main-content">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="dropdown ">
                                            <button className="dropbtn dropdown-toggle nav-link"> Categories : All</button>
                                            <div className="dropdown-content">
                                            <a href="#navbarMenu">The JETS!</a>
                                            <a href="#navbarMenu">The JETS!</a>
                                            <a href="#navbarMenu">The JETS!</a>
                                            </div>
                                            </div>  
                                        </div>
                                         <div className="col-md-6 col-lg-3">
                                            <div className="dropdown ">
                                                <button className="dropbtn dropdown-toggle nav-link"> Authors : All</button>
                                                <div className="dropdown-content">
                                                <a href="#navbarMenu">The JETS!</a>
                                                <a href="#navbarMenu">The JETS!</a>
                                                <a href="#navbarMenu">The JETS!</a>
                                                </div>
                                            </div>  
                                        </div>
                                        
                                        <div className="col-md-6 col-lg-6">
                                        <div className="row"> {/*solve the ISUE join the button and text box*/}
                                            <div className="col-md-6 col-lg-8 margin0" >
                                              <div className="form-group modificaion" >
                                                <input type="text" className="form-control"/>
                                               </div>
                                            </div>      
                                          <div className="col-md-6 col-lg-2 margin1 ">
                                              <button className="btn btn-primary">Search</button>
                                          </div> 
                                        </div>
                                        </div>
                                     </div>                  
                                </div>
                                </div>
                                </div>
            </div>
        );
    }
}

export default UpperBlog;