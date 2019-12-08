const initialState = {
  allProfiles: [],
  isFetching: false
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
  case GET_PROFILE_REQUEST:
    return {...state, isFetching: true}
  case GET_PROFILE_REQUEST_SUCCESS:
    return {...state,
      allProfiles: action.profiles,
      isFetching: false
    }
  case GET_PROFILE_REQUEST_FAILURE:
    return {...state, isFetching: false}
  default:
    return state
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

export {
  getProfile,
  profiles
}
