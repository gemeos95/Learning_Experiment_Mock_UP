import React, { Component } from 'react';


class Events extends Component {
      constructor(props) {
        super(props);
        this.state = {
            message: null,
            isLoading:false,
            data:[],
        };
    }


     componentDidMount(){

console.log('componentDidMount') 
 this.setState({isLoading:true });
  
      fetch('http://localhost:3000/api/EventsPost')
    .then(response=> response.json())
    .then(data => {
      this.setState({ data: data, isLoading: false})
      })
    }

    render() {
console.log('render')
const {data,isLoading } = this.state;
if(isLoading){
  return(<div>Is Loading...</div>)
}
console.log(data);
if(data){
        var Events = [];
        for(var i= 0; i < data.length; i++){
          console.log(data[i].photo)
        /*  var str1 = "url(";
          //var str2 = {data[i].data};
          var str3 = ")";
          var res = str1.concat(str2, str3);*/
            Events.push(<div key={i} className="post-entry-horzontal">
                              <a href="#nav">
                                <div className="image element-animate" 
                                data-animate-effect="fadeIn"
                                src = {data[i].photo}
                              style={{backgroundImage:'url("https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/44639284_520189661782988_2506828688184573952_o.jpg?_nc_cat=111&_nc_ht=scontent.fopo2-1.fna&oh=21699e3be5bac14b726e67f3a45b85ca&oe=5C85286A")'}}
                                //'url(http)'
                               // 'url('+{data[i].photo} + ')'
                               //"url(" + { data[i].photo } + ")"
                               />
                                <span className="text text1">
                                  <div className="post-meta">
                                    <span className="category">Events</span>
                                    <span className="mr-2">{} </span> • {data[i].data}
                                    <span className="ml-2"><span className="fa fa-comments" /> 3</span>
                                  </div>
                                  <h2>{data[i].titulo}</h2>
                                </span>
                              </a>
                            </div>)
          }
}

        return (
            <div>     
        <section className="site-section">
        <div className="container">
          <div className="row mb-4">
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content ">
              <div className="row">
                <div className="col-md-12">
                         {Events}
                            
                					
                  
                  
                  {/* END post */}
                  
                  {/* END post */}
                 
                  {/* END post */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active"><a className="page-link" href="#nav">Prev</a></li>
                      <li className="page-item"><a className="page-link" href="#nav">1</a></li>
                      <li className="page-item"><a className="page-link" href="#nav">2</a></li>
                      <li className="page-item"><a className="page-link" href="#nav">3</a></li>
                      <li className="page-item"><a className="page-link" href="#nav">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* END main-content */}
            <div className="col-md-12 col-lg-4 sidebar">
              {/* END sidebar-box */}
              <div className="sidebar-box">
                <div className="bio text-center">
                  <img src="https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-1/p200x200/44719560_846909192365556_7671566190640103424_n.jpg?_nc_cat=111&_nc_ht=scontent.fopo2-1.fna&oh=19beb2f6c0e4e4e257da5e487466883b&oe=5C40B0BF"
                   alt="Placeholder" className="img-fluid" />
                  <div className="bio-body">
                    <h2>What are our events?</h2>
                    <p>Our events hapen at this time in this place, give this value...</p>
                    <p><a href="#nav" className="btn btn-primary btn-sm">More...</a></p>
                  </div>
                </div>
              </div>
              {/* END sidebar-box */}  
              <div className="sidebar-box">
                <div className="bio text-center">
                  <div className="bio-body">
                    <h2>Localization</h2>
                    <p>Google maps box</p>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <div className="bio text-center">
                  <div className="bio-body">
                    <h2>Calendário??</h2>
                    
                  </div>
                </div>
              </div>

            </div>
             <p><h3>o que acham de meter aqui em baixo uma galeria dos eventos e videos dos eventos?</h3></p>
          </div>
        </div>
      </section>
            </div>
        );
    }
}

export default Events;