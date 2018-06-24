import React, {Component} from 'react'
import './style.css'

class Search extends Component {
    render () {
        return (
            <div className="search-box box">
                <input id="serachBar" className="serachBar" type="text" placeholder="Search"/>
            </div>
        )
    }
}

export default Search