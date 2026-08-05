import React, { useEffect, useState } from 'react'
import axios from'axios'

const App = () => {
 const [index , setIndex] = useState(1)
  const [userData, setUseData] = useState([])

  useEffect(() => {
  getData()  
  }, [index])
  

  const getData  = async ()=>{
   const responce  = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

   setUseData(responce.data)
   console.log(responce.data);
   
  }

   let printUserData = <h3 className='text-gray-500'>No User Available</h3>

   if(userData.length>0){
    printUserData= userData.map(function(elem ,idx){
      return (
       <div >
         <a href={elem.url} target='_blank'>
          <div key={idx} className='h-40 w-44 bg-white rounded '>
          <img src={elem.download_url} alt="" className='h-40 w-full  rounded object-cover' />
        </div>
        <h2>{elem.author}</h2>
        </a>
       </div>
      )
    })
   }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white '>
        <div className='flex flex-wrap gap-4 '>
          {printUserData}
        </div>

        <div className='flex justify-center gap-5 items-center p-4'>
          <button 
          style={{opacity: index == 1 ? 0.5: 1}}
           onClick={()=>{
           if(index >1){
            setIndex(index-1)
           }
          }}
           className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
          <h4> Page {index}</h4>
          <button 
          onClick={()=>{
            setIndex(index+1)
          }}
           className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
        </div>
    </div>
  )
}

export default App