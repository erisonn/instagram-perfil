import React, { Component } from 'react';
import './profileGrid.css'

class ProfileGrid extends Component {
    render() { 
        return ( 
            <div className="profile-grid">
                <div className="grid-wrapper">
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                    <div className ='pictures'></div>
                </div>
            </div>
        );
    }
}
 
export default ProfileGrid;