import React, { Component } from 'react';
import Header from './header';
import ProfileCard from './profileCard'
import ProfileStats from './profileStats'

class Main extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Header />
                <ProfileCard />
            </React.Fragment>
        );
    }
}
 
export default Main;