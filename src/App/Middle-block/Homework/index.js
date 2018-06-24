import React , {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import List from './List'
import Account from './Account';
import Search from './Search';

class Homework extends Component {


    render () {
        return (
            <div id="homeworkBlock" className="homework" style={{height : (window.innerHeight - 100)}}>
                <Account/>
                <Search/>
                <List/>
            </div>
        )
    }
}

export default Homework;