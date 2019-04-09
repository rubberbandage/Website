import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Theatre from './Theatre';
import volunteerExperienceData from './volunteerExperienceData'

export default class VolunteerExperience extends Component {
	render() {
		return (
			<Container>
				<Header as='h2'>Theatrical Experience</Header>
				{
					volunteerExperienceData.map(companyData => {
						return <Theatre
							key={companyData.title}
							image={companyData.logo}
							title={<a href={companyData.url}>{companyData.title}</a>}
							shows={companyData.shows}
						/>
					})
				}
			</Container>
		);
	}
}


