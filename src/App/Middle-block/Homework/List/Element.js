import React, {Component} from 'react'

import './style.css'
import ReactTooltip from 'react-tooltip';

class Element extends Component {
    state = {
        dateCreate : "01.02.2018",
        size : "16.1 KB"
    };

    render () {
        return (
            <div className="task">
                <ReactTooltip />
                <div className="icon-box box">
                    {/*<div className=""/>*/}
                    <div style={{color : this.props.workProgress ? "green" : this.props.workProgress !== null ? "red" : null}} className=" icons far fa-calendar-alt sIcon" id="dataIcon" data-tip={this.state.dateCreate}/>
                </div>
                <div className="icon-box box">
                    {/*<div className=""/>*/}
                    <div style={{color : this.props.workProgress ? "green" : this.props.workProgress !== null ? "red" : null}} className=" icons fas fa-cloud-download-alt sIcon" id="downloadIcon" data-tip={this.state.size}/>
                </div>
                <div className="text-box box" >
                    <div id="text" className="text" style={{color : this.props.workProgress ? "green" : this.props.workProgress !== null ? "red" : null}}>{this.props.txt}</div>
                </div>
                <div className="icon-box box">
                    <div className=" icons fab fa-codepen" id="downloadIcon" data-tip="Open files" style={{color : this.props.workProgress ? "green" : this.props.workProgress !== null ? "red" : null}}/>
                </div>
            </div>
        )
    }
}



export default Element