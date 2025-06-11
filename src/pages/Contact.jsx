import React from 'react'
import contacts from '../assets/images/contact.jpg';
import Banner from '../components/Banner';

const Contact = () => {
  return (
    <section>
      <Banner
        image={contacts}
        alt="Contact image"
      />

    </section>
  )
}

export default Contact