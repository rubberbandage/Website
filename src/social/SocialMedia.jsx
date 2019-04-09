import React, { Component } from 'react';
import { LinkedInIcon } from './LinkedIn'
import { TwitterIcon } from './Twitter'
import { GithubIcon } from './Github'
import { InstagramIcon } from './Instagram'
import { RedditIcon } from './Reddit'
// import { KeybaseIcon } from './Keybase'

export default class SocialMedia extends Component {
  render() {
    return (
    	<div>
  		</div>
    );
  }
}

export class SocialMediaIcons extends Component {
  render() {
    return (
    	<div>
        <LinkedInIcon/>
    		<TwitterIcon/>
        <GithubIcon/>
      	<InstagramIcon/>
        <RedditIcon/>
        {/* <KeybaseIcon/> */}
  		</div>
    );
  }
}
