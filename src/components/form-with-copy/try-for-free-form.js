import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import FormWithCopy from "./form-with-copy"

export default function TryForFreeForm() {
    const data = useStaticQuery(graphql`
    query TryFreeFormQuery {
      csTryForFree {
        left_panel {
            header
            copy
            thumb {
                url
            }
        }
        form_panel {
            header
            copy
            form_id
        }
        form_completion_message {
            header
            copy
            thumb {
                url
            }
        }
      }
    }
  `)
    return (
      <FormWithCopy data={data.csTryForFree} className={"marketo-form"}/>
    )
}
