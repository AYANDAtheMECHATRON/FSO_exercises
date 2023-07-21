import {useState} from 'react'

let positiveAvg = 0;
let average = 0;
let total = 0;

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGood =()=>{
    const updatedGood = good+1
   setGood(updatedGood)
   total =updatedGood+bad + neutral
   positiveAvg = (updatedGood/total)
   average = ((updatedGood-bad)/total)
 
   
  }

  const handleNeutral =() =>{
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    total =(updatedNeutral + good + bad)
    positiveAvg = (good/total)

  
  }
  const handleBad =()=>{
    const updatedBad = bad +1
    setBad(updatedBad)
    total= updatedBad+good + neutral
    positiveAvg = (good/total)
    average = (good-updatedBad)/total
  }
  const stats =[good, neutral,bad]

  return(
  <div>
    <div>
    <Button handle={handleGood} text='good'/>
    <Button handle={handleNeutral} text='neutral'/>
    <Button handle={handleBad} text='bad'/>
    </div>
    <h3>statistics</h3>  
    <Statistics  value= {stats}/>

 </div>
  )
}

const Button = ({handle, text})=>{
  return(
    <button onClick={handle}>{text}</button>
  )
}


const Statistics = ({value}) =>{

  return(
    <div>
      <StatisticLine text ={'good'} value ={value[0]}/>
      <StatisticLine text ={'neutral'} value ={value[1]}/>
      <StatisticLine text ={'bad'} value ={value[3]}/>
      <StatisticLine text ={"all"} value ={total}/>
      <StatisticLine text ={'average'} value ={average}/>
      <StatisticLine text ={'positive'} value ={positiveAvg*100}/>
    </div>
  
  )
}
const StatisticLine =({text,value})=>{
  return(
    <div>
    <p>{text} {value}</p>
  </div>
  )
}

export default App;
