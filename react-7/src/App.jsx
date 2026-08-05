import React from 'react'

const App = () => {

 localStorage.setItem('user','divyarth')

const users = localStorage.getItem('user')

 console.log(users)
  return (
    <div>App</div>
  )
}

export default App