import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Icon } from 'semantic-ui-react';

export default class Facebook extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export class FacebookIcon extends Component {
  render() {
    return (
        <a href="http://www.facebook.com/jacob.olsen.7">
          <Icon name="facebook" size='big' link/>
        </a>
    );
  }
}

