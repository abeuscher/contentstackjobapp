import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import FormWithCopy from "./form-with-copy"

export default function RequestDemoForm() {
    const data = useStaticQuery(graphql`
    query ReqDemoFormQuery {
      csRequestDemo {
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
      <FormWithCopy data={data.csRequestDemo} className={"marketo-form"}/>
    )
}
