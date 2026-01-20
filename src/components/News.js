import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
         this.state = {
            articles: [],
            loading: true,
            page: 1,
         };
    }

    handleNextClick = async () =>{
      if( this.state.page+1 > Math.ceil(this.state.totalResults/20)){

      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1397969e723419ba6608a025a31e06f&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let response = await data.json()
        this.setState({articles: response.articles,
          page:this.state.page+1
        })}
      console.log("Next");
    }


     handlePrevClick = async () =>{
     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1397969e723419ba6608a025a31e06f&page=${this.state.page - 1}&PageSize=20`;
        let data = await fetch(url);
        let response = await data.json()
        this.setState({articles: response.articles,
          page:this.state.page-1,
        })
      console.log("prev");
    }


    async componentDidMount (){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b1397969e723419ba6608a025a31e06f&page=1&pagesize=20"
      let data = await fetch(url);
      let response = await data.json()
      this.setState({articles: response.articles,totalResults: response.totalResults})
      console.log(response);
    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return   <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div> 
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News

           
