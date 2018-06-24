import React, {Component} from 'react'
import './style.css'
import Element from './Element';


class TaskBlock extends Component {


    render () {

        let elements = [];
        let i = 0, e = 0;
        do {
            elements[i] = <Element txt={"Homework #" + (i + 1) + " PHP / React.js"} workProgress={null}/>;
            i++;
            e += 150;
        } while (e < window.innerHeight);


        return (
            <div className="box">
                {elements}
                {elements.length === 0 ? <div className="freeArea">Add homework</div> : null}
            </div>
        )
    }
}

export default TaskBlock