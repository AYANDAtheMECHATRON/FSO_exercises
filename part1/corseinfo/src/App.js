const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a componet'
  const exercisses3 =14

  return (
    <div>
      <Header course = {course}/>
      <Content name = {part1} exerc = {exercises1}/>
      <Content name = {part2} exerc = {exercises2}/>
      <Content name = {part3} exerc = {exercisses3}/>
      <Total total = {exercises1 + exercises2 + exercisses3}/>
    </div>
  )

}
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log("Content Props")
  console.log(props)
  return(
    <>
        <Part part = {props.name} exercise = {props.exerc}/>

    </>
  )
}

const Part = (props) =>
{
  console.log("Part Component Props")
  console.log(props)
  return(
      <>
          <h2>{props.part} {props.exercise}</h2>
      </>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}

export default App;
