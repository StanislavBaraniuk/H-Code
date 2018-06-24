import React , {Component} from 'react';
import './style.css'
import Homework from './Homework'
import Code from './Code';
// let $ = require("jquery");
class MiddleBlock extends Component {

    state = {
        isResize : true
    };



    render () {
        return (
            <div id="MiddleBlock" className="MiddleBlock " style={{height : (window.innerHeight - 100)}}>
                <Homework/>
                <Code isOpen={true} isTeacher={true}/>
            </div>
        )
    }
}

export default MiddleBlock;