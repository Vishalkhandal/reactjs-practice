import React from 'react'

function FoodItem({...props}) {
  return (
    <>
        <h2>{props.foodName}</h2>
        <p>{props.foodIngradients}</p>
    </>
  )
}

export default FoodItem