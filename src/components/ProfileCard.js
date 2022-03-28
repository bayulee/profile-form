import React from 'react'

function profileCard({card}) {
  return (
    <div className='greenCard'>
    <h3>{card.firstname} {card.surname}</h3>
    <p>{card.email}</p>
    <p>{card.phone}</p>
    </div>
  )
}

export default profileCard