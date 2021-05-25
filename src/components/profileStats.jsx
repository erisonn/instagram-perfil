import React, { Component } from 'react';
import './profileStats.css'

class ProfileStats extends Component {
    render() { 
        return ( 
            <ul className="profile-stats">
                <li><strong>12</strong> Posts</li>
                <li><strong>470</strong> Followers</li>
                <li><strong>435</strong> Following</li>
            </ul>
        );
    }
}
 
export default ProfileStats;