import React, {Component} from 'react'
import './css/01-index.css'
export default class App extends Component{
    render() {
        const name = 'lily'
        const obj = {
            background: "blue"
        }
        return(
            <div>
               04-component-style
                <div>
                    {10+20} - {name}
                </div>
                <div style={obj}>style</div>
                <div style={{background:"yellow"}}>style</div>
                <div className="active">style</div>

                <label htmlFor="username">用户名:</label>
                <input type="text" id="username"/>
            </div>
        )
    }
}
