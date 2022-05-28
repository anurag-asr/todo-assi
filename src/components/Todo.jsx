import React from 'react'
import { useState } from 'react';

const Todo = () => {

const [title,setTitle]=React.useState("")
const [data,setData]=React.useState([]);
const [isloading,setisLoading]=React.useState(true)
const [isError,setIsError]=React.useState(false)
const [page,setPage]=React.useState(1)

React.useEffect(()=>{
    getTodo(page)
},[page])

const getTodo=(page=1)=>{
    setisLoading(true)
    
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`)
   .then((res)=>res.json())
   .then((res)=>{
       // console.log(res)
   setData(res)
   })
   .catch((err)=>{
       setIsError(true)
   })
   .finally(()=>{
       setisLoading(false)
   })
  
}

const addTodos =(title)=>{
    const payload={
        title,
        status:false,
    }
 
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((res)=>{
    return getTodo()
    })
    .catch((err)=>{
        setIsError(false)
    })
   
}

return isloading ? (<div>...loading </div>)
:isError ? (<div>something went wring</div>)
: (
    <div>
        <div>
            <input text="name" placeholder='add somethings'
            value={title}
            onChange={(e)=>setTitle(e.target.value)} />
            <button onClick={()=>addTodos(title)}>Add</button>
        </div>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{`${item.title}-${item.status}`}</li>
            ))}
        </ul>
       
       <h3>page:{page}</h3>
       <button disabled={page==1} onClick={()=>setPage(page-1)}>prev</button>
       <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
)

}

export default Todo





