import React, { Component } from 'react';
import './profileStats.css'

class ProfileStats extends Component {
    render() { 
        return ( 
            <ul className="profile-stats">
                <li>12 Posts</li>
                <li>470 Followers</li>
                <li>435 Following</li>
            </ul>
        );
    }
}
 
export default ProfileStats;