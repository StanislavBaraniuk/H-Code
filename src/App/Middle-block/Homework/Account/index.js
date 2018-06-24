import React, {Component} from 'react';
import './style.css'

class Account extends Component  {
    state = {
        avatar : "../../../../../resourse/2.jpg",
        spaceHeight : 0
    };

    render () {
        return (
                <div className="account">
                    <div className="box avatar"/>
                    <div id="name" className="box name">Stanislav Baraniuk</div>
                </div>
        )
    }
}

export default Account


