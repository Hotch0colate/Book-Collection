import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './components/Mybutton'
import MyProfile from './components/MyProfile'
import Quotes from './components/Quotes'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Pongpayom Monplub')
  const [Iftrue, setIfTrue] = useState(true);

  const user = {
    firstName: "John",
    lastName: "Doe",
    imgPic:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handleInCreaseClick(){
    setCount(count+1)
  }

  function handleDecreaseClick(){
    setCount(count-1)
  }

  return (
    <>
      <div className="App">
        <Quotes />
        </div>
    </>
  )
}

export default App
