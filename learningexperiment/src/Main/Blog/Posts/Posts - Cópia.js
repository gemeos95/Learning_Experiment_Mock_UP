import React, { Component } from 'react';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            isLoading:false,
            data:[]
        };
    }

    componentDidMount(){
  this.setState({isLoading:true });
  console.log('dimount');
      fetch('http://localhost:3000/api/BlogPost')
    .then(response=> response.json())
    .then(data => {
      this.setState({ data: data})
      this.setState({ isLoading: false})
       console.log(data)
      })
    }

    render() {
        console.log('render')
        const {isLoading, data} = this.state

        if (isLoading){
            return(<div>Loading...</div>)
        }
        


        return (
                                    <div className="col-md-6 col-lg-4">
                                        <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                            <img src="http://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2013/Oct/topimg_22641_jet.jpg" alt=" placeholder" />
                                            <div className="blog-content-body">
                                                <div className="post-meta">
                                                    <span className="category">Food</span>
                                                    <span className="mr-2">March 15, 2018 </span> •
                                                    <span className="ml-2"><span className="fa fa-comments" /> Marques</span>
                                                </div>
                                                <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                                            </div>
                                        </a>
                                    </div> 
            );
    }
}

export default Posts;
