import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import { Provider } from 'react-redux'

import ShowProfileContainer from '../containers/ShowProfileContainer'
import ProfileFormContainer from '../containers/ProfileFormContainer'

const App = (props) => {
  <Provider store={props.store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile/:id" component={ShowProfileContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
}

export default App
