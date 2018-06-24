import React , {Component} from 'react';
import './style.css'
import Menu from './Menu'

class Header extends Component {
    state  = {
        isOpen : false
    };

    useMenu = () => this.setState ({
        isOpen : !this.state.isOpen
    });

    render () {
        return (
            <div className="noselect header">
                <div className="box"/>
                <div className="box">
                    <div className="logo">
                        &lt;Home code/&gt;
                    </div>
                </div>
                <div className="box"/>
                <div className="box setting fas fa-bars" style={{backgroundColor : this.state.isOpen ? "white" : null, color : this.state.isOpen ? "rgba(27,31,35,0.91)" : null}} onClick={this.useMenu}/>
                {this.state.isOpen ? <Menu Authorization={true}/> : null}
            </div>
        )
    }
}

export default Header;