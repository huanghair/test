import React, {Component} from 'react';
import './css/02-maizuo.css';
import Film from "./com/Film";
import Cinema from "./com/Cinema";
import Center from "./com/Center";
export default class App extends Component{
    state = {
        list: [{
                id: 1,
                text: '电影'
            },{
                id: 2,
                text: '影院'
            },{
                id: 3,
                text: '我的'
            }],
        current: 1
    }

    handClick(e){
        this.setState({
            current: e
        })
    }

    which(){
        switch (this.state.current){
            case 1:
                return <Film></Film>
            case 2:
                return <Cinema></Cinema>
            case 3:
                return <Center></Center>
            default:
                return null
        }
    }
    render() {
        return(
            <div>
                { this.which() }
                <ul>
                    {
                        this.state.list.map(item =>
                            <li className={item.id === this.state.current? 'active' : ''}
                                key={item.id}
                                onClick={()=>this.handClick(item.id)}
                            >{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
