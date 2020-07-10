import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import orderBy from "lodash/orderBy"
import Flatten from "lodash/flatten"

import "./integrations-tile-section.scss"

export default function IntegrationsTileSection() {
  const data = useStaticQuery(graphql`
    query IntegrationsTilesQuery {
      csIntegrationsMain {
        filter_menu_fields {
            search_placeholder_text
            sort_menu_label
            sort_menu_options
            filter_menu_label
            filter_menu_all
        }
        tile_cta_text
        integrations_tiles {
            product_name
            logo {
                color_logo {
                    url
                }
            }
            copy
            page_link
            categories {
                title
                slug
            }
        }
      }
    }
  `)
  return (
    <div className="integrations-tiles">
      <div className="max-width">
        <FilterGrid menuFields={data.csIntegrationsMain.filter_menu_fields} ctaLinkText={data.csIntegrationsMain.tile_cta_text} tiles={data.csIntegrationsMain.integrations_tiles} />
      </div>
    </div>
  )
}

class FilterGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: this.props.tiles,
      categoryList: this.getCategoryList(this.props.tiles),
      categories: this.getCategories(this.props.tiles),
      filterIndex: 0,
      sortIndex: 0,
      searchPhrase: ""
    }
  }
  sortActions = [
    () => { return this.props.tiles },
    () => { return orderBy(this.state.tiles, "product_name", "asc") },
    () => { return orderBy(this.state.tiles, "product_name", "desc") },
  ]
  getCategories = tiles => {
    let categories = tiles.map(tile => {
      return tile.categories.map(category => { return category })
    })
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    }
    return categories.filter(onlyUnique);
  }
  getCategoryList = tiles => {
    let categories = tiles.map(tile => {
      return tile.categories.map(category => { return category.title })
    })
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    }
    return Flatten(categories).filter(onlyUnique);
  }
  searchFieldChange = e => {
    e.preventDefault()
    this.setState({
      searchPhrase: e.target.value,
      tiles: this.props.tiles.filter((tile) => { return tile.product_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 })
    })
  }
  filterChange = e => {
    e.preventDefault()
    this.setState({
      filterIndex: e.target.getAttribute("data-idx"),
      tiles: this.props.tiles.filter((tile) => {
        return tile.categories.filter(
          category => {
            return category.title === this.state.categoryList[e.target.getAttribute("data-idx")]
          }
        ).length
      })
    })
  }
  sortChange = e => {
    e.preventDefault()
    this.setState({
      sortIndex: e.target.getAttribute("data-idx"),
      tiles: this.sortActions[e.target.getAttribute("data-idx")]()
    })
  }
  render() {
    return (
      <div className="integrations-grid max-width">
        <div className="filter-menu">
          <input type="text" value={this.state.searchPhrase} onChange={this.searchFieldChange} placeholder={this.props.menuFields.search_placeholder_text} />
          <span className="label sort">{this.props.menuFields.sort_menu_label}</span>
          <Menu value={this.props.menuFields.sort_menu_options[this.state.sortIndex]} options={this.props.menuFields.sort_menu_options} onChange={this.sortChange} />
          <span className="label sort">{this.props.menuFields.filter_menu_label}</span>
          <Menu value={this.state.categoryList[this.state.filterIndex]} options={this.state.categoryList} onChange={this.filterChange} />
        </div>
        <div className="tile-grid">
          {this.state.tiles.map((tile, idx) => {
            let iconStyle = tile.logo[0].color_logo ? { "backgroundImage": "url('" + tile.logo[0].color_logo.url + "')" } : {}
            return (
              <a key={"integrations-tile-" + idx} className="tile" href={tile.page_link}>
                <div className="tile-inner">
                  <div className="card-front">
                    <div className="inner">
                      <h3>{tile.product_name}</h3>
                      <div className="icon" style={iconStyle}></div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="inner">
                      <h3>{tile.product_name}</h3>
                      <p>{tile.copy}</p>
                      <p className="cta">{this.props.ctaLinkText}</p>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}
class Menu extends Component {
  render() {
    return (
      <div className="select-menu">
        <ul>
          <li>{this.props.value}
            <ul>
              {this.props.options.map((option, idx) => (<li key={"filter-option-" + idx}><button data-idx={idx} onClick={this.props.onChange}>{option}</button></li>))}
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}