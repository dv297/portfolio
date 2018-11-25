import React from 'react'

import ContactForm from '../components/ContactForm/ContactForm'
import DefaultPageContainer from '../components/DefaultPageContainer/DefaultPageContainer'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <h1>Contact</h1>
        <p>
          Feel free to contact me about anything, from React questions to life
          questions!
        </p>
        <p>
          I can also be contacted at my Twitter,{' '}
          <a href="https://twitter.com/thedanielvu">TheDanielVu</a>.
        </p>
        <ContactForm />
      </DefaultPageContainer>
    </Layout>
  )
}

export default Contact
