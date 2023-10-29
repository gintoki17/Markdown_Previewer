import Header from "../components/Header";
import React from 'react'

export default function Editor(props) {
  return (
    <div className="editor-box">
        <Header name={"Editor"}/>
        <textarea name="editor" id="editor" value={props.value}onChange={props.handleChange}></textarea>
    </div>
  )
}
