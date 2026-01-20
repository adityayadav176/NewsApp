import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
       <div className= 
"card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZCA7X5CCWTNJSJUVR2ZTSHVC6M_size-normalized.JPG&w=1440":imageUrl} className=
"card-img-top" alt="..."/>
                <div className=
"card-body">
                    <h5 className=
"card-title">{title}</h5>
                    <p className=
"card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className=
"btn btn-sm btn-dark">Read More</a>
                </div>
       </div>
      </div>
    )
  }
}

export default NewsItem
