import React from 'react'


const SimpleTodo = () => {

    const [query,setQuery]=React.useState("")
    const [tasks,setTasks]=React.useState([])
    
    const handleChange=(e)=>{
        const data=e.target.value
         console.log(data)

         setQuery(data)
    }

    const handleAdd=()=>{
        const payload={
            title:query,
            status:false
        };
        let newTask=[...tasks,payload]
        setTasks(newTask)
    }
    console.log(tasks)

  return (
    <div>
        <h1>Todo</h1>
        <input 
         placeholder='add something'
        onChange={handleChange}
         value={query}
        />
        <button onClick={handleAdd}>ADD</button>

        <div>
            {
                tasks.map((item)=>{
                    return <div>
                        {item.title}-{item.status}
                        </div>
                })
            }
        </div>
    </div>
    
  )
}

export default SimpleTodo