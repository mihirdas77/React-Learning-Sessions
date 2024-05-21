import React, { useRef } from 'react'
import './App.css'
import DynamicForm from './assets/DynamicForms'
import ValidationForm from './assets/ValidationForm'
import CustomSubmission from './assets/CustomSubmission'

function App() {
  

  return (
    <>
      <h1>Dynamic Form with UseRef</h1>
      <h2>Dynamic Form Input Focus</h2>
      <DynamicForm/>
      <h2>Real-Time Input validation</h2>
      <ValidationForm/>
      <h2>Custom form Submission Handling</h2>
      <CustomSubmission/>
    </>
  )
}

export default App
