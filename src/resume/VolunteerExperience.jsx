import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import Theatre from './Theatre';

const imageStyle = {maxHeight: '100px', marginTop: '1em', marginBottom: '1em'}

export default class VolunteerExperience extends Component {
  render() {
    return (
    	<Container>
    		<Header as='h2'>Theatrical Experience</Header>
			<Theatre 
				image={<Image src="/assets/images/imtc_logo.png" style={imageStyle} centered/>}
				title={<a href="https://www.ipswichmusicaltheatrecompany.com.au">Ipswich Musical Theatre Company</a>}
				shows={[
					{	
						title: "LIVE! AT THE COURTHOUSE",
						role: "Lighting",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "21 July, 2018"
					},
					{	
						title: "ARE YOU BEING SERVED",
						role: "Lighting Designer & Operator",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "25 May - 2 June, 2018"
					},
					{	
						title: "LES MISÉRABLES",
						role: "Stage Manager",
						location: "Ipswich Civic Centre, Ipswich, Queensland",
						season: "8 - 17 September, 2017"
					},
					{	
						title: "WICKED!",
						role: "Stage Manager",
						location: "Ipswich Civic Centre, Ipswich, Queensland",
						season: "9 - 18 September, 2016"
					},
					{	
						title: "A LITTLE PRINCESS",
						role: "Lighting Operator",
						location: "Ipswich Girl's Grammar School, Ipswich, Queensland",
						season: "8 - 10 July, 2016"
					},
					{	
						title: "THE VICAR OF DIBLEY",
						role: "Lighting & Sound",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "22 - 30 April, 2016"
					},
					{	
						title: "LIVE! AT THE COURTHOUSE",
						role: "Lighting",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "2 July, 2016"
					},
					{	
						title: "SUNDAY IN THE PARK WITH GEORGE",
						role: "Audio Operator",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "5 - 13 February, 2016"
					},
					{	
						title: "MARY POPPINS",
						role: "Stage Manager",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "12 - 20 September, 2015"
					},
					{	
						title: "THE VICAR OF DIBLEY",
						role: "Lighting & Sound",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "1 - 9 May, 2015"
					},
					{	
						title: "THE PHANTOM OF THE OPERA",
						role: "Stage Manager",
						location: "Ipswich Civic Centre, Ipswich, Queensland",
						season: "12 - 20 September, 2014"
					},
					{	
						title: "DANI GIRL",
						role: "Sound",
						location: "The Old Courthouse, Ipswich, Queensland & Esk Civic Centre, Esk, Queensland",
						season: "23 May - 14 June, 2014"
					},
					{	
						title: "HIGH SCHOOL MUSICAL JR.",
						role: "Lighting",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "23 May - 14 June, 2014"
					},
					{	
						title: "ROALD DAHL'S SNOW WHITE AND THE SEVEN DWARVES",
						role: "Lighting",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "23 May - 14 June, 2014"
					},
					{	
						title: "BABY BOOMERS AND THEIR MUSIC",
						role: "Lighting",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "28 March - 5 April, 2014"
					},
					
					{	
						title: "THE SOUND OF MUSIC",
						role: "Stage Manager",
						location: "Ipswich Civic Centre, Ipswich, Queensland",
						season: "21 - 24 September, 2013"
					},
					{	
						title: "SECRETS EVERY SMART TRAVELLER SHOULD KNOW",
						role: "Lighting & Sound",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "31 May - 8 June, 2013"
					},
					{	
						title: "[TITLE OF SHOW]",
						role: "Projectionist",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "8 - 16 February, 2013"
					},
					{	
						title: "SONGS THAT WON THE WAR",
						role: "Audio",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "11 November, 2012"
					},
					{	
						title: "THE BOY FROM OZ",
						role: "Ensemble",
						location: "Ipswich Civic Centre, Ipswich, Queensland",
						season: "14 - 16 September, 2012"
					},
					{	
						title: "INTO THE WOODS",
						role: "Sound",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "22 - 28 March, 2012"
					},
					{	
						title: "OLIVER!",
						role: "Ensemble",
						location: "The Old Courthouse, Ipswich, Queensland",
						season: "17 - 20 September, 2011"
					},
				]}
			/>
			<Theatre 
				image={<Image src="/assets/images/that_logo.jpeg" style={imageStyle} centered/>}
				title={<a href="http://www.thatproductioncompany.com.au/">THAT Production Company</a>}
				shows={[
					{	
						title: "TWO WEEKS WITH THE QUEEN",
						description: "TWO WEEKS WITH THE QUEEN adapted by Mary Morris, from the novel by Morris Gleitzman, with new songs by Lizzie Flynn, was presented at Studio 188 from 20 - 29 October, 2016",
						role: "Lighting Operator",
						location: "Studio 188, Ipswich, Queensland",
						season: "20 - 29 October, 2016"
					},
					{	
						title: "PAINS OF YOUTH",
						description: "PAINS OF YOUTH by Ferdinand Bruckner in a version by Martin Crimp was presented at Studio 188 from 5 - 15 November, 2014",
						role: "Pianist",
						location: "Studio 188, Ipswich, Queensland",
						season: "5 - 15 November, 2014"
					}
				]}
			/>
		</Container>
    );
  }
}


