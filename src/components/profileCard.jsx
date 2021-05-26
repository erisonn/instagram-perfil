import React, { Component } from 'react';
import profile from '../img/profile/profile.jpg'
import './profileCard.css'
import ProfileStats from './profileStats';
import ProfileInfo from './profileInfo'

class ProfileCard extends Component {
    state = {
        username: '_erisoff',
    };
    render() { 
        return ( 
            <div className="profile-card">
                <div className="profile-card-wrapper">
                    <img src={profile} alt="" />
                    <div className="follow">
                        <h1>{this.state.username}</h1>
                        <button><a href="https://github.com/erisonn" target="__blank">Follow</a></button>
                        <ProfileStats />
                        <ProfileInfo />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProfileCard;