import { useState } from 'react'
import './App.css'
import Users from './Users/Users';

function App() {
  const [money, setMoney] = useState(0);

  const addMoney = () => {
    setMoney(money +10);
  }

  const cutMoney = () => {
    setMoney(money - 10);
  }

  return (
    <>
      <h3>Money: {money}</h3>
      <button onClick={addMoney} className='btn'>Add</button>
      <button onClick={cutMoney} className='btn'>Remove</button> 

      <Users></Users>     
    </>
  )
}

export default App
