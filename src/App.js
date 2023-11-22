import React from 'react'
import Signup from './home/Signup'
import SignIn from './home/Signin'
import Dashboard from './home/Dboard'
const func1 = () =>{
  if(window.location.pathname==='/')
  return <Signup/>
}
const func2 = () =>{
  if(window.location.pathname==='/signin')
  return <SignIn/>
}
const func3 = () =>{
  if(window.location.pathname==='/Dboard'){
  return <Dashboard/>
  }
}
const App = () => {
  return (
    <div>
    {func1()}
    {func2()}
    {func3()}

    </div>
  )
}

export default App