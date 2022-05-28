import React from 'react'

const Counter = () => {
  
    const [count,setCount]= React.useState(10);

    // React.useState(()=>{
    //     const id=setInterval(()=>{
    //         setCount((prev)=>{
    //             if(prev===0){
    //                 clearInterval(id)
    //                 return prev
    //             }
    //             return prev-1;

    //         })
    //     },1000);
    // },[])

    // One More Method

    React.useEffect(()=>{
        return ()=>{
            console.log("cleaning up any set interval")
        };
    },[]);

    // useEffect has an empty,dependency
    // it will get called when the componet get umounted
    // if it has a dependency ,'count'
    // it will get called everytime before count gets updated
    // out before the useEffect count gets updated 

  return (
    <>
        <h1>Counter:{count}</h1>
    </>
  )
}

export default Counter