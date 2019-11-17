import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Contact = ({ data: { contact } }) => (
    <Layout>
        <article className="sheet">
            <HelmetDatoCms seo="" />
            <div className="sheet__inner">
                <h1 className="sheet__title">gdgdg</h1>
                <p className="sheet__lead">""</p>
                <div className="sheet__gallery">

                </div>

            </div>
        </article>
    </Layout>
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
