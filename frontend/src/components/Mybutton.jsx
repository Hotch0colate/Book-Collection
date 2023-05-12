import React from 'react'

function Mybutton() {

    function handleClick (){
        alert("You clicked me");
    }

  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default Mybutton