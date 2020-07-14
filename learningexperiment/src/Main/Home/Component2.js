import React, { Component } from 'react';



class Component2 extends Component {
      constructor(props) {
        super(props);
        this.state = {
            message: null,
            data:[],
        };
    }
     componentDidMount(){

console.log('componentDidMount') 
 this.setState({isLoading:true });
  
      fetch('https://sleepy-spire-54495.herokuapp.com/')
    .then(response=> response.json())
    .then(data => {
      this.setState({ data: data, isLoading: false})
      console.log(data);
      })
    }
    render() {
        return (
            <div>
                <section className="site-section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url("https://metrocebu.news/wp-content/uploads/2018/03/Employers-Forum-16-1296x652.png")'}}>
                                    <div className="text pad">
                                        <div className="post-meta ">
                                            <span className="category ">Forum</span>
                                        </div>
                                        <h3> Engage in our Forum!</h3>
                                        <p>A place where we can share via web </p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url("http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/e7caffcc-6ff9-102a-ac6d-e4aebca50425/Image/43f3bd0d7294391869eaeb95348e0889/1_8_10_innovative_events_2015.jpg")'}}>
                                    <div className="text pad">
                                        <div className="post-meta">
                                            <span className="category ">Events</span>
                                        </div>
                                        <h3>Join us on our events</h3>
                                        <p>Our group is all about sharing knowledge and experiences between us!</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                                   style={{backgroundImage: 'url("http://www.indianfolk.com/wp-content/uploads/2017/09/KnowledgeHoarding.jpg")'}}>
                                    <div className="text pad">
                                        <div className="post-meta ">
                                            <span className="category ">Recomended List</span>
                                        </div>
                                        <h3>Give it a try!</h3>
                                        <p>Check the best content that our comunity recomends!</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Component2;
