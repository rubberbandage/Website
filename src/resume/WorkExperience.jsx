import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react'
import Work from './Work';
import Map from './Map'

import { workLocations } from './locations.js'

export default class WorkExperience extends Component {
  render() {
    return (
    	<Container>
    		<Header as='h2'>Employment History</Header>
    		<Segment style={{padding: 0}}><Map locations={workLocations}
    		map={{
    			projectionConfig: {
		            scale: 220,
		            xOffset: -50,
		            yOffset: 10,
		        },
        	  	width: 980,
          		height: 450
          	}}/></Segment>
			<Work 
				title={<span>Software Consultant<br/><a href="https://www.thoughtworks.com">ThoughtWorks</a></span>}
				startDate="01/2017"
				locations={['Brisbane, Australia', 'Pune, India', 'Barcelona, Spain']}
			/>
			<Work 
				title={<span>ITAS Tutor<br/><a href="https://www.qut.edu.au/">Queensland University of Technology</a></span>}
				startDate="02/2014"
				endDate="06/2014"
				locations={['Brisbane, Australia']}
			/>
			<Work 
				title={<span>Retreat Facilitator<br/><a href="https://www.passionistyouth.com.au/">The Passionist Youth Retreat Team</a></span>}
				startDate="01/2012"
				endDate="12/2015"
				locations={['Brisbane, Australia']}
			/>
		</Container>
    );
  }
}


