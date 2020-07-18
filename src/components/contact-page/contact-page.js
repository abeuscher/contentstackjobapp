import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./contact-page.scss"

import MarketoForm from "../marketo-embedded-form/marketo-embedded-form"


export default function ContactPageContent() {
  const data = useStaticQuery(graphql`
    query contactPageQuery {
      csContactUs {
        hero {
            header
            copy
        }
        contact_form {
            form_id
        }
      }
    }
  `)


  return (
    <div className="contact-us-section">
      <div className="max-width">
        <h2>{data.csContactUs.hero.header}</h2>
        <p>{data.csContactUs.hero.copy}</p>
        <MarketoForm className={"contact-form"} formId={data.csContactUs.contact_form.form_id} />
      </div>
    </div>
  )
}
