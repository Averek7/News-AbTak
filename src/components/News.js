import React, { PureComponent } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends PureComponent {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      articles: [],
      error: null,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - AbTak`;
  }
  capitalize(word){
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1, lower.length);
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87e58df78d7a432d9bd1621b200b95a6&pageSize=${this.props.pageSize}`
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          this.setState({
            articles: result.articles,
            totalResults: result.totalResults,
            isLoad: true,
          });
        },
        (error) => {
          this.setState({
            isLoad: true,
            error,
          });
        }
      );
  }

  fetchMoreData = async() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87e58df78d7a432d9bd1621b200b95a6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    ).then((response) => {
        return response.json();
    }).then(
        (result) => {
          this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(result.articles),
            totalResults: result.totalResults,
            isLoad: true,
          });
    },(error) => {
      this.setState({
      isLoad: true,
      error,
      });
    });
  };

  render() {
    const { error, isLoad } = this.state;
    const errorMessage = () => {
      return <div>Error : {error.message}</div>;
    };
    const isLoading = () => {
      return (
        <div>
          <div className="container my-5 text-center">
            <p>Please wait loading......</p>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      );
    };

    const results = () => {
      return (
        <div>
          <div className="container my-3 text-center">
            <h2>AbTak {this.capitalize(this.props.category)} Top-headlines</h2>
          </div>
          <InfiniteScroll
            dataLength={this.state.articles?.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles?.length !== this.state.totalResults}
            loader={isLoading()}
            scrollableTarget="scrollableDiv"
          >
            <div className="container">
              <div className="row">
                {this.state.articles?.map((elem) => (
                  <div className="col-md-4" key={elem.url}>
                    <NewsItem
                      title={
                        elem.title?.length > 0
                          ? elem.title.slice(0, 50)
                          : elem.title
                      }
                      description={
                        elem.description?.length > 0
                          ? elem.description.slice(0, 70)
                          : elem.description
                      }
                      imgUrl={
                        elem.urlToImage === null
                          ? "Image Not Supported"
                          : elem.urlToImage
                      }
                      NewsUrl={elem.url}
                      author={elem.author}
                      PublishTime={elem.publishedAt}
                      source={elem.source.name}
                      mode={this.props.mode}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      );
    };

    if (error) return errorMessage();
    return !isLoad ? isLoading() : results();
  }
}


// handleNext = async () => {
//   fetch(
//     `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=87e58df78d7a432d9bd1621b200b95a6&page=${
//       this.state.page + 1
//     }&pageSize=${this.props.pageSize}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then(
//       (result) => {
//         this.setState({
//           page: this.state.page + 1,
//           articles: result.articles,
//           totalResults: result.totalResults,
//           isLoad: true,
//         });
//         console.log(result);
//       },
//       (error) => {
//         this.setState({
//           isLoad: true,
//           error,
//         });
//       }
//     );
// };

// handlePrev = async () => {
//   fetch(
//     `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=87e58df78d7a432d9bd1621b200b95a6&page=${
//       this.state.page - 1
//     }&pageSize=${this.props.pageSize}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then(
//       (result) => {
//         this.setState({
//           page: this.state.page - 1,
//           articles: result.articles,
//           totalResults: result.totalResults,
//           isLoad: true,
//         });
//         console.log(result);
//       },
//       (error) => {
//         this.setState({
//           isLoad: true,
//           error,
//         });
//       }
//     );
// };
// {/* <div className="container my-5 d-flex justify-content-between">
//             <button
//               type="button"
//               disabled={this.state.page <= 1}
//               className={`btn btn-${this.props.mode ? "dark" : "light"}`}
//               onClick={this.handlePrev}
//             >
//               &larr; Previous
//             </button>
//             <button
//               type="button"
//               disabled={
//                 this.state.page + 1 >
//                 Math.ceil(this.state.totalResults / this.props.pageSize)
//               }
//               className={`btn btn-${this.props.mode ? "dark" : "light"}`}
//               onClick={this.handleNext}
//             >
//               Next &rarr;
//             </button>
//           </div> */}