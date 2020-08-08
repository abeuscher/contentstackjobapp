import React, { Component } from "react"

import "./partner-page-content.scss"

export default class PartnerPageContent extends Component {
  render() {
    let logoStyle = this.props.previewData.company_logo ? { "backgroundImage": "url('" + this.props.previewData.company_logo.url + "')" } : {}
    return (
      <div className="partner-page-content light-section">
        <div className="max-width flex">
          <div className="partner-left col-quarter">
            <div className="partners-page-logo" style={logoStyle}></div>
            {this.props.contactData.partner_details.map((detail, idx) => (
              <div className="detail" key={"partner-detail-" + idx}>
                <p><strong>{detail.title}</strong></p>
                <div className="detail-value" dangerouslySetInnerHTML={{ __html: detail.desc }}></div>
              </div>
            ))}
            <a
              className="button hover-orange"
              target={this.props.contactData.contact_cta.open_in_new_tab_ ? "_blank" : "_self"}
              href={this.props.contactData.contact_cta.link + (this.props.contactData.contact_cta.email_subject ? "?subject=" + this.props.contactData.contact_cta.email_subject : "")}
            >
              {this.props.contactData.contact_cta.title}
            </a>
          </div>
          <div className="partner-right col-three-quarter">
            <div class="inner">
              <h2 className="small-header">{this.props.companyData.title}</h2>
              <a className="partner-link" href={"https://" + this.props.companyData.link.href} target="_blank" rel="noreferrer">{this.props.companyData.link.title}</a>
              {this.props.companyData.partner_type ? (<div className="partner-details" dangerouslySetInnerHTML={{ __html: this.props.companyData.partner_type }}></div>) : null}
              <h2 className="small-header">{this.props.companyData.headline}</h2>
              <div class="partner-description" dangerouslySetInnerHTML={{ __html: this.props.companyData.long_description }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}