import React from 'react'
import { marked } from "marked";
import Previewer from './Previewer'
import Editor from './editor'
import "./styles.css"

marked.setOptions({
  breaks:true
})

export default function App() {
  const [input,setInput]=React.useState("");
  console.log(input)
  function handleChange(e){
    setInput(e.target.value)
  }
  
function updatePreview(){
return marked(input)
}

  return (
    <div>
      <Editor input ={input} handleChange={handleChange} />
      <Previewer updatePreview={updatePreview()}/>
    </div>
  )
}
