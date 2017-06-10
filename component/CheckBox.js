import React, {Component} from 'react'

export default class CheckBox extends Component{
    render(){
        return(
            <input type="checkbox" value="Remember me" className={this.props.sty} />
        )
    }
}