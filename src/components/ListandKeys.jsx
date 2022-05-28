import React from 'react'
import {v4 as uuid} from "uuid"
import ListItem from './ListItem'


const ListandKeys = () => {
    const [query,setQuery]=React.useState("")
    const [list,setList]=React.useState([])

    const handleClick=()=>{
        const payload={
            title:query,
            status:false,
            id:uuid()

        }
        setList([...list,payload])
    }

    const handleDelete=(id)=>{
        let updatedList=list.filter((elem)=>elem.id!==id)
        setList(updatedList)
    }


  return (
    <div>
        <h1>List of Item</h1>
        <input type="text" placeholder='add something'
        value={query} 
        onChange={(e)=>{
            setQuery(e.target.value)
        }}
        />
        <button onClick={handleClick}>ADD</button>

        <div>

            
            {list.map((elem)=>{
                return <ListItem key ={elem.id}  handleDelete={handleDelete}  {...elem}/>
            })}
            
                {/* {list.map((elem)=>(
                    <div style={{border:"1px gray solid",padding:"10px",margin:"auto"}} >
                        {elem.title}
                        <button onClick={handleDelete(key)}>Delete</button>
                    </div>

                ))} */}
            
        </div>
    </div>
  )
}

export default ListandKeys