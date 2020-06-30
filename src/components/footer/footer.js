import { useStaticQuery, graphql } from "gatsby"
import React,{Component} from "react"
import "./footer.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      csFooter {
        logo {
          url
        }
        columns {
          title
          links {
            text
            link
            classname
          }
        }
        bottom_links {
          text
          link
          classname
        }
      }
    }
  `)
  return (
    <footer className="page-footer">
        <div className="inner max-width">
            <div className="column logo"><img src={data.csFooter.logo.url} alt='' /></div>
            {data.csFooter.columns.map((column,idx)=>(
                <Column key={"footer-nav-col-"+idx} columnData={column} />
            ))}
        </div>
    </footer>
  )
}
class Column extends Component {
    render() {
        return(
            <div className="column">
                <h2>{this.props.columnData.column_header_text}</h2>
                {this.props.columnData.links.map((column,idx)=>(
                    <a key={"footer-link-"+idx} className={column.class} href={column.link}>{column.text}</a>
                ))}
            </div>
        )
    }
}