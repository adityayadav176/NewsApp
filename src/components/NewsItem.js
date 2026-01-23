import React, { Component } from 'react'
import Spinner from './spinner.js'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (

      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0
          }}>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/108214028-1760961337568-gettyimages-2209023675-AFS_NetflixLogoIlustration_3.jpeg?v=1768671337&w=1920&h=1080" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} <br></br> On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
