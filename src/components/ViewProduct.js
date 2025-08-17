import React from 'react'
import { data, useParams } from 'react-router'

const ViewProduct = () => {
  const { productId } = useParams();

  return (

    <div>

      <h1>sushma{productId}</h1>

      
    </div>
  )
}

export default ViewProduct
