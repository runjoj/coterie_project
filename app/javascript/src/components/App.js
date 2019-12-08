import React from 'react'
import { Provider } from 'react-redux'

import PageContainer from '../containers/PageContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <PageContainer />
    </Provider>
  )
}

export default App
