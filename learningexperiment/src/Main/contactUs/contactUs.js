import React, { Component } from 'react';
import GuestBook from './GuestBook.js';
import Contact from './Contact.js';


class contactUs extends Component {
    render() {
        return (
        <div>
        <Contact/>     
       <GuestBook/>
 
      </div>
        );
    }
}

export default contactUs;