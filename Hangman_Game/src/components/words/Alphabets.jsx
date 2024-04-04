import React, { useState } from 'react'
import './alpha.css'

let Data=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function Alphabets({handleFunc2}) {
    let[data,setData]=useState(Data)
    let[val,setValue]=useState([])
    
   
  return (

   <>
   <div className="deshes-con">
  {
    val.map((v)=>{
      return <div className="deshes">{v}</div>
    })
  }
   </div>
   <button onClick={handleFunc2(val)}>check</button>
   <div className='alpha-con'>
     {
        data.map((val)=>{
         return <div className="alpha-box" onClick={(e)=>{setValue((pre)=>[...pre,val])}}>{val}</div>
        })
     }
    </div>
   </>
  )
}

export default Alphabets
