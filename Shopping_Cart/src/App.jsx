import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Home />
    </Provider>
  )
}

export default App