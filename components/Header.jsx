import React from 'react'

export default function Header(props) {
  return (
    <div className='header'>
        <div className="logo">
    <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
    {props.name}</div>
    <i className="fa fa-arrows-alt"></i>
    </div>
  )
}
