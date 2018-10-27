/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react'
import { withPrefix } from 'gatsby-link'

import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'
import ExperienceCard from '../components/ExperienceCard/ExperienceCard'
import Pill from '../components/Pill/Pill'
import Layout from '../components/Layout'

const getPillList = list => (
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {list.map(entry => (
      <Pill key={entry}>{entry}</Pill>
    ))}
  </div>
)

const Resume = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <h1>Resume</h1>
        <small>
          <a href={withPrefix('/resume.pdf')}>
            Printable resume with full descriptions
          </a>
        </small>
        <h2>Technologies Worked With</h2>
        <h3>Languages, Frameworks, and Libraries</h3>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <li>React</li>
          <li>JavaScript (ES2015)</li>
          <li>Redux</li>
          <li>Node.JS</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Socket.IO</li>
          <li>WebRTC</li>
          <li>Android Development</li>
          <li>HTML</li>
          <li>Java</li>
          <li>CSS</li>
          <li>C++</li>
          <li>Python</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
        <h3>Tools</h3>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <li>Git</li>
          <li>Webpack</li>
          <li>Grunt</li>
          <li>Amazon Web Services</li>
          <li>Google App Engine</li>
        </ul>
        <hr />
        <h2>Professional Experiences</h2>
        <ExperienceCard
          company="Cerner Corporation"
          jobTitle="Associate Senior Software Engineer"
          timeWorked="January 2016 – Present"
        >
          <ul>
            <li>Developed React and Redux web applications</li>
            <li>
              Educated the team about web development through talks and
              knowledge transfers
            </li>
            <li>
              Contributed to Cerner’s open-source reusable component library
              “Terra”
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList([
            'ES2015',
            'React',
            'Redux',
            'Webpack',
            'Babel',
            'SASS',
            'Java',
            'jQuery',
          ])}
        </ExperienceCard>
        <ExperienceCard
          company="IFESTOS Computational Biology Research Lab"
          jobTitle="Android Developer"
          timeWorked="September 2014 – December 2015"
        >
          <ul>
            <li>Led seminars on Android development</li>
            <li>
              Worked with a team to develop an Android app to help triage
              mass-casualty incidents
            </li>
            <li>
              Contributed to an Android app that helped users track personal
              health gains from exercise and diet
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList([
            'Java',
            'Android',
            'Google App Engine',
            'Node.JS',
            'Socket.IO',
          ])}
        </ExperienceCard>
        <ExperienceCard
          company="Boeing"
          jobTitle="Database Platform Operations Intern"
          timeWorked="May 2015 - August 2015"
        >
          <ul>
            <li>Migrated and hosted Enterprise databases</li>
            <li>
              Helped automate processes using Powershell scripts and metrics
              collection
            </li>
            <li>
              Collaborated on new methods of deploying installations, security
              patches, and hotfixes
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList([
            'SQL Server',
            'Powershell',
            'C#',
            'JavaScript',
            'Microsoft Sharepoint',
          ])}
        </ExperienceCard>
        <ExperienceCard
          company="Southern Wine & Spirits"
          jobTitle="Web Business Analyst Intern"
          timeWorked="May 2014 - September 2014"
        >
          <ul>
            <li>
              Managed new digital projects to promote company partners and
              products
            </li>
            <li>
              Developed a custom content management system for an alcohol
              branding database
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList(['PHP', 'JavaScript', 'HTML', 'CSS'])}
        </ExperienceCard>
        <hr />
        <h3>Talks Given</h3>
        <ul>
          <li>Designing and Starting a React Project - March 2018</li>
          <li>Testing React Components - October 2017</li>
          <li>Managing Internal and UI-Reflected State - June 2017</li>
        </ul>
        <hr />
        <h3>Education</h3>
        <ExperienceCard
          company="University of South Carolina, Honors College"
          jobTitle="B.S. in Computer Science"
          timeWorked="December 2015"
        >
          <ul>
            <li>Minor in Music</li>
            <li>GPA: 3.829</li>
          </ul>
        </ExperienceCard>
      </DefaultPageContainer>
    </Layout>
  )
}

export default Resume
