import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Contact = ({ data: { contact } }) => (

<h1>hello world</h1>

)

export default Contact

export const query = graphql`
  query MyQuery {
  datoCmsContactPage {
    phoneNumber
    title
  }
}
`
