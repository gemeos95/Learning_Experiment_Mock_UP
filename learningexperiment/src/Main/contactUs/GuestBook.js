import React, { Component } from 'react';

class GuestBook extends Component {
	constructor(props) {
    super(props); 
    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
      data:[],
      isLoading:false
    };
    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
   }

  componentDidMount(){
  this.setState({isLoading:true });
  console.log('dimount');
  console.log()
      fetch('http://localhost:3000/api/signatures')
    .then(response=> response.json())
    .then(data => {
      this.setState({ data: data})
      this.setState({ isLoading: false})
      })
}

  handleSignatureOfGuest(event) {//Listen for an event on the state of both the name and message input.
    this.setState({ SignatureOfGuest: event.target.value });
  }

   handleMessageofGuest(event) {
      this.setState({ MessageofGuest: event.target.value });
    }

    addToGuestBook = (event) => { //Create a function that changes the name and message to the value of the target input.
     const {
      SignatureOfGuest,
      MessageofGuest,
      isLoading
    } = this.state
      this.setState({ isLoading: true });
//and fetches the informatiion the the backend!
fetch('http://localhost:3000/api/signatures', {
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ //parameters that the server in this route will receive as request!
        guestSignature: SignatureOfGuest, 
        message: MessageofGuest,
      })
    }).then(res => res.json())
      .then(json => {
        if (json.success) { //if there is a sucess message back! 
              this.setState({ isLoading: false });
              console.log('gravar informação')
        } else{
          console.log('blank spaces')
          this.setState({ isLoading: false });
      }
      });
  }

    render() {
const {
      data,
      isLoading
    } = this.state;

    console.log('render')
    console.log(data, 'render');

    var mensages = [];
          for(var i= 0; i < data.length; i++){
            mensages.push(<div key={i}>
        <h6>{data[i].guestSignature}</h6>
        <ul>
        <li>{data[i].message}</li>
        </ul>
        </div>)
          }

//usar map pesquisar
//criar uma vaiável do map do state, dps criar o html e returnar apenas a variável correta
  if (isLoading){
    return(<div> Loading...</div>)
  } 

  return(<div>
		<input
           onChange={this.handleSignatureOfGuest}
           name="SignatureOfGuest"
           className="NameinputForm"
           value={this.state.SignatureOfGuest}
           placeholder="Enter your name"
            />
  		<textarea
              onChange={this.handleMessageofGuest}
              name="MessageofGuest"
              className="MessageinputForm"
              value={this.state.MessageofGuest}
              placeholder="Type a message"
               />
		<button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
        </button>
        <div>
        {mensages}
      </div>
            </div>
        );
    }
}

export default GuestBook;