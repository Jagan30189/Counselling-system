import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message :'Please Do Subscribe'
      }
    }

    changeMessage()
    {
     this.setState({
         message:'Thanks for subscribing !'
     })
    }

  render() {
    return (
      <div>
        <center>
            <h2> {this.state.message}</h2>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </center>
      </div>
    )
  }

  }
  
  


export default Message