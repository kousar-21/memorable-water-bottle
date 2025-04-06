

import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'

const bottlePromise = fetch('./bottle.json')
.then(res => res.json())

function App() {
  // const bottles = [
  //   {id:1, name:"pink bottle data", price:250, color:"pink"},
  //   {id:2, name:"pink bottle data", price:250, color:"pink"},
  //   {id:3, name:"pink bottle data", price:250, color:"pink"},
  //   {id:4, name:"pink bottle data", price:250, color:"pink"}
  // ]



  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottle Are Loading</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
