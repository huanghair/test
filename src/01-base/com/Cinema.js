import React from "react";
import axios from 'axios'
class App extends React.Component{
    state ={
        cinemaList:[]
    }
    constructor() {
        super();
        axios({
            url:'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=924199',
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1705128173693937866014721"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            this.setState({
                cinemaList: res.data.data.cinemas.slice(0,10)
            })
            // console.log(this.state.cinemaList)
        })
    }

    handInput(e){
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <input onInput={this.handInput}/>
                {
                    this.state.cinemaList.map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                            1111111111
                        </dl>
                    )
                }
            </div>
        )
    }
}

export default App
