import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class Instagram extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export class InstagramIcon extends Component {
  render() {
    return (
        <a href="http://www.instagram.com/social_jacobo">
          <Icon name="instagram" size='big' link/>
        </a>
    );
  }
}

