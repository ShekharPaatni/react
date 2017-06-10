import React, {Component} from 'react'
import '../css/login.css'
export default class TextBox extends Component{
    render(){
        return(
            <div className="txt-box">
                <input className="txt" onChange={this.props.change} value={this.props.val} type={this.props.type} placeholder={this.props.place}/>
                <div className="error">{this.props.err}</div>
            </div>
        )
    }
}