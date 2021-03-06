import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./customer-success-featured-customers.scss"

export default function CsFeaturedCustomers() {
    const data = useStaticQuery(graphql`
    query CustomerSuccessFeaturedCustomersQuery {
      csCustomerSuccess {
        featured_customers_section {
            header
            buckets {
                header
                thumb {
                    url
                }
            }
        }
      }
    }
  `)

    return (
        <div className="featured-customers">
            <div className="max-width">
                <h2 className="small">{data.csCustomerSuccess.featured_customers_section.header}</h2>
                <div className="featured-tiles">
                    {data.csCustomerSuccess.featured_customers_section.buckets.map((bucket, idx) => {
                        let bgStyle = bucket.thumb ? { "backgroundImage": "url('" + bucket.thumb.url + "')" } : {}
                        return (
                            <div key={"customer-tile="+idx} className="featured-customer-tile">
                                <h3>{bucket.header}</h3>
                                <div key={"feat-cust-" + idx} className="logo-line" style={bgStyle}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
