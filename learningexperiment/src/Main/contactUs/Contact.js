import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
        <div>
                 <section className="site-section">
                  <div className="container">
                  <h6>Estamos disponiveis para qualquer duvida!</h6>
                    <div className="row">
                      <div className="col-md-12 col-lg-8 main-content">
                        <form action="#" method="post">
                          <div className="row">
                            <div className="col-md-4 form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" id="name" className="form-control " />
                            </div>
                            <div className="col-md-4 form-group">
                              <label htmlFor="phone">Phone</label>
                              <input type="text" id="phone" className="form-control " />
                            </div>
                            <div className="col-md-4 form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" className="form-control " />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-group">
                              <label htmlFor="message">Write Message</label>
                              <textarea name="message" id="message" className="form-control " cols={30} rows={8} defaultValue={""} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 form-group">
                            <p></p>
                              <input type="submit" value="Send Message" className="btn btn-primary" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-12 col-lg-4 main-content sidebar">
                      <p></p>
                                    <div className="sidebar-box">
                                    <p></p>
                                      <div className="bio text-center">
                                      <p></p>
                                        <img src="https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-1/p200x200/44719560_846909192365556_7671566190640103424_n.jpg?_nc_cat=111&_nc_ht=scontent.fopo2-1.fna&oh=19beb2f6c0e4e4e257da5e487466883b&oe=5C40B0BF"
                                         alt="Placeholder" className="img-fluid" />
                                        <div className="bio-body">
                                          <h2>Information!</h2>
                                          <p>number, email, localization ...</p>
                                        </div>
                                      </div>
                                    </div>
                      </div>


                    </div>


                    </div></section>
      </div>
        );
    }
}

export default Contact;