import React, {useRef, useState} from 'react'

const ValidationForm = () => {
    const inputRef = useRef(null);
    const [isValid, setIsValid] = useState(false);

    const handleValidation = () =>{
        setIsValid(inputRef.current.value.length >= 5)
    }
  return (
    <div>
      <input type="text"
      ref={inputRef}
      onChange={handleValidation}
       placeholder='Enter at least 5 characters'
       style={{borderColor: isValid ? "green":"red"}}
       
       />

       {isValid ? (<p>valid Input</p>) : (<p>Input must contain at least 5 characters</p>)}
    </div>
  )
}

export default ValidationForm
