import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './UserCard'

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchUsers = async ()=>{
      const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.data.data);
        setData(data.data.data)
      } catch (error) {
          console.error(error);
      }
    }
    fetchUsers()
  },[])
  return (
    <div className="app-container">
  {data.map((user, index) => {
    return (
      <UserCard
        key={user.login.uuid}
        data={user}
        index={index}
      />
    )
  })}
</div>
  )
}

export default App
