import React, { Component } from 'react';
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import imageSrc1 from '../../images/pp1.png'
import imageSrc2 from '../../images/pp2.png'
import imageSrc3 from '../../images/pp3.jpeg'

class Suggestions extends Component {   
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">imnitishk_</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">SriChandana</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">Tarak999</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">ChanduDaggubati</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">Novia_Deals</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">alwaysramcharan</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">Chakrrri</div>
                    </div>
                    
                </div>
            </div>
        </div> );
    }
}
 
export default Suggestions;