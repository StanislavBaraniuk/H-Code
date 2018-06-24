import React, {Component} from 'react';
import './style.css'

class Line extends Component  {
    state = {
        isSelect: false,
        isMove: false
    };

    moveEnter = () => this.setState({
        isMove: true
    });

    moveLeave = () => this.setState({
        isMove: false
    });


    select = () => this.setState({
        isSelect: !this.state.isSelect
    });

    render () {

        return (
            <div id="line" className="line" style={{backgroundColor : this.state.isSelect ? "red" : null, color :  this.state.isSelect ? "white" : null}}>
                <div className="box id-code">{this.props.id}</div>
                <div className="box text-code selectable" onClick={this.select} onMouseEnter={this.moveEnter} onMouseOut={this.moveLeave}>{this.props.text}</div>
                {this.state.isMove ? <div  className="box enter-button far fa-times-circle"/> : null}
            </div>
        )
    }
}

export default Line