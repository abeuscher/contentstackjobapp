import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./partners-main-content.scss"

export default function PartnersMainContent() {
  const data = useStaticQuery(graphql`
    query PartnersMainContentQuery {
      csPartnersMain {
        main_section {
          header
          copy
          buttons {
              header
              icon {
                url
              }
              cta {
                  text
                  link
                  classname
              }
          }
        }
      }
    }
  `)
  return (
    <div className="partners-main-section max-width">
      <h2>{data.csPartnersMain.main_section.header}</h2>
      <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: data.csPartnersMain.main_section.copy }}></div>
      {data.csPartnersMain.main_section.buttons.map((button, idx) => {
        return (
          <div className="button-block" key={"partners-button" + idx}>
            <h3>{button.header}</h3>
            <div className="icon"></div>
            <a className={"button " + button.classname} href={button.cta.link}>{button.cta.text}</a>
          </div>
        )
      })}
    </div>
  )
}