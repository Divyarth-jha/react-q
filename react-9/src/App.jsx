import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const [num,setNum] = useState(0)
  
  useEffect(() => {

 console.log('useeffect is running......'); 
},[])


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>click</button>
    </div>
  )
}

export default App



// nots on fetch 

// Fetch always uses fetch(url, options)

// GET (default)******

// const response = await fetch("https://api.example.com/users");
// const data = await response.json();

// POST**********

// const response = await fetch("https://api.example.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Divyarth",
//   }),
// });

// PUT***********
// const response = await fetch("https://api.example.com/users/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "New Name",
//   }),
// });


// DELETE********

// const response = await fetch("https://api.example.com/users/1", {
//   method: "DELETE",
// });


// Axios is different

// Axios provides helper methods for each HTTP request:

// axios.get(url);
// axios.post(url, data);
// axios.put(url, data);
// axios.delete(url);
// axios.patch(url, data);

// Interview Tip
// Fetch API: Uses a single fetch() function. The HTTP method is specified with the method option (GET, POST, PUT, DELETE, etc.).
// Axios: Provides convenient methods like get(), post(), put(), delete(), making the code shorter and easier to read.

// This is one of the key differences between Fetch and Axios that is commonly asked in React interviews.