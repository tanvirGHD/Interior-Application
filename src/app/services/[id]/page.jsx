import React from 'react'

export default function ServiceDetailsPage({ params }) {
     const id = params.id;
  return (
    <div>
      <h1>Services Details</h1>
      <p>ID: {id}</p>
    </div>
  )
}
