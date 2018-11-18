import React, { Component } from 'react';
import moment from 'moment'
import { Card, Header } from 'semantic-ui-react'

const formatDate = (date) => moment(date, "MM/YYYY").format("MMM YYYY")

export default class Work extends Component {

	period() {
		let {startDate, endDate} = this.props

		if (startDate && endDate) {
			return `${formatDate(startDate)} - ${formatDate(endDate)}`
		} else {
			return `${formatDate(startDate)} - Current`
		}
	}

	locations() {
		return this.props.locations.map((location) => <p key={location}>{location}</p>)
	}

  	render() {
    	return (
    		<Card
    			fluid
    			header={<Header as='h3' content={this.props.title}/>}
    			description={this.props.description}
    			meta={this.period()}
    			extra={this.locations()}
			/>
    	);
  	}
}


