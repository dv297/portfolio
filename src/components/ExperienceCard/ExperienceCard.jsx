import React from 'react'

import './ExperienceCard.css'

const ExperienceCard = ({ company, jobTitle, timeWorked, children }) => {
  return (
    <div className="experience-card">
      <h1>{company}</h1>
      <div className="experience-card-subheader">
        <small>{jobTitle}</small>
        <small>{timeWorked}</small>
      </div>
      {children}
    </div>
  )
}

export default ExperienceCard
