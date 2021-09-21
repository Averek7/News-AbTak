import React, { Component } from "react";
export class NewsItem extends Component {
    render() {
        let { imgUrl, title, description, NewsUrl, author, PublishTime, source } =
            this.props;
        return (
            <div>
                <div className="container my-3">
                    <div className="card">
                        <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                            {source}
                            <span className="visually-hidden"></span>
                        </span>
                        <img
                            src={!imgUrl ? `Image Not Found !` : imgUrl}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    By {!author ? "Unknown" : author} Published at{" "}
                                    {new Date(PublishTime).toGMTString()}
                                </small>
                            </p>
                            <a
                                rel="noreferrer"
                                href={NewsUrl}
                                target="_blank"
                                className={`btn btn-sm btn-${this.props.mode}`}
                            >
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
