import React, { Component } from 'react';



class StructPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            isLoading:false,
            data:[],
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
        
        var Posts = [];
        for(var i= 0; i < data.length; i++){
            Posts.push(<div  key={i} className="col-md-6 col-lg-4">
                         <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                         <img src={data[i].photo} alt=" placeholder" />
                            <div className="blog-content-body">
                                 <div className="post-meta">
                                        <span className="category">{data[i].categoria}</span>
                                         <span className="mr-2">{data[i].data} </span> •
                                         <span className="ml-2"><span className="fa fa-comments" /> {data[i].autor}</span>
                                  </div>
                                   <h2>{data[i].titulo}</h2>
                              </div>
                         </a>
                     </div> )
          }



        return (
          
            <div className="site-section container">
                        <div className="row blog-entries">
                            <div className="col-md-12 col-lg-12 main-content">
                                <div className="row">
                                    {Posts}

                                </div>
                                    <div className="col-md-12 col-lg-12 text-center ">
                                        <nav aria-label="Page navigation" className="text-center">
                                            <ul className="pagination" >
                                                <li className="page-item  active"><a className="page-link" href="#navbarMenu">Prev</a></li>
                                                <li className="page-item"><a className="page-link" href="#navbarMenu">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#navbarMenu">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#navbarMenu">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#navbarMenu">Next</a></li>
                                            </ul>
                                        </nav>
                                    <button className="btn btn-primary">Search</button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        
        );
    }
}

export default StructPosts;