import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    return (
      <div>welcome to class {this.props.name}{this.props.id}</div>
    )
  }
}

export default Greet
