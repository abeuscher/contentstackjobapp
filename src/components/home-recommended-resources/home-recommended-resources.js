import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-recommended-resources.scss"

export default function RRSection() {
    const data = useStaticQuery(graphql`
    query RRQuery {
      homepage {
        acf {
            recommended_resources {
                ebook_image,
                ebook_title,
                ebook_link,
                ebook_description,
                ebook_category_text,
                gartner_image,
                gartner_title,
                gartner_category_text,
                gartner_link,
                blog_image,
                blog_category_text,
                blog_title,
                blog_description,
                blog_link 
              }
        }
      }
    }
  `)
    return (
        <div className="recommended-resources">
            <div className="max-width">
                <a className="ebook" href={data.homepage.acf.recommended_resources.ebook_link}>
                    <div className="image-pane" style={{ backgroundImage: "url('" + data.homepage.acf.recommended_resources.ebook_image + "')" }}></div>
                    <div className="text-pane">
                        <h2>{data.homepage.acf.recommended_resources.ebook_title}</h2>
                        <p>{data.homepage.acf.recommended_resources.ebook_description}</p>
                    </div>
                </a>
                <a className="gartner" href={data.homepage.acf.recommended_resources.gartner_link} style={{ backgroundImage: "url('" + data.homepage.acf.recommended_resources.gartner_image + "')" }}>
                    <h2>{data.homepage.acf.recommended_resources.gartner_title}</h2>
                </a>
                <a className="blog" href={data.homepage.acf.recommended_resources.blog_link}>
                    <div className="image-pane" style={{ backgroundImage: "url('" + data.homepage.acf.recommended_resources.blog_image + "')" }}></div>
                    <div className="text-pane">
                        <h2>{data.homepage.acf.recommended_resources.blog_title}</h2>
                        <p>{data.homepage.acf.recommended_resources.blog_description}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}