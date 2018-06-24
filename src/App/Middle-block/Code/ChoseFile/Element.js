import React, {Component} from 'react'
import './style.css'
import ReactTooltip from 'react-tooltip';

class Element extends Component {
    state = {
        fileName: "DZ 5 Console",
        dateCreate : "01.02.2018",
        size : "16.1 KB"
    };

    render () {
        let date = new Date();
        return (
            // data-tip={this.state.fileName}
            <div className="file box" >
                <ReactTooltip />
                <p>File #</p>
            </div>
        )
    }
}



export default Element