import React, { Component } from 'react';
import profile from '../img/profile/profile.jpg'
import './profileCard.css'
import ProfileStats from './profileStats';

class ProfileCard extends Component {
    state = {
        follows: 475,
        following: 435,
    };
    render() { 
        return ( 
            <div className="profile-card">
                <img src={profile} alt="" />
                <div className="follow">
                    <h1>_erisoff</h1>
                    <button><a href="">Follow</a></button>
                    <ProfileStats />
                </div>
            </div>
        );
    }
}
 
export default ProfileCard;