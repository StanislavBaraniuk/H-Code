import React , {Component} from 'react';
import './style.css'
import Choser from './ChoseFile'
import CodeSpace from './CodeSpace'
import Audit from './Audit';

class Code extends Component {
    state = {
        isMove : false
    };

    resize = (e) => {
        if (this.state.isMove) {
            let left = document.getElementById("homeworkBlock");
            let main = document.getElementById("MiddleBlock");
            let code = document.getElementById("code");
            let font = document.getElementById("name");
            let serachBar = document.getElementById("serachBar");

            if (left.clientWidth >= 450) {
                left.style.width = e.clientX + "px";
                code.style.width = (main.clientWidth - left.clientWidth) + "px";
            } else if (left.clientWidth < e.clientX) {
                if (left.clientWidth <= (window.innerWidth * 0.9)) {
                    left.style.width = e.clientX + "px";
                    code.style.width = (main.clientWidth - left.clientWidth) + "px";
                } else if (left.clientWidth > e.clientX) {
                    left.style.width = e.clientX + "px";
                    code.style.width = (main.clientWidth - left.clientWidth) + "px";
                }
            }

            if (left.clientWidth < 650) {
                font.style.marginLeft = 10 + "%";
                serachBar.style.width = 90 + "%";
                font.style.width = 90 + "%";
                font.style.fontSize = 100 + "%";
                font.style.paddingTop = 45 + "px";
            } else {
                font.style.marginLeft = 0 + "px";
                serachBar.style.width = 95 + "%";
                font.style.width = 100 + "%";
                font.style.fontSize = 250 + "%";
                font.style.paddingTop = 30 + "px";
            }
        }

    };

    changeMove = () => this.setState({
        isMove : !this.state.isMove
    });

    render () {

        let Move = this.state.isMove;

        document.onmousemove = function (e) {
            if (Move) {
                let left = document.getElementById("homeworkBlock");
                let main = document.getElementById("MiddleBlock");
                let code = document.getElementById("code");
                let font = document.getElementById("name");
                let serachBar = document.getElementById("serachBar");
                let drag = document.getElementById("drag");
                drag.style.cursor = "col-resize";
                if (left.clientWidth >= 450) {
                    if (left.clientWidth <= (window.innerWidth * 0.7)) {
                        left.style.width = e.clientX + "px";
                        code.style.width = (main.clientWidth - left.clientWidth) + "px";
                    } else if (left.clientWidth > e.clientX) {
                        left.style.width = e.clientX + "px";
                        code.style.width = (main.clientWidth - left.clientWidth) + "px";
                    }
                } else if (left.clientWidth < e.clientX) {
                    left.style.width = e.clientX + "px";
                    code.style.width = (main.clientWidth - left.clientWidth) + "px";
                }


                if (left.clientWidth < 650) {
                    font.style.marginLeft = 10 + "%";
                    serachBar.style.width = 90 + "%";
                    font.style.width = 90 + "%";
                    font.style.fontSize = 100 + "%";
                    font.style.paddingTop = 45 + "px";
                } else {
                    font.style.marginLeft = 0 + "px";
                    serachBar.style.width = 95 + "%";
                    font.style.width = 100 + "%";
                    font.style.fontSize = 250 + "%";
                    font.style.paddingTop = 30 + "px";
                }
            }


        };
        // this.change(Move);
        return (
            <div id="code" className="code" style={{height : (window.innerHeight - 100)}}>
                {/*<div id="drag" className="box drag"  onDragEnd={this.resize} onDrag={this.resize} on/>*/}
                {window.innerWidth > 770 ? <div id="drag" className="box drag"  onClick={this.changeMove}  /> : null}
                <div className="content noselect box">
                    {this.props.isOpen ? <Choser/> : null}
                    {this.props.isOpen ? <CodeSpace/> :
                        <div>
                            <div style={{height : (window.innerHeight/2 - 100)}}/>
                            <div className="CodeText noselect">Open file to show code</div>
                        </div>}
                    {this.props.isOpen ? <Audit isTeacher={true}/> : null}
                </div>
            </div>
        )
    }
}

export default Code;