import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {imgUrl, title, description } = this.props;
        return (
            <div>
                <div className="container my-3">
                    <div className="card d-flex flex-row m-4" style={{width: "18rem"}}>
                        <img src = {imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="#" class="btn btn-sm btn-primary">Know more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
