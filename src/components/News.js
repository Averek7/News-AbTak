import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc" imgUrl="myImg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc" imgUrl="myImg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc" imgUrl="myImg"/>
                    </div>
                </div>
            </div>
        )
    }
}
