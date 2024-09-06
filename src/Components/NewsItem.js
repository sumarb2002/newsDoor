import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title ,description,imageurl,newsurl} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={imageurl?imageurl:"https://image.cnbcfm.com/api/v1/image/107251555-1686044964159-gettyimages-1247623689-UK_LSEG.jpeg?v=1709721301&w=1920&h=1080"} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
      </div>
    </div>
    </div>
    )
  }
}
