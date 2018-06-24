import React , {Component} from 'react';
import './style.css'

class Menu extends Component {
    componentDidMount () {
        let menu = document.getElementById("dropdown-menu");

        menu.style.marginLeft = (window.innerWidth - menu.clientWidth - 93) + "px";
    }
    render () {
        return (
            <div id="dropdown-menu" className="noselect dropdown-menu">
                {this.props.Authorization ? <a href="../../../../public/account.html" className="menu-element">Account</a> : null}
                {!this.props.Authorization ?    <a href="../../../../public/sign.html" className="menu-element sign">Sign in</a> : null}
                {this.props.Authorization ? <a href="../../../../public/account.html" className="menu-element">Exit</a> : null}
            </div>
        )
    }
}

export default Menu;