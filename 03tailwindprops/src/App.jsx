import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Nishanth',
    age: 26,
    address: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    }
  }

  let myArr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite + Tailwind</h1>
      <Card userName='Nishanth' myArr={myArr}/>
      <Card userName='Json' post='Staff Engg'/>
      <Card imgUrl='https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png'/>
    </>
  )
}

export default App
