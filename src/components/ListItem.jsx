
import React from 'react'

const ListItem = ({title,status,id,handleDelete}) => {

    const handleDeletefn=()=>{
        handleDelete(id)
    }
  return (
    <div style={{border:"1px gray solid",padding:"10px"}}>
        <h1>{title}</h1>
        <button onClick={handleDeletefn}>Delete</button>
   
    </div>
  )
}

export default ListItem
