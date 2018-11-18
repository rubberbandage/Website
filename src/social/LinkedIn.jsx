import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Icon } from 'semantic-ui-react';

export default class LinkedIn extends Component {
  render() {
    return (
    	<div>
      		<ScriptTag src="//platform.linkedin.com/in.js" type="text/javascript"/>
      		<ScriptTag type="IN/MemberProfile" data-id="http://www.linkedin.com/in/jacob-o" data-format="inline" data-related="false"/>
      	</div>
    );
  }
}

export class LinkedInIcon extends Component {
  render() {
    return (
    	<a href="http://www.linkedin.com/in/jacob-o">
      		<Icon name="linkedin" size='big' link/>
      	</a>
    );
  }
}


