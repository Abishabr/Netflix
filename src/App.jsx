import React from 'react'
import requests from './utils/requests'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className='app'>
      <Home fetchUrl={requests.fetchNetflixOriginals}/>

    </div>
  )
}

export default App