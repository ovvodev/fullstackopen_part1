import { useState } from 'react'

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if(props.total <= 0){
    return(
      <div>No Feedback given</div>
    )
  }return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text = "Good" value = {props.good}/>
          <StatisticsLine text = "Neutral" value = {props.neutral}/>
          <StatisticsLine text = "Bad" value = {props.bad}/>
          <StatisticsLine text = "Total" value = {props.total}/>
          <StatisticsLine text = "Average" value = {props.average}/>
          <StatisticsLine text = "Positive" value = {props.positivePercent + "%"}/>
        </tbody>
      </table>
      
    </div>
  )
}

const Button = (props) => {
  return(
    
      <button onClick={props.action}>{props.text}</button>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1);
  
  const addNeutral = () => setNeutral(neutral + 1);

  const addBad = () => setBad(bad + 1);

  let total = good + bad + neutral;
  let average =  total / 3;
  let positivePercent = total > 0 ? (good * 100) / total : 0; 

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text = "Good" action = {addGood}/>
      <Button text = "Neutral" action = {addNeutral}/>
      <Button text = "Bad" action = {addBad}/>
      <h2>Statistics</h2>
      <Statistics good = {good} bad = {bad} neutral = {neutral} total = {total} average = {average} positivePercent = {positivePercent}/>
    </div>
  )
}

export default App