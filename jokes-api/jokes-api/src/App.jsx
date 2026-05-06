import { useState,useEffect} from 'react'
import './index.css'
import './Jokes.jsx'
import Jokes from './Jokes.jsx'

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const  fetchData=async ()=>{
      const url = 'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1';
      const options = {method: 'GET', headers: {accept: 'application/json'}};
  
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.data.data)
        setData(data.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  },[])

  return (
    <>
      <div>
        {data.map((joke,index)=>{
          return <Jokes key={joke.id} data={joke} index={index}/>
        })}
      </div>
    </>
  )
}

export default App
