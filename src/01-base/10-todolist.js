import React, {Component} from 'react'
export default class App extends Component{
    text = React.createRef()
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
    delete (d) {
        let newArr = this.state.list.filter(item => item.id !== d)
        this.setState({
            list: newArr
        })
    }
    render() {
        return(
            <div>
                <input ref={this.text}/>
                <button onClick={()=>{
                    this.setState({
                        list: [...this.state.list,{
                            id: (Math.random()*100).toFixed(2),
                            text: this.text.current.value
                        }]
                    })
                    this.text.current.value = ''
                }}>add</button>
                <ul>
                    {
                        this.state.list.map(item => <li key={item.id}>
                            {item.text}
                            <button onClick={() => {this.delete(item.id)}}>删除</button>
                        </li>)
                    }
                </ul>
                {this.state.list.length>0 ? null : <div>暂无</div>}
                {this.state.list.length===0 && <div>暂无</div>}
            </div>
        )
    }
}
