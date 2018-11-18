import React, { Component } from 'react';
import { Card, Feed, Icon, Header, List } from 'semantic-ui-react'

export default class Theatre extends Component {

    constructor(props) {
        super(props)

        this.state = {
            'filtered': true
        }
    }

	shows(shows) {
		return shows.map((show, index) => {
            return (
                <Feed key={index}>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Summary>
                        { /* eslint-disable-next-line */}
                        {show.title}
                        <Feed.Date>{show.role}</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>{ show.season }</Feed.Extra>
                      <Feed.Meta><Icon name='marker' />{show.location}</Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
            )
        })
	}

    showMore = event => {
        this.setState({
            filtered: false
        })
    };

  	render() {
        var shows = this.shows(this.props.shows)

        if (this.state.filtered) {
            shows = shows.filter(element => element.key < 5)
        }

        var allShowsShown = this.props.shows.length > shows.length

    	return (
    		<Card
    			fluid
    			image={ this.props.image }
                header={ <Header as='h3'>{this.props.title}</Header> }
    			meta=""
    			description={ shows }
    			extra={ allShowsShown ? <List.Item onClick={this.showMore} content="Show more"></List.Item> : null }
			/>
    	);
  	}
}
