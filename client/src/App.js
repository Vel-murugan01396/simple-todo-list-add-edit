
import React,{useEffect,useState} from "react"

function App() {
  const [data,setData]=useState([])
  const [name,setName]=useState('')

useEffect(()=>{
FethData()
},[])
const FethData=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users")
  if(response.ok){
    const result=await response.json()
    console.log("result",result)
    setData(result)
  }
}

const handleAdd=()=>{
  if(name!==""&&name!==Number){
    const newvalue={id:data.length+1,name:name}
    setData([...data,newvalue])
    setName("")
  }
}

const hanleUpdate=(id,name)=>{
const updatefun=data.map((item)=>item.id===id?{...item,name:name}:item)
setData(updatefun);
}
  return (<>
  <h1>TOdo list</h1>
  <input placeholder="process" onChange={(e)=>{setName(e.target.value)}}></input>
  <button onClick={handleAdd}>Add</button>
  <ul>{data.map((item)=>
    <li key={item.id}>
      <input value={item.name} onChange={(e)=>hanleUpdate(item.id,e.target.value)}></input>
      </li>)}
  </ul>
  
  </>
    
  );
}

export default App;
