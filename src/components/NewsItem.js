import React, { Component } from 'react'
export class NewsItem extends Component {

    render() {
        let { imgUrl, title, description, NewsUrl } = this.props;
        return (
            <div>
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={!imgUrl ? `Image Not Found !` : imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={NewsUrl} target = "_blank" className="btn btn-sm btn-primary">Know more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
