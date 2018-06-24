import React, {Component} from 'react';
import './style.css'
import Element from './Element'

class ChoseFile extends Component  {
    state = {
        filesCounts : 50,
        MAX : 0
    };

    componentDidMount() {
        let e = document.getElementById('choser');
        let code = document.getElementById("code");
        let str = "";
        this.setState({
            MAX : 0
        });
        for (let i = 0; i < this.state.filesCounts; i++) {
            if (i < code.clientWidth/100) {
                this.setState({
                    MAX : this.state.MAX++
                });
                str += "1fr ";
            }
        }
        e.style.gridTemplateColumns = str;
    }

    resize = ()  => {
        let code = document.getElementById("codeSpace");
        let e = document.getElementById('choser');

        code.style.height = (window.innerHeight - e.clientHeight - 164) + "px";

    };

    setStandart = ()  => {
        let code = document.getElementById("codeSpace");
        let e = document.getElementById('choser');
        if (e.clientHeight < 35) {
            e.style.height = "35px";
        }
        if (e.clientHeight > 35*(this.state.MAX)) {
            e.style.height = 35 * (this.state.MAX) + "px";
        }
        let audit = document.getElementById('audit');

        code.style.height = (window.innerHeight - e.clientHeight - (170 + audit.clientHeight)) + "px";
    };

    render () {

        let files = [];
        for (let i = 0; i < this.state.filesCounts; i++) {
            files[i] = <Element/>
        }
        return (
            <div id="choser" className="choser"  onMouseDown={this.setStandart} onMouseUp={this.setStandart}  onTouchMove={this.resize} onTouchStart={this.setStandart} onTouchEnd={this.setStandart}>
                {files}
            </div>
        )
    }
}

export default ChoseFile