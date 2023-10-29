import Header from "../components/Header";
import React from 'react'

export default function Previewer(props) {
  return (
    <div className="previewer-box"><Header />
    <div dangerouslySetInnerHTML={{ __html: props.updatePreview}} className="preview" id="preview"></div>
    </div>
  )
}
