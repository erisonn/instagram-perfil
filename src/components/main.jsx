import React, { Component } from 'react';
import Header from './header';
import ProfileCard from './profileCard'
import ProfileGrid from './profileGrid'

class Main extends Component {
    render() { 
        return (  
            <React.Fragment>
                <Header />
                <ProfileCard />
                <ProfileGrid />
            </React.Fragment>
        );
    }
}
 
export default Main;