import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Main from './main'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'
import history from './history'

import 'typeface-ibm-plex-sans'

const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(<Main store={store} history={history} />, document.getElementById('root'))
serviceWorker.unregister()
