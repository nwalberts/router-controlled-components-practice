import React, { Component } from 'react';
import UnicornShow from '../components/UnicornShow';

class UnicornShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorn: {}
    }
  }

  componentDidMount() {
    let unicornId = this.props.params.id;
    fetch(`/api/v1/unicorns/${unicornId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ unicorn: responseData })
      })
  }

  render() {
    return(
      <UnicornShow {...this.state.unicorn} />
    )
  }
}

export default UnicornShowContainer;
