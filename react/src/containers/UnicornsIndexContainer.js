import React, { Component } from 'react';
import UnicornElement from '../components/UnicornElement';
import UnicornEntryContainer from '../containers/UnicornEntryContainer';

class UnicornsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: []
    }

    this.addNewUnicorn = this.addNewUnicorn.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/unicorns')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ unicorns: responseData.unicorns })
      })
  }


  addNewUnicorn(formPayload) {
    fetch('/api/v1/unicorns', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
      .then(response => response.json())
      .then(responseData => {
        debugger;
        this.setState({ unicorns: responseData.unicorns })
      })
  }

  render() {
    let unicorns = this.state.unicorns.map(unicorn => {
      return(
        <UnicornElement
          key={unicorn.id}
          id={unicorn.id}
          name={unicorn.name}
          description={unicorn.description}
          img={unicorn.img}
        />
      )
    })

    return(
      <div className="row main-body">
        <div className="small-8 small-centered columns">
          <h1>Dems Some Unicorns</h1>
          {unicorns}
          <UnicornEntryContainer addNewUnicorn={this.addNewUnicorn} />
        </div>
      </div>
    )
  }
}

export default UnicornsIndexContainer;
