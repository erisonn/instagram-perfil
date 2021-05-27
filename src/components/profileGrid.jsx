import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import './profileGrid.css'
import img1 from '../content/1.jpg'
import img2 from '../content/2.jpg'
import img3 from '../content/3.jpg'
import img4 from '../content/4.jpg'
import img5 from '../content/5.jpg'
import img6 from '../content/6.jpg'
import img7 from '../content/7.jpg'
import img8 from '../content/8.jpg'
import img9 from '../content/9.jpg'
import img10 from '../content/10.jpg'
import img11 from '../content/11.jpg'
import img12 from '../content/12.jpg'
{/* Imagens*/}

const likes = <FontAwesomeIcon icon={faHeart}className="likes" />
class ProfileGrid extends Component {
    render() { 
        return ( 
            <div className="profile-grid">
                <div className="grid-wrapper">
                    <div className ='pictures'><img src={img1} className="content" /></div>
                    <div className ='pictures'><img src={img2} className="content" /></div>
                    <div className ='pictures'><img src={img3} className="content" /></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'><img src={img4} className="content" /></div>
                    <div className ='pictures'><img src={img5} className="content" /></div>
                    <div className ='pictures'><img src={img6} className="content" /></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'><img src={img7} className="content" /></div>
                    <div className ='pictures'><img src={img8} className="content" /></div>
                    <div className ='pictures'><img src={img9} className="content" /></div>
                </div>
                <div className="grid-wrapper">
                    <div className ='pictures'><img src={img10} className="content" /></div>
                    <div className ='pictures'><img src={img11} className="content" /></div>
                    <div className ='pictures'><img src={img12} className="content" /></div>
                </div>
            </div>
        );
    }
}
 
export default ProfileGrid;