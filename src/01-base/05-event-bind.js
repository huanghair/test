import React, {Component} from 'react'
export default class App extends Component{
    render() {
        return(
            <div>
                <input/>
                <button onClick={()=>this.handClick(5)}>add</button>
            </div>
        )
    }
    handClick(v){
        console.log('add',v)
    }
}
