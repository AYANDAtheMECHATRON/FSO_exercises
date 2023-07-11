const App = () => {
  const course = 'Half Stack application development'

    const part1 = {
      name : 'Fundamentals of React',     exercises : 10}

    const part2 = {
        name :'Using props to pass data', exercises : 7}
    const part3 = {
      name: 'State of a component', exercises: 14}

    

  return (
    <div>
      <Header course = {course}/>
      <Content name = {part1.name} exerc = {part1.exercises}/>
      <Content name = {part2.name} exerc = {part2.exercises}/>
      <Content name = {part3.name} exerc = {part3.exercises}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
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
  return(
    <>
        <Part part = {props.name} exercise = {props.exerc}/>

    </>
  )
}

const Part = (props) =>
{
  return(
      <>
          <p>{props.part} {props.exercise}</p>
      </>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}

export default App;
