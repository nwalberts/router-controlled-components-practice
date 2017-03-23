import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class UnicornEntryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      unicornName: '',
      unicornDescription: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateNameChange = this.validateNameChange.bind(this);
    this.validateDescriptionChange = this.validateDescriptionChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.unicornName) &&
      this.validateDescriptionChange(this.state.unicornDescription)
    ) {
      let formPayload = {
        name: this.state.unicornName,
        description: this.state.unicornDescription
      }
      this.props.addNewUnicorn(formPayload)
      this.handleClearForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      unicornName: '',
      unicornDescription: ''
    })
  }

  handleNameChange(event) {
    this.validateNameChange(event.target.value)
    this.setState({ unicornName: event.target.value })
  }

  handleDescriptionChange(event) {
    this.validateNameChange(event.target.value)
    this.setState({ unicornDescription: event.target.value })
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { nameSet: 'Title must not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.nameSet
      this.setState({ errors: errorState })
      return true
    }
  }

  validateDescriptionChange(description) {
    if (description === '' || description === ' ') {
      let newError = { descriptionSet: 'Body must not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.descriptionSet
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="new-article-form callout">
        {errorDiv}
        <TitleField
          content={this.state.unicornName}
          label="Article Title"
          name="article-name"
          handleNameChange={this.handleNameChange}
        />
        <BodyField
          content={this.state.unicornDescription}
          label="Article Body"
          name="article-description"
          handleDescriptionChange={this.handleDescriptionChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" onClick={this.handleFormSubmit} />
        </div>
      </form>
    )
  }
}

export default UnicornEntryContainer;
