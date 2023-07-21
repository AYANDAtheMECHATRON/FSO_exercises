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
  console.log('tot', total)
  return(
  <div>
    <div>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}>neutral</button>
    <button onClick={handleBad}>bad</button>
    </div>
    <h3>statistics</h3>
    <Statistics text = 'good' value = {good}/>
    <Statistics text ='neutral' value = {neutral}/>
    <Statistics text ='bad' value = {bad}/>
    <Statistics text ='all' value = {total}/>
    <Statistics text ='average' value = {average}/>
    <Statistics text ='positive' value = {positiveAvg*100}/>

    
 </div>
  )
}

const Statistics = ({text,value}) =>{
if(total === 0 && average === 0 && positiveAvg ===0){
   return(
    <h3>give feedback</h3>
   )
}
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

export default App;
