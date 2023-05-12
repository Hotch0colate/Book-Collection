import React from 'react'

function MyProfile({data}) {
  return (
    <div>
        <p>I'm from MyProfile Component</p>
        <p>My name is {data.firstName} {data.lastName}</p>
    </div>
  )
}

export default MyProfile