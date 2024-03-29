import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
        country : 'in',
        pageSize : 8,
        category : 'general'
    }
    static propTypes ={
        country : PropTypes.string,
        pageSize :PropTypes.number,
        category : PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f3d98a648764eeeb4a1401c5d014c2c&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ 
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading : false 
        })
    }
    handelPrevClick = async () => {
        console.log("this is prev click")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f3d98a648764eeeb4a1401c5d014c2c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading : false
        })
    }
    handelNextClick = async () => {
        console.log("this is next click")
        if (!(this.state.page + 1 >Math.ceil( this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f3d98a648764eeeb4a1401c5d014c2c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading : false
            })
        }
    } 
    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{margin :'35px 0px'}}>NewsMonkey - TOP HEADLINES</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    { !this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handelPrevClick} > &larr;Previous</button>
                    <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
