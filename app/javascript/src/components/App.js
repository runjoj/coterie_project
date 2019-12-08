import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom"

import ProfileContainer from '../containers/ProfileContainer'
import ShowProfileContainer from '../containers/ShowProfileContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/profiles" component={ProfileContainer} />
          <Route exact path="/profiles/:id" component={ShowProfileContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
