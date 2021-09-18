import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export default class News extends PureComponent {
    constructor() {
        super();

        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=87e58df78d7a432d9bd1621b200b95a6').then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            this.setState({articles: result.articles}); 
        })
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <div className="row ">
                        {this.state.articles.map((elem) => (
                         <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title} description={elem.description} imgUrl={elem.urlToImage} NewsUrl={elem.url} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }


}

