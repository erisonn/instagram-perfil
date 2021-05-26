import React, { Component } from 'react';

class ProfileInfo extends Component {
    state = {
        nome: 'Erison',
        descrição: 'Desenvolvedor Web.'
    }
    render() { 
        return (  
            <div className="profile-info">
                <h3>{this.state.nome}</h3>
                <p>{this.state.descrição}</p>
            </div>
        );
    }
}
 
export default ProfileInfo;