import React from 'react'
import { Link } from 'react-router'

const AdminDashboard = () => {
  return (
    <div>
      <p><Link to = {'/AddCategory'} >Add Category</Link></p>
    </div>
  )
}

export default AdminDashboard
