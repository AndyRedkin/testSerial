import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

import Root from './components/layout/Root'
import Header from './components/layout/Header'
import IndexPage from './pages/index'
import normalize from './styles/normalize'
import globals from './styles/globals'
import SerialListPage from './pages/serialList'
import SerialInfoPage from './pages/serialInfo'

const Routes: React.SFC = () => (
  <Root>
    <Global styles={normalize} />
    <Global styles={globals} />
    <Header title="Test serial platform" />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/serial_list" component={SerialListPage} />
      <Route path="/serial/:id" component={SerialInfoPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Root>
)

export default Routes
