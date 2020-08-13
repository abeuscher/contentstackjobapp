import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import orderBy from "lodash/orderBy"
import Flatten from "lodash/flatten"

import "./resources-grid.scss"

export default function ResourcesGrid() {
    const data = useStaticQuery(graphql`
    query ResourcesGridQuery {
      csResourcesMain {
        resources_menu {
            search_placeholder
        }
        resources {
            title
            link
            description
            thumb {
                url
            }
            categories {
                title
                slug
            }
        }
      }
    }
  `)
    return (
        <div className="resources-tiles">
                <ResourceGrid tiles={data.csResourcesMain.resources} />
        </div>
    )
}

class ResourceGrid extends Component {
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
        () => { return orderBy(this.state.tiles, "title", "asc") },
        () => { return orderBy(this.state.tiles, "title", "desc") },
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
            <div className="resources-grid max-width">
                <div className="max-width">
                    {this.state.tiles.map((tile, idx) => {
                        let iconStyle = tile.thumb ? { "backgroundImage": "url('" + tile.thumb.url + "')" } : {}
                        return (
                            <a key={"resources-tile-" + idx} className="tile" href={tile.link}>
                                <div className="tile-inner">
                                    <div className="card-front">
                                        <div className="thumb" style={iconStyle}></div>
                                        <h3>{tile.title}</h3>
                                    </div>
                                    <div className="card-back">
                                        <div className="inner">
                                            <h3>{tile.title}</h3>
                                            <p>{tile.description}</p>
                                            <p className="cta">Consume Now</p>
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