import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearForm,
  handleNameChange,
  handleAddressChange,
  handleEmailChange,
  handleBirthdayChange,
  handleSalaryChange,
  handleCoverageChange,
  postProfile
} from '../modules/summaries'

import InputField from '../components/InputField'
import SelectField from '../components/SelectField'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      birthday: '',
      address: '',
      email: '',
      salary: '',
      coverage: '5000'
    }

    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  }

  clearForm() {
    this.setState({
      name: '',
      birthday: '',
      address: '',
      email: '',
      salary: '',
      coverage: '5000'
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const summaryData = {
      name: this.state.name,
      birthday: this.state.birthday,
      address: this.state.address,
      email: this.state.email,
      salary: this.state.salary,
      coverage: this.state.coverage
    }
    this.props.postProfile(summaryData)

    this.clearForm(event)
  }

  render(){
    return(
      <div className="summary-form">
        <h4>Fill in your information below:</h4>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            label='Full Name'
            type='text'
            name='name'
            content={this.state.name}
            handleChange={this.handleChange}
          />
          <InputField
            label='Date of Birth'
            type='date'
            name='birthday'
            content={this.state.birthday}
            handleChange={this.handleChange}
          />
          <InputField
            label='Address'
            type='text'
            name='address'
            content={this.state.address}
            handleChange={this.handleChange}
          />
          <InputField
            label='Email'
            type='email'
            name='email'
            content={this.state.email}
            handleChange={this.handleChange}
          />
          <InputField
            label='Salary'
            type='text'
            name='salary'
            content={this.state.salary}
            handleChange={this.handleChange}
          />
          <SelectField
            label='Coverage Amount'
            name='coverage'
            content={this.state.coverage}
            handleChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postProfile: (profile) => dispatch(postProfile(profile)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ProfileFormContainer)
