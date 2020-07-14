import React, { Component } from 'react';



class Component3 extends Component {


    render() {
        return (
<div>
    <section className="site-section py-sm">
        <div className="container">
            <div className="row">
                <div className="col-md-6" >
                    <h2 className="mb-4 center">Popular blog articles!</h2>
                </div>
            </div>
            <div className="row blog-entries">
                <div className="col-md-12 col-lg-8 main-content">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
                                <div className="blog-content-body">
                                    <div className="post-meta">
                                        <span className="category">Food</span>
                                        <span className="mr-2">March 15, 2018 </span>
                                    </div>
                                    <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"  alt=""/>
                                <div className="blog-content-body">
                                    <div className="post-meta">
                                        <span className="category">Travel</span>
                                        <span className="mr-2">March 15, 2018 </span>
                                    </div>
                                    <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <nav aria-label="Page navigation" className="text-center">
                                <ul className="pagination">
                                    <li className="page-item  active"><a className="page-link" href="#navbarMenu">Prev</a></li>
                                    <li className="page-item"><a className="page-link" href="#navbarMenu">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#navbarMenu">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#navbarMenu">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#navbarMenu">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
                {/* END main-content */}
                <div className="col-md-12 col-lg-4 sidebar">
                    <div className="sidebar-box search-form-wrap">
                        <form action="" className="search-form">
                            <div className="form-group ">
                                <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
                            </div>
                        </form>
                    </div>
                    {/* END sidebar-box. LEARN ABOUT OUR MISSION!!!
                    <div className="sidebar-box">
                        <div className="bio text-center">
                            <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Image Placeholder" className="img-fluid" />
                            <div className="bio-body">
                                <h2>Learn about our mission!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p><a href="" className="btn btn-primary btn-sm">More...</a></p>
                                <p className="social">
                                    <a href="" className="p-2"><span className="fa fa-facebook" /></a>
                                    <a href="" className="p-2"><span className="fa fa-twitter" /></a>
                                    <a href="" className="p-2"><span className="fa fa-instagram" /></a>
                                    <a href="" className="p-2"><span className="fa fa-youtube-play" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                     END sidebar-box */}
                    {/* END sidebar-box */}
                    <div className="sidebar-box">
                        <h3 className="heading">Categories</h3>
                        <ul className="categories">
                            <li><a href="#navbarMenu">Psicology <span>(12)</span></a></li>
                            <li><a href="#navbarMenu">Health <span>(22)</span></a></li>
                            <li><a href="#navbarMenu">Wealth <span>(37)</span></a></li>
                            <li><a href="#navbarMenu">Love <span>(42)</span></a></li>
                            <li><a href="#navbarMenu">Public speaking <span>(14)</span></a></li>
                        </ul>
                    </div>
                    {/* END sidebar-box */}
                    {/* END sidebar-box */}
                    {/* END sidebar-box */}
                </div>
                {/* END sidebar */}
            </div>
        </div>
    </section>
</div>
        );
    }
}

export default Component3;
