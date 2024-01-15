import React, {Component} from 'react'
export default class App extends Component{
    text = React.createRef()
    render() {
        return(
            <div>
                <input ref={this.text}/>
                <button onClick={()=>this.handClick()}>add</button>
            </div>
        )
    }
    handClick(){
        console.log('add',this.text.current.value)
    }
}
