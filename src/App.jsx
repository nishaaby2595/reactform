import React, { useState } from 'react';



function App() {

  const [text,settext] = useState('Ready?')
  const [isClicked,setisClicked] = useState(false)
  const [value,setvalue] = useState('')
  const [username,setusername] = useState('')



function changcolor(){
  setisClicked(true)
}
function changcolorback() {
  setisClicked(false)
}

function changetitle(event){
  // settext(`Hello ${value}`)
  settext('Hello')
  setusername(value)
  event.preventDefault()

}
 function handleinputchange(event){
  
   setvalue(event.target.value)
   


 }

  return (
    
    <form onSubmit={changetitle}>
      <h1 >{text} {username}</h1>
      <input type="text" placeholder='enter your name:'
      onChange={handleinputchange} value={value}/>
      <br />
      <br />
      <button type="submit" style={{backgroundColor: isClicked ?'gray':'lightgreen'}}
      // onClick={() => {changetitle(),handleinputchange()}} 
      onMouseOver={changcolor}
      onMouseOut={changcolorback}>submit</button>
    </form>
  );
}

export default App;
