import React, { Component } from 'react'

import LiftSateUpA from './LiftStateUpA'
import LiftSateUpB from './LiftStateUpB'

class LiftSateUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'oops'
    }
    this.ComponentA = React.createRef()
  }

  render() {
    return (
      <>
        <LiftSateUpA ref={this.ComponentA}></LiftSateUpA>
        <LiftSateUpB title={this.state.title}></LiftSateUpB>
      </>
    )
  }

  componentDidMount() {
    this.setState({
      title: this.ComponentA.current.state.message
    })
  }
}

export default LiftSateUp