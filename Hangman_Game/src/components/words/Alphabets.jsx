import React, { useState } from 'react'
import './alpha.css'

let Data=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function Alphabets({word,guessedWordFunc,status}) {
    let[data,setData]=useState(Data)
    let[val,setValue]=useState([])
    



    
  return (

   <>
   <div className="deshes-con">
  {
    word.split('').map((v,i)=>{
      return <div className="deshes" 
      style={{visibility:val.includes(v)?'visible':'hidden'}} 
      key={i}>{v}</div>
    })
  }
   </div>
   
   <div className='alpha-con'>

     {status?
        data.map((val,i)=>{
         return <button 
          className="alpha-box" 
         onClick={(e)=>{setValue((pre)=>[...pre,val]),guessedWordFunc(val)}}
         key={i}>{val}</button>
        })
     :'You lost the game'}
    </div>
   </>
  )
}

export default Alphabets
