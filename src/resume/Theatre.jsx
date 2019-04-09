import React, { Component } from 'react';
import { Card, Feed, Icon, Image, Header, List } from 'semantic-ui-react'

const imageStyle = { maxHeight: '100px', marginTop: '1em', marginBottom: '1em' }

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
                            <Feed.Extra text>{show.season}</Feed.Extra>
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

    showLess = event => {
        this.setState({
            filtered: true
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
                image={<Image src={this.props.image} style={imageStyle} centered />}
                header={<Header as='h3'>{this.props.title}</Header>}
                meta=""
                description={shows}
                extra={
                    allShowsShown
                        ? <List.Item onClick={this.showMore} content="Show more" />
                        : this.state.filtered ? null : <List.Item onClick={this.showLess} content="Show less" />
                }
            />
        );
    }
}
