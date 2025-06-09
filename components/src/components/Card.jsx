import React from 'react'

function Card({...props}) {
  return (
    <div style={props.style}>
        <h2>{props.heading}</h2>
        <h3>{props.subHeading}</h3>
        <p>{props.highlights}</p>
        <p>{props.subHighlights}</p>
        {props.children}
    </div>
  )
}

export default Card