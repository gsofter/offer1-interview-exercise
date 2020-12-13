import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createB, createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Router from './router'
import Offer1Theme from './config/theme'
// middlewards
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]

const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)))

ReactDOM.render(
  <Provider store={store}>
    <Offer1Theme>
      <Router history={history} />
    </Offer1Theme>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
