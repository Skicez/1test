import React from 'react'

const Section1 = (props) => {
  const firstname = "Sam"
  const lastname = "Tan"
  const date = new Date()
  const hours = date.getHours()  
  let timeOfDay

    if (hours <12){
      timeOfDay = "morning"
    } else if (hours >=12 && hours<17){
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

  return (
    <div>

      <h1> Hello {props.name}</h1>
      <ol>
        <li>Why us</li>
        <li>Invest</li> 
      </ol>
      <h2> Welcome {firstname} {lastname}! </h2>
      <h3> Good {timeOfDay} {firstname}. It's about {hours}:00 SGT...</h3>

    </div>
  )
}

export default Section1