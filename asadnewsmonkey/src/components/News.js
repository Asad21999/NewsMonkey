import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'; 
import PropTypes from 'prop-types'

export class News extends Component { 
  static PropsTypes = {
    country: 'in',
    pageSize:8,
    category:'general'
  }
  static defaultProps = {
    country: PropTypes.string,
    pageSize:PropTypes.number
  }

  constructor(props){
    super(props);
    this.state={ articles:[],
      loading:false,
      page:1
      
    }
    document.title=`${this.props.category}-NewsMonkey`
}


async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fec0314e80d2463c90433dc2d6513e65&pageSize=${this.props.pageSize}`
 
  let data= await fetch(url)
  let parsedData= await data.json()
  this.setState({loading:true})
  console.log(parsedData)
  this.setState({articles:parsedData.articles,
    loading:false})

}
 handleNextClick= async()=>{
   if(!(this.state.page+1>Math.round(this.state.totalResults/this.props.pageSize))){


  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fec0314e80d2463c90433dc2d6513e65&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState(
    {loading:true}
  )
  let data= await fetch(url)
  let parsedData= await data.json()
    this.setState({loading:false})
  
  this.setState({
  page:this.state.page+1,
  articles:parsedData.articles
})
   }
}

 handlePrevClick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fec0314e80d2463c90433dc2d6513e65&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url)
  let parsedData= await data.json()
  console.log(parsedData)
  this.setState({
  page:this.state.page-1,
  articles:parsedData.articles
})
}
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' >NewsMonkey-Top headlines from {this.props.category} </h2>
       {this.state.loading&&<Spinner/>}

        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return (
          <div className="col-md-4 my-2" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description? element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
          )
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">	&larr; previous</button>
        <button disabled={this.state.page+1>Math.round(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">  next &rarr;</button>
        </div>
       
        </div>
     
    )
  }
}

export default News
