import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import'./components/Item'
import Item from './components/Item'
 import ItemDate from './components/ItemDate'
//  import Card from './components/card'
function App() {

  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemyear:"1998",

    },
    {
      itemName:"Nirma22",
      itemDate:"201",
      itemMonth:"june22",
      itemyear:"199118",

    },
    {
      itemName:"Nirma44",
      itemDate:"2022",
      itemMonth:"june22",
      itemyear:"199855",

    },

  ]
  // const [count, setCount] = useState(0)

  return (

    <div>
     
      <Item name={response[0].itemName}></Item>
      hello jii this is the implementation of porps.childern in react.
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name="surfexel"></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>
     

      <Item name="555"></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
     
      
      <div className="App">Hello everyone</div>
    
    </div> 
   

  )
}
 
export default App
