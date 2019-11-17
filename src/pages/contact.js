import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Contact = ({ data: { contact } }) => (



    <Layout>
        <article className="sheet">

            <div className="sheet__inner">
                <h1 className="sheet__title">{contact.title}</h1>
                <p className="sheet__lead">{contact.intro}</p>
                <p className="sheet__lead">{contact.phoneNumber}</p>
                <p className="sheet__lead">{contact.location.latitude}</p>
                <p className="sheet__lead">{contact.location.longitude}</p>

            </div>
        </article>
    </Layout>
)

export default Contact

export const query = graphql`
  query MyQuery {
  contact: datoCmsContactPage {
    phoneNumber
    title
    intro
    location{
        latitude
        longitude
    }
  }
}
`
