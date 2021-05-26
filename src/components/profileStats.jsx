import React, { Component } from 'react';
import './profileStats.css'

class ProfileStats extends Component {
    state = {
        posts: 12,
        followers: 470,
        following: 435
    }
    render() { 
        return ( 
            <ul className="profile-stats">
                <li><strong>{this.state.posts}</strong> Posts</li>
                <li><strong>{this.state.followers}</strong> Followers</li>
                <li><strong>{this.state.following}</strong> Following</li>
            </ul>
        );
    }
}
 
export default ProfileStats;