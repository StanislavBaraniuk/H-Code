import React , {Component} from 'react';
import './style.css'

class Audit extends Component {
    render () {
        return (
            <div style={{gridTemplateColumns : !this.props.isTeacher ? "1fr" : null}} id="audit" className="audit">
                {this.props.isTeacher ?
                        <div className=" audit-icon ok-icon ">
                            <div className="fas fa-check"/>
                        </div>
                    :
                    null}
                {this.props.isTeacher ?
                    <div className=" audit-icon no-icon">
                        <div className="fas fa-times"/>
                    </div>
                    :
                    null
                }
                {!this.props.isTeacher ?
                    <div className="audit-icon setting-icon">
                        <div className="fas fa-cog"/>
                    </div>
                    :
                    null
                }
                }
            </div>
        )
    }
}

export default Audit;