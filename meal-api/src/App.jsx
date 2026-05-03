
import './App.css'
import { useState,useEffect } from 'react'
import Recipe from './components/Recipe'


function App() {
  const [isLoading,setIsLoading]= useState(true)
  const [data,setData]= useState([])

 

  useEffect(()=>{
    const getApiData=async ()=> {
      const url = 'https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice';
      const options = {method: 'GET', headers: {accept: 'application/json'}};
        
      try{  
        console.log(isLoading)
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.data.data);
        setData(data.data.data)
      } catch (error) {
        console.log(error)
      }
      finally{
        setIsLoading(false)
      }
    }
    getApiData()
  },[])

  

  return (
    <div>
      {data.map((r,index)=>{
        return <Recipe key={r.idMeal} data={r} isLoading={isLoading} index={index}/>
      })}
    </div>
  )
}

export default App
