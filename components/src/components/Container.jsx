import React from 'react'

function Container({...props}) {
  return (
    <div style={props.styles}>
        {props.children}      
    </div>
  )
}

export default Container