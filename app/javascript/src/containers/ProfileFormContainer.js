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
  } from '..modules/summaries'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const summaryData = {
      name: this.props.name,
      birthday: this.props.birthday,
      address: this.props.address,
      email: this.props.email,
      salary: this.props.salary,
      coverage: this.props.coverage
    }

    this.props.postProfile(summaryData)

    this.props.clearForm()
  }

  render(){
    return(
      <div>
        <h1>Fill in your details:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            key='newName'
            label='Full Name'
            type='text'
            name='newName'
            handleChange={this.props.handleNameChange}
          />
          <InputField
            key='newbirthday'
            label='Date of Birth'
            type='date'
            name='newBirthday'
            handleChange={this.props.handleBirthdayChange}
          />
          <InputField
            key='newAddress'
            label='Address'
            type='text'
            name='newAddress'
            handleChange={this.props.handleAddressChange}
          />
          <InputField
            key='newEmail'
            label='Email'
            type='text'
            name='newEmail'
            handleChange={this.props.handleEmailChange}
          />
          <InputField
            key='newSalary'
            label='Salary'
            type='text'
            name='newSalary'
            handleChange={this.props.handleSalaryChange}
          />
          <InputField
            key='newCoverage'
            label='Coverage Amount'
            type='text'
            handleChange={this.props.handleCoverageChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.summaries.name,
    birthday: state.summaries.birthday,
    address: state.summaries.address,
    email: state.summaries.email,
    salary: state.summaries.salary,
    coverage: state.summaries.coverage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postProfile: (profile) => dispatch(postProfile(profile)),
    clearForm: () => dispatch(clearForm()),
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    handleBirthdayChange: (event) => dispatch(handleBirthdayChange(event)),
    handleAddressChange: (event) => dispatch(handleAddressChange(event)),
    handleEmailChange: (event) => dispatch(handleEmailChange(event)),
    handleSalaryChange: (event) => dispatch(handleSalaryChange(event)),
    handleCoverageChange: (event) => dispatch(handleCoverageChange(event))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFormContainer)
