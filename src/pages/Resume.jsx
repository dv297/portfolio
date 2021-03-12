import React from 'react'
import { withPrefix } from 'gatsby-link'

import './Resume.css'
import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'
import ExperienceCard from '../components/ExperienceCard/ExperienceCard'
import Pill from '../components/Pill/Pill'
import Layout from '../components/Layout'

import cernerHackthonImage from '../images/cerner-hackathon.jpg'
import hackkcImage from '../images/hackkc.jpg'
import hackMidwestImage from '../images/hackathon.jpg'
import drummingImage from '../images/drumming.jpg'
import bootcampImage from '../images/bootcamp.jpg'

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
          <a href={withPrefix('/resume.pdf')}>Printable resume with full descriptions</a>
        </small>
        <h2>Technologies Worked With</h2>
        <h3>Languages, Frameworks, and Libraries</h3>
        <ul className="resume-technologylist">
          <li>React</li>
          <li>Jest</li>
          <li>Redux</li>
          <li>Vue.js</li>
          <li>JavaScript (ES2015+)</li>
          <li>Storybook</li>
          <li>Node.JS</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Socket.IO</li>
          <li>Ruby on Rails</li>
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
        <ul className="resume-technologylist">
          <li>Jenkins</li>
          <li>Docker</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>Grunt</li>
          <li>Amazon Web Services</li>
          <li>Google App Engine</li>
        </ul>
        <h3>Skills/ Training</h3>
        <ul>
          <li>Trained and well-versed in Agile</li>
          <li>Enjoys mentoring and sharing knowledge</li>
        </ul>
        <hr />
        <h2>Professional Experiences</h2>
        <ExperienceCard
          company="Rx Savings Solutions"
          jobTitle="Senior Software Engineer / Engineering Manager"
          timeWorked="November 2019 - Present"
        />
        <ul>
          <li>
            Led multiple frontend teams as company grew from a small startup to a more standard enterprise environment.
          </li>
          <li>
            Collaborated with business stakeholders and project managers to design, estimate, and deliver projects using
            different technologies such as Vue.js, React, Salesforce, and PHP.
          </li>
          <li>Mentored and coached teams to instill an enterprise engineering mindset.</li>
        </ul>
        <ExperienceCard
          company="Cerner Corporation"
          jobTitle="Senior Software Engineer"
          timeWorked="January 2016 – November 2019"
        >
          <ul>
            <li>Developed React single page applications for scheduling patients in ambulatory and acute scenarios</li>
            <li>
              Educated the team and organization about uplifting the web code base to use modern tooling and trends,
              such as Webpack, Babel, and ES2015 by blogging, giving talks, and providing training
            </li>
            <li>Contributed to Cerner’s open-source reusable component library “Terra”</li>
            <li>Worked on improving Cerner Scheduling's CI/CD workflow through the use of Jenkins</li>
            <li>
              Delivered high-level, long running estimates of future projects through collaboration with solution
              designers, UX designers, and other engineering teams to ensure appropriate scoping of tasks and timelines
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList([
            'ES2015',
            'React',
            'Jest',
            'Redux',
            'Webpack',
            'Babel',
            'Jenkins',
            'Docker',
            'SASS',
            'Java',
            'Ruby on Rails',
            'jQuery',
          ])}
        </ExperienceCard>
        <ExperienceCard
          company="The University of Kansas"
          jobTitle="Full-stack Web Development Bootcamp Instructor"
          timeWorked="November 2018 – Present"
        >
          <ul>
            <li>Led instructional courses on Full-stack Web development</li>
            <li>
              Taught students who are new to programming the fundamentals of web development, starting with HTML, CSS,
              and JavaScript, and leading them through more advanced topics like Node.JS, Express, MongoDB, MySQL, and
              React.
            </li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList(['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.JS', 'Express', 'MySQL', 'MongoDB', 'React'])}
        </ExperienceCard>
        <ExperienceCard
          company="IFESTOS Computational Biology Research Lab"
          jobTitle="Android Developer"
          timeWorked="September 2014 – December 2015"
        >
          <ul>
            <li>Led seminars on Android development</li>
            <li>Worked with a team to develop an Android app to help triage mass-casualty incidents</li>
            <li>Contributed to an Android app that helped users track personal health gains from exercise and diet</li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList(['Java', 'Android', 'Google App Engine', 'Node.JS', 'Socket.IO'])}
        </ExperienceCard>
        <ExperienceCard
          company="Boeing"
          jobTitle="Database Platform Operations Intern"
          timeWorked="May 2015 - August 2015"
        >
          <ul>
            <li>Migrated and hosted Enterprise databases</li>
            <li>Helped automate processes using Powershell scripts and metrics collection</li>
            <li>Collaborated on new methods of deploying installations, security patches, and hotfixes</li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList(['SQL Server', 'Powershell', 'C#', 'JavaScript', 'Microsoft Sharepoint'])}
        </ExperienceCard>
        <ExperienceCard
          company="Southern Wine & Spirits"
          jobTitle="Web Business Analyst Intern"
          timeWorked="May 2014 - September 2014"
        >
          <ul>
            <li>Managed new digital projects to promote company partners and products</li>
            <li>Developed a custom content management system for an alcohol branding database</li>
          </ul>
          <small>Technologies Worked With:</small>
          <br />
          {getPillList(['PHP', 'JavaScript', 'HTML', 'CSS'])}
        </ExperienceCard>
        <hr />
        <h2>Talks Given</h2>
        <ul>
          <li>React Composition Patterns - March 2020</li>
          <li>Designing and Starting a React Project - March 2018</li>
          <li>Testing React Components - October 2017</li>
          <li>Managing Internal and UI-Reflected State - June 2017</li>
        </ul>
        <hr />
        <h2>Education</h2>
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
        <hr />
        <h2>Experiences, for fun!</h2>
        <div className="resume-experience group">
          <img src={bootcampImage} alt="My 2019 Bootcamp Class" style={{ marginBottom: 10 }} />
          <p>
            In the Fall of 2018, I was given the incredible opportunity to teach the University of Kansas's Fullstack
            Bootcamp! This 6 month bootcamp covered a lot of surface area, from HTML to databases and everything in
            between. Many of the students were working professionals in other fields looking to change up their lives,
            so it was absolutely amazing to see them start the bootcamp with zero-coding knowledge, and to take that and
            see them make a full blown MERN application by the end of the semester.
          </p>
        </div>
        <div className="resume-experiences ">
          <div className="resume-experience group">
            <img src={cernerHackthonImage} alt="Winning the RevenueCycle 2018 Hackathon" />
            <p>
              Cerner hosts various hackathons, and my partner and I won RevenueCycle's 2018 hackathon! Working with
              Dustin Singleton, we created a React/GraphQL + NodeJS/Neo4J based application that parsed our released
              Java JAR's and reported the dependencies and projects used within a particular JAR. This, combined with
              API's to pull all of our past released JAR's, allowed our organization to view historical data and trace
              how a particular project or dependency may have impacted several releases of code, saving many hours of
              debugging.
            </p>
          </div>
          <div className="resume-experience group">
            <img src={hackkcImage} alt="Participating in HackKC 2017" />
            <p>
              I participated in Code for KC's 2017 hackathon "HackKC". Code for KC, as they put it, are "a group of
              civic-minded geeks who volunteer our talents to projects that improve how our local governments and
              community organizations use the web". Worked on a React Native project called "Tagging Tracker", which
              allowed users to tag locations of graffiti. These tags would get sent to an organization who would send
              volunteers to clean up the graffiti.
            </p>
          </div>
          <div className="resume-experience group">
            <img src={hackMidwestImage} alt="Participating in Hack Midwest 2018" />
            <p>
              My friends and I participated in Hack Midwest 2018. We were interested in learning React Native so we
              decided to make a mobile app! The idea of the app was to help route volunteers to homeless citizens of KC
              and provide them with water and other resources during the summer heat. We used Okta for authentication
              and HERE for their map API's. Learned a lot and had tons of fun!
            </p>
          </div>
          <div className="resume-experience group">
            <img src={drummingImage} alt="Drumming for the LGBA 2018 Conference" />
            <p>
              Along with coding, I enjoy drumming in my spare time. I was originally a music education major before
              switching over to computer science. I play with the Mid America Freedom Band, an LGBTQA+ concert band in
              Kansas City, and we had the honor and privilege of hosting the 2018 LGBA Conference. Along with the
              concert band, I play drum set with the Mighty Mo Combo, a subset of the band that focuses on jazz.
            </p>
          </div>
        </div>
      </DefaultPageContainer>
    </Layout>
  )
}

export default Resume
