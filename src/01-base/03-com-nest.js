import React,{ Component } from "react";

class Navbar extends Component{
    render() {
        return(
            <div>
                Navbar
                <Child></Child>
            </div>
        )
    }
}

class Swiper extends Component{
    render() {
        return(
            <div>
                Swiper
            </div>
        )
    }
}

class Tabbar extends Component{
    render() {
        return(
            <div>
                Tabbar
            </div>
        )
    }
}

class Child extends Component{
    render() {
        return(
            <div>
                child
            </div>
        )
    }
}
export default class App extends Component{
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
