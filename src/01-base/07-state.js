import React, {Component} from 'react'
export default class App extends Component{
    // state = {
    //     add: true
    // }

    constructor() {
        super()
        this.state = {
            add: true,
            text: 'before'
        }
    }
    render() {
        return(
            <div>
               <h1>welcome</h1>
                <div>{this.state.text}</div>
                <button onClick={()=>{
                    this.setState({
                        add: !this.state.add,
                        text: 'after'
                    })
                }}>{this.state.add ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
