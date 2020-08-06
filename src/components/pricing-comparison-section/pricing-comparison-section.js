import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import Uniq from "lodash/uniq"

import "./press-roll.scss"

export default function PricingComparisonSection() {
    const data = useStaticQuery(graphql`
    query pricingComparison {
        csRedesignPricing {
          pricing_plans_section {
            title
            plans {
              title
              cost
              trial_desc
              features {
                feature
                tool_tip
              }
              subtext
              cta {
                title
                link
              }
            }
          }
          pricing_table_heading {
            title
            subtext
            cta {
              title
              link
            }
          }
          pricing_table_comparison {
            trial_merged_content
            features_comparison {
              category
              rowspan
              features {
                title
                tooltip
                trial {
                  is_tick
                  content
                }
                business {
                  is_tick
                  content
                }
                enterprise {
                  is_tick
                  content
                }
              }
            }
          }
        }      
      }
  `)
    return (
        <PricingSwapper data={data.csRedesignPricing} />
    )
}

class PricingSwapper extends Component {
    render() {
        return(<div>{JSON.stringify(this.props.data)}</div>)
    }
}