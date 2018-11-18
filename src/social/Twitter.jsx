import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Icon } from 'semantic-ui-react';

export default class Twitter extends Component {
  render() {
    return (
    	<div>
    		<a href="https://twitter.com/intent/tweet?screen_name=social_jacobo&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-dnt="true" data-show-count="false">Tweet to @social_jacobo</a>
    		<ScriptTag async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      	</div>
    );
  }
}

export class TwitterIcon extends Component {
  render() {
    return (
      <a href="http://www.twitter.com/social_jacobo">
        <Icon name="twitter" size='big' link/>
      </a>
    );
  }
}

