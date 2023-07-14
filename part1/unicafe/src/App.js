import {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] =useState(0)
  const [average, setAverage] =useState(0)
  const [positive, setPositive] = useState(0)


  const handleGood =()=>{
    const updatedGood = good+1
   setGood(updatedGood)
   console.log('good', updatedGood)
   setTotal(updatedGood+bad + neutral)
   const updatedTotal = updatedGood+bad+neutral
   const pos = (updatedGood/updatedTotal)
   setPositive(pos)
   const av = ((updatedGood-bad)/updatedTotal)
   setAverage(av)
  }

  const handleNeutral =() =>{
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    const updatedTotal =updatedNeutral + good + bad
    const pos = (good/updatedTotal)
    setPositive(pos)
  }
  const handleBad =()=>{
    const updatedBad = bad +1
    setBad(updatedBad)
    setTotal(updatedBad+good + neutral)
    const updatedTotal =updatedBad + good + neutral
    const pos = (good/updatedTotal)
    setPositive(pos)
    const av = (good-updatedBad)/updatedTotal
    setAverage(av)
  }

  return(
  <div>
    <div><h2>give feedback</h2></div>
    <div>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}>neutral</button>
    <button onClick={handleBad}>bad</button>
    </div>
    <h3>statistics</h3>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {average}</p>
    <p>positive {positive*100} %</p>
    
 </div>
  )
}

export default App;
