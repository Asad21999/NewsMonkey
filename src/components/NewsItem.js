import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
   let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card" >
  <img height="220px;" width="350px;" src={!imageUrl?"https://cdn-icons-png.flaticon.com/512/21/21601.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text' ><small className='text-muted'>By{!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
