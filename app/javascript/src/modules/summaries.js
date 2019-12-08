const initialState = {
  profileSummary: [],
  name: '',
  birthday: null,
  address: '',
  email: '',
  salary: null,
  coverage: null,
  isFetching: false
}

const summaries = (state = initialState, action) => {
  switch(action.type) {
    case POST_PROFILE_REQUEST:
      return {...state, isFetching: true }
    case POST_PROFILE_REQUEST_SUCCESS:
      const newProfile = state.profileSummary.concat(action.profile)
      return {...state,
        profileSummary: newProfile,
        isFetching: false
      }
    case POST_PROFILE_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case CLEAR_FORM:
      return {...state,
        name: '',
        birthday: null,
        address: '',
        email: '',
        salary: null,
        coverage: null
      }
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    case HANDLE_BIRTHDAY_CHANGE:
      return {...state, birthday: action.newBirthday}
    case HANDLE_ADDRESS_CHANGE:
      return {...state, address: action.newAddress}
    case HANDLE_EMAIL_CHANGE:
      return {...state, email: action.newEmail}
    case HANDLE_SALARY_CHANGE:
      return {...state, salary: action.newSalary}
    case HANDLE_COVERAGE_CHANGE:
      return {...state, coverage: action.newCoverage}
    case GET_PROFILE_REQUEST:
      return {...state, isFetching: true}
    case GET_PROFILE_REQUEST_SUCCESS:
      return {...state,
        profileSummary: action.summaries,
        isFetching: false
      }
    case GET_PROFILE_REQUEST_FAILURE:
      return {...state, isFetching: false}
    default:
      return state
  }
}

const POST_PROFILE_REQUEST = 'POST_PROFILE_REQUEST'

const postProfileRequest = () => {
  return {
    type: POST_PROFILE_REQUEST
  }
}

const POST_PROFILE_REQUEST_SUCCESS = 'POST_PROFILE_REQUEST_SUCCESS'

const postProfileRequestSuccess = profile => {
  return {
    type: POST_PROFILE_REQUEST_SUCCESS,
    profile
  }
}

const POST_PROFILE_REQUEST_SUCCESS = 'POST_PROFILE_REQUEST_FAILURE'

const postProfileRequestFailure = () => {
  return {
    type: POST_PROFILE_REQUEST_FAILURE
  }
}

const CLEAR_FORM = 'CLEAR_FORM'

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const HANDLE_BIRTHDAY_CHANGE = 'HANDLE_BIRTHDAY_CHANGE'

const handleBirthdayChange = event => {
  const newBirthday = event.target.value
  return {
    type: HANDLE_BIRTHDAY_CHANGE,
    newBirthday
  }
}

const HANDLE_ADDRESS_CHANGE = 'HANDLE_ADDRESS_CHANGE'

const handleAddressChange = event => {
  const newAddress = event.target.value
  return {
    type: HANDLE_ADDRESS_CHANGE,
    newAddress
  }
}

const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE'

const handleEmailChange = event => {
  const newEmail = event.target.value
  return {
    type: HANDLE_EMAIL_CHANGE,
    newEmail
  }
}

const HANDLE_SALARY_CHANGE = 'HANDLE_SALARY_CHANGE'

const handleSalaryChange = event => {
  const newSalary = event.target.value
  return {
    type: HANDLE_SALARY_CHANGE,
    newSalary
  }
}

const HANDLE_COVERAGE_CHANGE = 'HANDLE_COVERAGE_CHANGE'

const handleCoverageChange = event => {
  const newCoverage = event.target.value
  return {
    type: HANDLE_COVERAGE_CHANGE,
    newCoverage
  }
}

const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST'

const getProfileRequest = () => {
  return {
    type: GET_PROFILE_REQUEST
  }
}

const GET_PROFILE_REQUEST_SUCCESS = 'GET_PROFILE_REQUEST_SUCCESS'

const getProfileRequestSuccess = summaries => {
  return {
    type: GET_PROFILE_REQUEST_SUCCESS,
    summaries
  }
}

const GET_PROFILE_REQUEST_FAILURE = 'GET_PROFILE_REQUEST_FAILURE'

const getProfileRequestFailure = () => {
  return {
    type: GET_PROFILE_REQUEST_FAILURE
  }
}

const getProfile = () => {
  return (dispatch) => {
    dispatch(getProfileRequest())

    return fetch('/api/v1/profiles.json')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        dispatch(getProfileRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(profile => {
      if(!profile.error){
        dispatch(getProfileRequestSuccess(profile))
      }
    })
  }
}

const postProfile = summaryData => {
  return (dispatch) => {
    dispatch(postProfileRequest())

    return fetch(`/api/v1/profiles.json`,
      {
        method: 'POST',
        body: JSON.stringify(summaryData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(postProfileRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Somethign went wrong.' }
      }
    })
    .then(profile => {
      if(!profile.error){
        dispatch(postProfileRequestSuccess(profile))
      }
    })
  }
}

export {
  summaries,
  postProfile,
  getProfile,
  clearForm,
  handleNameChange,
  handleEmailChange,
  handleAddressChange,
  handleBirthdayChange,
  handleSalaryChange,
  handleCoverageChange
}
