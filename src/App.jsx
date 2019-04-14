import React, { Component } from 'react';
import './App.css';
import { SocialMediaIcons } from './social/SocialMedia';
import WorkExperience from './resume/WorkExperience';
import VolunteerExperience from './resume/VolunteerExperience';

import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Header,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
const HomepageHeading = ({ mobile }) => (
  <Container text>
  <div className="col-12 centered" id="profile">
    { /* eslint-disable-next-line */}
    <img className="user profile" style={{marginTop: mobile ? '1em': '2em'}}/>
    <Header 
      as='h1' 
      className="text-center"
      inverted
      content="Jacob Olsen"
      style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '0.25em' : '1em',
          }}
    />
    <Header 
      as='h2' 
      className="text-center"
      inverted
      content="Brisbane, Australia"
      style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
    />
    <SocialMediaIcons/>

    <p style={{ fontSize: mobile ? '1em' : '1.33em', marginTop: mobile ? '0.5em' : '1.5em'}}>
      I have a love of technology and a love of theatre, and with investing so much of my time into both, 
      I've lost count of the number of weeks & months I have spent learning, growing and teaching others.
      I am constantly on the lookout for new opportunities, whether or not I have the experience at the time. 
    </p>
    <p style={{ fontSize: '0.7em', marginTop: mobile ? '0.5em' : '1.5em'}}>
      More details upon request
    </p>
  </div>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '1em 0em' }} vertical>
      <Grid container stackable columns='equal'>
        <Grid.Row >
          <Grid.Column width={8}>
            <WorkExperience />
          </Grid.Column>
          <Grid.Column width={8}>
            <VolunteerExperience />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/*<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <SocialMedia/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>*/}
  </ResponsiveContainer>
)
export default HomepageLayout
