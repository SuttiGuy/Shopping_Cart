import React from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Page />
    </Provider>
  )
}

export default App;