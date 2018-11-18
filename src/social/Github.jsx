import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class Github extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export class GithubIcon extends Component {
  render() {
    return (
        <a href="http://www.github.com/rubberbandage">
          <Icon name="github" size='big' link/>
        </a>
    );
  }
}

