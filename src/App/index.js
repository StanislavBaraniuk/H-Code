import React , {Component} from 'react';
import Header from './Header';
import Middle from './Middle-block';
import './style.css';

class App extends Component {
    render () {
        return (
        <div className="App">
            <Header/>
            <Middle/>
        </div>
        )
    }
}

export default App;