const App = () => {
  const course = 'Half Stack application development'

    const parts = [
      {
      name : 'Fundamentals of React',         exercises : 10},
      {
       name :'Using props to pass data', exercises : 7},
     {
      name: 'State of a component', exercises: 14}]

    console.log(parts)

  return (
    <div>
      <Header course = {course}/>
      <Content content = {parts}/>
      <Total total = {parts}/>
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
         <Part part = {props.content[0].name} exerc = {props.content[0].exercises}/>
         <Part part = {props.content[1].name} exerc = {props.content[1].exercises}/>
         <Part part = {props.content[2].name} exerc = {props.content[2].exercises}/>

     </>
   )
 }

 const Part = (props) =>
 {
   return(
       <>
           <p>{props.part} {props.exerc}</p>
       </>
   )
 }

 const Total = (props) =>{
  return(
     <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
   )
 }

export default App;
