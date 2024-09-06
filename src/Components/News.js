import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=f27387dd8ac04d21a3066da8e50a0dd1&page="+this.state.page;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults});
  }
   handlePrevClick = async () =>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=f27387dd8ac04d21a3066da8e50a0dd1&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
      page : this.state.page-1
     });
  }
  handleNextClick = async () =>{
    if(this.state.page + 1 <= Math.ceil(this.state.totalResults/20))
    {
      let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=f27387dd8ac04d21a3066da8e50a0dd1&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page : this.state.page + 1
       });
    }
   
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsDoor - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={
                    element.description == null
                      ? ""
                      : element.description.slice(0, 88)
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark" disabled = {this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
