import { useStaticQuery, graphql } from "gatsby"
import React,{Component} from "react"
import "./footer.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      homepage {
        acf {
            footer {
                logo,
                columns {
                  column_header_text
                  column_header_target
                  links {
                    text
                    link
                    class              
                  }
                }
              }
        }
      }
    }
  `)
  return (
    <footer className="page-footer">
        <div className="inner">
            <div className="column"><img src={data.homepage.acf.footer.logo} alt='' /></div>
            {data.homepage.acf.footer.columns.map((column,idx)=>(
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