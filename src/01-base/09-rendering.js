import React, {Component} from 'react'
export default class App extends Component{
    state = {
        list: [{
            id: 1,
            text: 'text1'
        },{
            id: 2,
            text: 'text2'
        },{
            id: 3,
            text: 'text3'
        }]
    }
    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.list.map(item => <li key={item.id}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }
}
