// import React from 'react'

// const App = () => {
 
//   async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    
//      const data = await response.json()
//      console.log(data);
     
//   }
   
//   return (
//     <div>
//       <button onClick={getData} className=' m-2 p-1 text-2xl border'>Gey Data</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import axios from 'axios'

const App = () => {
 
  const getData = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(responce.data);
    
    
  }



  return (
    <div>
      <button onClick={getData} className=' m-2 p-1 text-2xl border'>Get Data</button>
    </div>
  )
}

export default App