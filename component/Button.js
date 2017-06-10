import React, {Component} from 'react'

export default class Button extends Component{
    render(){
        return(
            <button className={this.props.sty} onClick={this.props.click}>Sign In</button>
        )
    }
}