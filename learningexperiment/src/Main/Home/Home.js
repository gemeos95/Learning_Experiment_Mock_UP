import React, { Component } from 'react';
import Component2 from './Component2.js';
import Component3 from './Component3.js';





class Home extends Component {

  componentDidMount(){
    console.log('dimount');
        fetch('http://localhost:3000/')
      .then(response=> response.json())
      .then(data => {
         console.log(data)
        })
      }


    render() {
        return (
            <div>

           {/*<div className="owl-carousel owl-theme home-slider">
                  <div>
                    <a href="blog-single.html" className="a-block d-flex align-items-center height-lg" style={{backgroundImage: 'url("https://thecreativemarketingagency.co.uk/wp-content/uploads/2015/12/call-to-action-banner-01.jpg")'}}>
                      <div className="text half-to-full">
                        <div className="post-meta">
                          <span className="category">Lifestyle</span>
                          <span className="mr-2">March 15, 2018 </span> •
                          <span className="ml-2"><span className="fa fa-comments" /> 3</span>
                        </div>
                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                      </div>
                    </a>
                  </div>
                  </div>*/}
                
                <Component2/>
                <Component3/>

            </div>

        )
    }
}

export default Home;