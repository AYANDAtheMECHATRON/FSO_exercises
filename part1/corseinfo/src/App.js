const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course)

  return (
    <div>
    <Header head = {course.name}/>
    <Content content = {course.parts}/>
    <Total total = {course.parts}/>
    </div>
  )
}
 const Header = (props) => {
  console.log("Head Component Props")
  console.log(props)
   return(
     <div>
       <h1>{props.head}</h1>
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
  console.log("Total Component props")
  console.log(props)
  return(
     <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
   )
 }

export default App;
