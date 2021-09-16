import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div>
                This is a news components
                <NewsItem/>
            </div>
        )
    }
}
